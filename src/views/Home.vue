<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- 主背景 -->
    <div class="absolute inset-0 bg-black"></div>
    
    <!-- 动态背景层 -->
    <div class="absolute inset-0">
      <!-- 渐变背景 -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      <!-- 动态粒子效果 -->
      <div class="absolute inset-0">
        <div class="particles-container">
          <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
        </div>
      </div>
      
      <!-- 光晕效果 -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <!-- 网格线 -->
      <div class="absolute inset-0 bg-grid-white/[0.02]"></div>
    </div>

    <!-- 内容层 -->
    <div class="relative z-10">
      <!-- 左上角 Logo -->
      <div class="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
            <span class="text-white font-bold text-xs sm:text-sm">C</span>
          </div>
          <div class="flex flex-col">
            <span class="text-white font-bold text-base sm:text-lg bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-tight">Context Studio</span>
            <span class="text-white/60 text-xs leading-tight">技术写作</span>
          </div>
        </div>
      </div>
      
      <!-- 头部区域 -->
      <header class="pt-16 pb-12">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center space-y-6">
            <!-- 网站标题 -->
            <div class="space-y-4">
              <div>
                <div class="mb-4">
                  <span class="text-white/60 text-sm font-medium">Context Studio · 技术写作</span>
                </div>
                <h1 class="text-3xl lg:text-4xl font-bold text-white mb-3">
                  <span class="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    技术写作上下文工程
                  </span>
                </h1>
                <p class="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
                  提示词时代结束了，真正的竞争在「谁能为模型构建结构化思维环境」
                </p>
              </div>
              
              <!-- 上下文工程介绍 -->
              <div class="mt-8 max-w-4xl mx-auto px-4">
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-left">
                  <p class="text-white/80 text-sm leading-relaxed mb-4">
                    在技术写作领域，<span class="text-white font-semibold">精密上下文工程（Context Engineering）</span>不是简单的提示词技巧，而是一种系统方法论。它让 AI 从「输入-输出」的简单模式，走向「有状态的推理流程」，真正理解技术写作的深层逻辑。
                  </p>
                  <div class="space-y-3 mb-4">
                    <p class="text-white/70 text-xs italic">
                      对于技术写作，LLM 就像「单线程 CPU + 巨大缓存 + 弱内存」，而 Context Engineering 就是它的「运行时环境」——让模型真正理解技术逻辑、写作风格和读者需求。
                    </p>
                  </div>
                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div class="flex-1">
                        <p class="text-white/90 text-sm font-medium mb-1">结构层：从文本到结构化思维</p>
                        <p class="text-white/60 text-xs">在技术写作中，将写作要求、风格指南、读者画像从「文本描述」变成「结构化对象」。比如：角色定义、任务分解、输出格式规范、质量标准等，构建一个清晰的信息调度器。</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div class="flex-1">
                        <p class="text-white/90 text-sm font-medium mb-1">信息调度层：分阶段提供上下文</p>
                        <p class="text-white/60 text-xs">技术写作的不同阶段需要不同信息：开头需要背景和问题语境，正文需要原理讲解和代码示例，结尾需要升华和互动引导。信息调度层让模型在不同阶段「看到」不同的上下文，具备闭环推理能力。</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">3</div>
                      <div class="flex-1">
                        <p class="text-white/90 text-sm font-medium mb-1">记忆层：时间连续的创作流程</p>
                        <p class="text-white/60 text-xs">让上下文变成「时间连续的」：记住前面的段落风格、已使用的案例、读者的理解进度。在多轮对话中，模型能基于之前的「记忆」继续创作，构建动态演化的推理管线，而不是每次都从零开始。</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 pt-4 border-t border-white/10">
                    <p class="text-white/90 text-xs font-semibold mb-2">技术写作的核心观点：</p>
                    <p class="text-white/70 text-xs leading-relaxed">
                      世界上没有强模型，只有强上下文。在技术写作中，当你能为模型构建一个结构化、稳定、高质量、动态演化的上下文环境时——包括写作风格、技术深度、读者画像、平台算法要求等——你实际上是在为模型搭建一个「增强智能装置」，让它真正理解技术写作的本质。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- 主要内容区域 -->
      <main class="pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <!-- 步骤导航 -->
          <div class="mb-12">
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <div class="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span class="text-white/80 text-sm font-medium">第一步：结构层 - Prompt 模板库</span>
              </div>
              <div class="hidden sm:flex items-center space-x-2 text-white/40">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span class="text-xs">第二步：信息调度层 · 第三步：记忆层 · 第四步：动态上下文管线</span>
              </div>
            </div>
          </div>
          
          <WritingPromptsCarousel />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WritingPromptsCarousel from '@/components/ui/WritingPromptsCarousel.vue'

// 粒子效果
const getParticleStyle = (index) => {
  const size = Math.random() * 3 + 1
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = Math.random() * 20
  const duration = Math.random() * 10 + 10
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}
</script>

<style scoped>
/* 粒子动画 */
@keyframes particle-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  50% {
    transform: translateY(-100px) translateX(50px);
  }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4);
  border-radius: 50%;
  opacity: 0;
  animation: particle-float linear infinite;
}

/* 网格背景 */
.bg-grid-white\/\[0\.02\] {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 100px 100px;
}

/* 延迟动画 */
.delay-1000 {
  animation-delay: 1s;
}

/* 毛玻璃效果增强 */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .particles-container {
    display: none;
  }
}
</style>