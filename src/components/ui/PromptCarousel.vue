<template>
  <div class="relative w-full">
    <!-- 轮播容器 -->
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <!-- 轮播内容 -->
      <div class="flex transition-transform duration-500 ease-in-out" 
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(prompt, index) in featuredPrompts" 
             :key="index"
             class="w-full flex-shrink-0 p-8 lg:p-12">
          <div class="max-w-4xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <!-- 左侧内容 -->
              <div class="space-y-6">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {{ prompt.icon }}
                  </div>
                  <div>
                    <span class="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {{ prompt.category }}
                    </span>
                  </div>
                </div>
                
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  {{ prompt.title }}
                </h3>
                
                <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ prompt.description }}
                </p>
                
                <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{{ prompt.duration }}</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{{ prompt.difficulty }}</span>
                  </div>
                </div>
                
                <div class="flex space-x-3">
                  <button @click="copyPrompt(prompt.template)" 
                          class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                    复制模板
                  </button>
                  <router-link :to="`/tutorial/${prompt.id}`" 
                              class="border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-6 py-3 rounded-lg font-medium transition-all duration-200">
                    查看详情
                  </router-link>
                </div>
              </div>
              
              <!-- 右侧代码块 -->
              <div class="relative">
                <div class="bg-gray-900 rounded-xl p-6 shadow-2xl">
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex space-x-2">
                      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span class="text-gray-400 text-sm">prompt-template</span>
                  </div>
                  <pre class="text-green-400 text-sm leading-relaxed overflow-x-auto"><code>{{ prompt.template }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 指示器 -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button v-for="(prompt, index) in featuredPrompts" 
                :key="index"
                @click="goToSlide(index)"
                class="w-3 h-3 rounded-full transition-all duration-200"
                :class="index === currentIndex 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/75'">
        </button>
      </div>
      
      <!-- 左右箭头 -->
      <button @click="previousSlide" 
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
        <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button @click="nextSlide" 
              class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
        <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    
    <!-- 复制成功提示 -->
    <div v-if="showCopySuccess" 
         class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300"
         :class="showCopySuccess ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>模板已复制到剪贴板！</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { tutorials } from '@/data/tutorials'

// 精选提示语模板
const featuredPrompts = ref([
  {
    id: 'summary-prompt',
    title: '摘要生成模板',
    description: '让 AI 快速提取文本核心信息，生成准确简洁的摘要',
    category: '基础应用',
    difficulty: '初级',
    duration: '10 分钟',
    icon: '📝',
    template: `请为以下文本生成一个简洁的摘要，要求：
1. 保留核心信息和关键观点
2. 控制在 100-150 字以内
3. 使用客观、准确的表述
4. 突出最重要的结论或发现

文本内容：
[在这里粘贴需要摘要的文本]`
  },
  {
    id: 'comparison-prompt',
    title: '数据对比分析',
    description: '掌握让 AI 进行数据分析和对比的专业技巧',
    category: '数据分析',
    difficulty: '中级',
    duration: '15 分钟',
    icon: '📊',
    template: `请对以下两组数据进行对比分析，要求：
1. 识别主要差异和相似点
2. 分析数据趋势和模式
3. 提供可能的解释和洞察
4. 用表格或图表形式展示关键指标

数据集 A：[数据内容]
数据集 B：[数据内容]

分析维度：
- 时间范围：[具体时间]
- 关键指标：[指标名称]
- 对比重点：[重点内容]`
  },
  {
    id: 'role-simulation-prompt',
    title: '角色模拟对话',
    description: '让 AI 扮演特定角色，提供专业个性化的回应',
    category: '高级应用',
    difficulty: '高级',
    duration: '20 分钟',
    icon: '🎭',
    template: `你现在扮演 [角色名称]，请按照以下设定进行对话：

角色背景：
- 专业领域：[具体领域]
- 工作经验：[年限和经验]
- 专业特长：[核心技能]
- 沟通风格：[语言特点]

对话要求：
1. 始终保持角色一致性
2. 基于专业知识提供建议
3. 使用符合角色的语言风格
4. 在专业范围内回答，超出范围要说明

请开始对话：[用户问题]`
  },
  {
    id: 'creative-writing-prompt',
    title: '创意写作激发',
    description: '激发 AI 创造力，生成独特有趣的创意内容',
    category: '创意应用',
    difficulty: '中级',
    duration: '15 分钟',
    icon: '✍️',
    template: `请创作一个 [类型] 作品，要求：

创作设定：
- 主题：[具体主题]
- 风格：[写作风格]
- 长度：[字数要求]
- 视角：[叙述视角]

创意要求：
1. 情节要有吸引力和逻辑性
2. 角色要生动立体
3. 语言要符合设定风格
4. 要有独特的创意元素

额外要求：
- [其他具体要求]`
  }
])

const currentIndex = ref(0)
const showCopySuccess = ref(false)
let autoPlayInterval = null

// 自动播放
const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000) // 5秒切换一次
}

// 停止自动播放
const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// 下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % featuredPrompts.value.length
}

// 上一张
const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? featuredPrompts.value.length - 1 
    : currentIndex.value - 1
}

// 跳转到指定幻灯片
const goToSlide = (index) => {
  currentIndex.value = index
}

// 复制提示语模板
const copyPrompt = async (template) => {
  try {
    await navigator.clipboard.writeText(template)
    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

// 组件挂载时开始自动播放
onMounted(() => {
  startAutoPlay()
})

// 组件卸载时清理定时器
onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
/* 自定义滚动条样式 */
pre::-webkit-scrollbar {
  height: 6px;
}

pre::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 3px;
}

pre::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 3px;
}

pre::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style> 