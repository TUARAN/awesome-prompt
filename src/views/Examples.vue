<template>
  <div class="min-h-screen py-12">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="gradient-text">Prompt 示例库</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          探索各种实际应用场景中的 Prompt 示例，从简单到复杂，帮助你更好地理解和使用 AI 提示词。
        </p>
      </div>

      <!-- Examples Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          v-for="example in examples" 
          :key="example.id"
          class="card p-6"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="text-2xl">{{ example.icon }}</div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {{ example.title }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ example.category }}
                </p>
              </div>
            </div>
          </div>

          <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {{ example.description }}
          </p>

          <div class="space-y-3">
            <div>
              <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">输入：</h4>
              <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ example.input }}</p>
              </div>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Prompt：</h4>
              <CodeBlock language="prompt" class="text-sm">
                {{ example.prompt }}
              </CodeBlock>
            </div>

            <div>
              <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">输出：</h4>
              <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                <p class="text-sm text-green-800 dark:text-green-200">{{ example.output }}</p>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs">
                  {{ example.difficulty }}
                </span>
                <span>{{ example.tokens }} tokens</span>
              </div>
              <button
                @click="copyPrompt(example.prompt)"
                class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
              >
                复制 Prompt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/ui/CodeBlock.vue'

const examples = ref([
  {
    id: 'email-summary',
    title: '邮件摘要',
    description: '快速总结长邮件内容，提取关键信息',
    category: '办公效率',
    difficulty: '初级',
    tokens: 120,
    icon: '📧',
    input: '一封包含多个项目更新、会议安排和待办事项的长邮件',
    prompt: `请为以下邮件生成一个简洁的摘要，要求：
1. 提取最重要的 3-5 个要点
2. 标注需要立即行动的项目
3. 控制在 100 字以内
4. 使用清晰的条目格式

邮件内容：
[邮件内容]`,
    output: '📋 邮件摘要\n\n🔸 项目A进度：完成80%，预计下周交付\n🔸 项目B遇到技术问题，需要团队讨论\n🔸 下周三下午2点项目评审会议\n🔸 待办：准备项目C的需求文档\n\n⚠️ 需要立即行动：项目B技术问题讨论'
  },
  {
    id: 'code-review',
    title: '代码审查',
    description: '让 AI 帮助审查代码质量和潜在问题',
    category: '开发',
    difficulty: '中级',
    tokens: 180,
    icon: '💻',
    input: '一段 JavaScript 函数代码',
    prompt: `请对以下代码进行审查，要求：
1. 检查代码质量和最佳实践
2. 识别潜在的性能问题
3. 提供改进建议
4. 评估安全性风险

请按以下格式回答：
- 代码质量：[评价]
- 性能问题：[问题列表]
- 改进建议：[具体建议]
- 安全风险：[风险评估]

代码：
[代码内容]`,
    output: '✅ 代码质量：整体结构清晰，变量命名规范\n\n⚠️ 性能问题：\n- 缺少错误处理机制\n- 可能存在内存泄漏\n\n💡 改进建议：\n- 添加 try-catch 错误处理\n- 使用 const 替代 let\n- 添加输入验证\n\n🔒 安全风险：低风险，建议添加输入清理'
  },
  {
    id: 'content-rewrite',
    title: '内容改写',
    description: '将文本改写为不同的风格和语气',
    category: '写作',
    difficulty: '中级',
    tokens: 150,
    icon: '✍️',
    input: '一段技术文档内容',
    prompt: `请将以下内容改写为 [目标风格]，要求：
1. 保持原意不变
2. 调整语言风格和语气
3. 适应目标受众
4. 保持专业性和准确性

目标风格：[正式/轻松/专业/通俗易懂]
目标受众：[技术专家/普通用户/学生/商务人士]

原文：
[原文内容]`,
    output: '改写后的内容采用更加通俗易懂的语言，去除了技术术语，增加了具体的例子和解释，让普通用户也能轻松理解复杂的技术概念。'
  },
  {
    id: 'data-analysis',
    title: '数据分析',
    description: '分析数据并生成洞察报告',
    category: '分析',
    difficulty: '高级',
    tokens: 200,
    icon: '📊',
    input: '销售数据表格',
    prompt: `请分析以下销售数据，要求：
1. 识别关键趋势和模式
2. 计算重要指标（增长率、转化率等）
3. 提供数据洞察和建议
4. 生成可视化建议

请按以下结构回答：
## 数据概览
## 关键发现
## 趋势分析
## 建议行动

数据：
[数据内容]`,
    output: '## 数据概览\n总销售额：¥1,250,000，环比增长15%\n\n## 关键发现\n- 线上渠道增长最快（+25%）\n- 新客户转化率提升8%\n- 产品A表现突出\n\n## 趋势分析\nQ2增长主要来自线上渠道和新产品线\n\n## 建议行动\n1. 加大线上营销投入\n2. 推广产品A成功经验\n3. 优化新客户获取流程'
  },
  {
    id: 'creative-story',
    title: '创意故事',
    description: '生成有创意的短篇故事',
    category: '创意',
    difficulty: '中级',
    tokens: 160,
    icon: '📚',
    input: '科幻主题的短篇故事',
    prompt: `请创作一个 [类型] 短篇故事，要求：
1. 主题：[具体主题]
2. 风格：[写作风格]
3. 字数：800-1000字
4. 包含：[特定元素]

创作要求：
- 情节要有吸引力和逻辑性
- 角色要生动立体
- 语言要符合设定风格
- 要有独特的创意元素

请开始创作：`,
    output: '在2157年的新上海，AI助手"小智"不仅管理着城市的交通系统，还成为了人类情感交流的重要伙伴。当城市面临前所未有的危机时，小智必须学会理解人类最复杂的情感——牺牲与爱，才能拯救这座它深爱的城市。'
  },
  {
    id: 'problem-solving',
    title: '问题解决',
    description: '系统性地分析和解决复杂问题',
    category: '应用',
    difficulty: '高级',
    tokens: 220,
    icon: '🔧',
    input: '团队协作效率低的问题',
    prompt: `请帮助分析和解决以下问题：

问题描述：
[详细描述问题]

分析要求：
1. 识别问题的根本原因
2. 分析相关因素和影响
3. 提出多个解决方案
4. 评估每个方案的优缺点

解决方案要求：
- 可行性：方案是否可执行
- 成本效益：投入产出比
- 时间周期：实施时间
- 风险评估：可能的风险和应对

请按以下结构回答：
1. 问题分析
2. 解决方案
3. 实施建议
4. 预期效果`,
    output: '## 问题分析\n根本原因：缺乏有效的沟通机制和明确的工作流程\n\n## 解决方案\n1. 建立定期会议制度\n2. 使用协作工具\n3. 明确角色分工\n\n## 实施建议\n分阶段实施，先解决沟通问题\n\n## 预期效果\n3个月内提升团队效率30%'
  }
])

const copyPrompt = async (prompt) => {
  try {
    await navigator.clipboard.writeText(prompt)
    // 可以添加一个简单的提示
    console.log('Prompt 已复制到剪贴板')
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script> 