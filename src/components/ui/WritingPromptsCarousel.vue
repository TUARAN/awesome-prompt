<template>
  <div class="relative w-full">
    <!-- 统一的卡片容器 -->
    <div class="rounded-3xl bg-white/5 backdrop-blur-xl p-8 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- 标题和说明 -->
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold text-white">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              第一步：结构层 - Prompt 模板库
            </span>
          </h2>
          <p class="text-white/70 text-base max-w-2xl mx-auto">
            这是基础层：将写作要求、风格指南、读者画像从「文本描述」变成「结构化对象」，建立静态的模板库和规范体系
          </p>
        </div>
        
        <!-- 标签导航 -->
        <div class="flex justify-center relative z-40">
          <div class="flex flex-wrap gap-2 bg-white/5 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/10 max-w-5xl">
        <template v-for="(prompt, index) in visiblePrompts" :key="prompt.id">
          <!-- CSDN 标签带下拉菜单 -->
          <div v-if="prompt.category === 'CSDN博客'" class="relative">
            <button 
              @click="handleCategoryClick('CSDN博客', prompt)"
              class="px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-500 whitespace-nowrap relative overflow-hidden group flex items-center space-x-1"
              :class="activePrompt?.category === 'CSDN博客'
                ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-xl transform scale-105' 
                : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'">
              <span class="relative z-10">{{ activePrompt?.category === 'CSDN博客' ? activePrompt.shortTitle : prompt.shortTitle }}</span>
              <span 
                @click.stop="showCsdnHistory = !showCsdnHistory"
                class="relative z-10 ml-1 p-0.5 hover:bg-white/20 rounded transition-colors cursor-pointer inline-flex items-center">
                <svg class="w-3 h-3 transition-transform" :class="showCsdnHistory ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
              <div v-if="activePrompt?.category !== 'CSDN博客'" class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <!-- CSDN 历史版本下拉菜单 -->
            <div v-if="showCsdnHistory" 
                 @click.stop
                 class="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 z-50 min-w-[160px] max-h-[300px] overflow-y-auto">
              <div class="py-1">
                <button 
                  v-for="historyPrompt in csdnHistoryPrompts" 
                  :key="historyPrompt.id"
                  @click="setActivePromptByPrompt(historyPrompt); showCsdnHistory = false"
                  class="w-full px-4 py-2 text-left text-xs font-medium transition-colors relative overflow-hidden group"
                  :class="activePrompt?.id === historyPrompt.id
                    ? 'bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-indigo-600/30 text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'">
                  <span class="relative z-10">{{ historyPrompt.shortTitle }}</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- 翻译整理标签带下拉菜单 -->
          <div v-else-if="prompt.category === '翻译整理'" class="relative">
            <button 
              @click="handleCategoryClick('翻译整理', prompt)"
              class="px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-500 whitespace-nowrap relative overflow-hidden group flex items-center space-x-1"
              :class="activePrompt?.category === '翻译整理'
                ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-xl transform scale-105' 
                : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'">
              <span class="relative z-10">{{ activePrompt?.category === '翻译整理' ? activePrompt.shortTitle : prompt.shortTitle }}</span>
              <span 
                @click.stop="showTranslationHistory = !showTranslationHistory"
                class="relative z-10 ml-1 p-0.5 hover:bg-white/20 rounded transition-colors cursor-pointer inline-flex items-center">
                <svg class="w-3 h-3 transition-transform" :class="showTranslationHistory ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
              <div v-if="activePrompt?.category !== '翻译整理'" class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <!-- 翻译整理历史版本下拉菜单 -->
            <div v-if="showTranslationHistory" 
                 @click.stop
                 class="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 z-50 min-w-[160px] max-h-[300px] overflow-y-auto">
              <div class="py-1">
                <button 
                  v-for="historyPrompt in translationHistoryPrompts" 
                  :key="historyPrompt.id"
                  @click="setActivePromptByPrompt(historyPrompt); showTranslationHistory = false"
                  class="w-full px-4 py-2 text-left text-xs font-medium transition-colors relative overflow-hidden group"
                  :class="activePrompt?.id === historyPrompt.id
                    ? 'bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-indigo-600/30 text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'">
                  <span class="relative z-10">{{ historyPrompt.shortTitle }}</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- 其他标签 -->
          <button 
            v-else
            @click="setActivePromptByPrompt(prompt)"
            class="px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-500 whitespace-nowrap relative overflow-hidden group"
            :class="activePrompt?.id === prompt.id
              ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-xl transform scale-105' 
              : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'">
            <span class="relative z-10">{{ prompt.shortTitle }}</span>
            <div v-if="activePrompt?.id !== prompt.id" class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </template>
        
        <!-- 更多/收起按钮 -->
        <button 
          v-if="activePrompts.length > 5"
          @click="showMoreTags = !showMoreTags"
          class="px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-500 whitespace-nowrap relative overflow-hidden group text-white/70 hover:text-white hover:bg-white/10 hover:scale-105">
          <span class="relative z-10">{{ showMoreTags ? '收起' : '更多' }}</span>
          <svg class="w-4 h-4 inline-block ml-1 transition-transform" :class="showMoreTags ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
    
    <!-- 内容展示 -->
    <div class="relative overflow-hidden group transition-all duration-300" :class="(showCsdnHistory || showTranslationHistory) ? 'mt-8' : 'mt-0'">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- 代码块铺满 -->
        <div class="bg-black/40 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10 relative overflow-hidden group min-h-[600px]">
          <!-- 代码块装饰背景 -->
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-8">
              <div class="flex space-x-3">
                <div class="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                <div class="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                <div class="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-white/60 text-sm font-mono">writing-prompt</span>
                <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                <!-- 复制按钮 - 标题栏右侧 -->
                <button @click="copyPrompt(activePrompt.template)" 
                        class="ml-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md relative overflow-hidden group text-xs flex items-center space-x-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  <span>复制</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            <div class="relative">
              <pre class="text-emerald-400 text-sm leading-relaxed overflow-x-auto font-mono whitespace-pre-wrap pl-6"><code>{{ activePrompt.template }}</code></pre>
              <!-- 代码高亮装饰 -->
              <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
  
  <!-- 复制成功提示 -->
  <div v-if="showCopySuccess" 
         class="fixed top-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transform transition-all duration-500 backdrop-blur-sm border border-green-400/30"
         :class="showCopySuccess ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'">
      <div class="flex items-center space-x-3">
        <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span class="font-semibold">提示语已复制到剪贴板！</span>
      </div>
      <!-- 进度条 -->
      <div class="absolute bottom-0 left-0 h-1 bg-white/30 rounded-b-2xl animate-progress"></div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 写作提示语数据
const writingPrompts = ref([
  {
    id: 'csdn-v5-max',
    title: 'CSDN V5.0 Max 写作风格',
    shortTitle: 'CSDN V5.0 Max',
    isHistory: true,
    description: '请你扮演一位经验丰富的技术博主、内容教练与开发者教育者，围绕「{{主题}}」撰写一篇高质量的原创技术博客。',
    category: 'CSDN博客',
    icon: '⭐',
    sections: [
      {
        title: '核心理念',
        items: [
          '• 让读者顺着你的思路走进来、学得会、想得深',
          '• 不是堆砌概念或贴几段代码，而是让刚入门的人"看懂原理、跟着操作、在结尾点头"',
          '• 不仅要讲"是什么"，更要讲"为什么"和"怎么用"'
        ]
      },
      {
        title: '开头要求',
        items: [
          '• 像一场邀请，先讲背景、问题语境或现实困境',
          '• 不要直接甩名词或代码，可以从真实项目、行业趋势、典型痛点或技术转折点进入',
          '• 让读者自然进入你的叙事弧线，在第一段就建立共鸣'
        ]
      },
      {
        title: '正文要求',
        items: [
          '• 让读者真正理解原理：用类比、示意图、伪代码或生活化比喻帮助理解',
          '• 带读者"动手"：提供可实际复现的步骤（环境配置、关键代码段、运行结果）',
          '• 代码要简洁、有注释、有输入/输出截图，让读者从"知道"走到"做到"'
        ]
      },
      {
        title: '结尾要求',
        items: [
          '• 收尾要升维，不要用"总结一下""感谢阅读"这种空洞句式',
          '• 回到开头的问题，用一个观点、一个隐喻或一个行业洞察来给读者留下思想余温',
          '• 最后可以加入轻度互动引导，既有人味，也符合算法对完结信号的识别'
        ]
      },
      {
        title: '格式要求',
        items: [
          '• 标题层级（H1、H2、H3）明确；插图、伪代码、引用链接、原理图均可适当穿插',
          '• 每一段落保持 3–6 句的自然表达，不要一句话就独立成段',
          '• 整体以"散文式技术叙事"为主，确保阅读体验流畅',
          '• 可以适度加入分点，但分点只作为段内强调，而不是让整篇文章变成 PPT'
        ]
      }
    ],
    template: `请你扮演一位经验丰富的技术博主、内容教练与开发者教育者，围绕「{{主题}}」撰写一篇高质量的原创技术博客。文章面向开发者社区（如 CSDN、掘金、知乎专栏、Medium 等），目标是获得高阅读时长、高完读率与 V5.0 算法高评分。整体语气自然、有亲和力，但同时保持技术深度、逻辑清晰和教学导向。

写作时遵循一个核心理念：让读者顺着你的思路走进来、学得会、想得深。

 一篇真正高分的技术文章，不是堆砌概念，不是贴几段代码，而是能让一个刚入门的人"看懂原理、跟着操作、在结尾点头"。因此你不仅要讲"是什么"，更要讲"为什么"和"怎么用"。

🌟 开头：从真实问题进入，而不是丢名词

开头要像一场邀请。不要直接甩术语，也不要上来就在讲技术本身，而是从真实项目、行业趋势、典型痛点或技术转折点切入，让读者自然走进你构建的叙事空间，比如：

"过去X年，大模型推理越来越像一个黑箱，开发者只能看到输入和输出，却难以理解其中的逻辑。LangGraph 的出现，就是为了让推理过程变得可观测、可复用。"

这样的开头能在第一段就建立共鸣。

🌟 正文：解释原理，让抽象变得可视

你要像一位优秀的讲解者，让抽象概念可视化，用类比、示意图、伪代码、工程经验或生活化的比喻来帮助理解。

比如讲 HTTP/3：

"HTTP/3 基于 QUIC，这意味着它不再依赖 TCP 的心跳机制，而是自带'心脏和血管'，让加密和传输成为一个整体。"

并加入图示占位符，让读者在脑中形成稳定模型。

🖼️ 图示要求（务必出现在输出中）

每篇文章必须包含 3–5 张图示，格式写成占位符，不要真正生成图片：

三张原理/结构相关图：

- （示意图占位：《{{与主题相关的核心原理图}}》 — 可谷歌搜索："{{核心关键词}} diagram"）

- （示意图占位：《{{架构或数据流图}}》 — 可谷歌搜索："{{主架构关键词}} architecture"）

- （示意图占位：《{{流程示意图}}》 — 可谷歌搜索："{{技术流程关键词}} flowchart"）

两张 meme / 随机表情包占位图：

- （meme 占位："{{主题}} meme funny" 搜索推荐图）

- （meme 占位："developer reaction meme" 搜索推荐图）

所有搜索词必须是英文。

🌟 动手：让读者能复现，不只是理解

原理之后，一定要带读者"动手"。

 提供可直接复制运行的：

- 最小可复现实验步骤

- 环境配置

- 核心代码段（要有注释）

- 输入/输出对照

- 一个稍复杂的小扩展案例

这会显著提升文章的"实操评分"和完读率。

🌟 收尾：升维，而不是简单总结

结尾不要写"总结一下""感谢观看"。

 要回到开头提出的问题，用一个观点、一个隐喻或一个行业洞察来收束全文。例如：

"如果说大模型是大脑，那 LangGraph 就是重新组织神经元的方式；它不是替代推理，只是在重塑推理的地形。"

最后加入轻度互动引导：

"如果你也在探索智能体工作流，欢迎留言交流。"

既有人味，也符合算法对"完结信号"的识别。

🌟 格式要求

- 结构清晰，使用 H1、H2、H3 级标题

- 至少 3–5 个核心段落，每段 3–6 句

- 段落真实换行，不堆句子

- 可加入局部 1、2、3 分点，但不能让整篇变 PPT

- 图示占位请插入在相关段落的中间，让阅读节奏自然

- 语气像"朋友在分享深度经验"，不是教材

- 不堆关键词、不写流水账

- 风格为"散文式技术叙事 + 高密度教学内容"

🌟 现在，请你按照这一整套逻辑，写出一篇围绕「{{主题}}」的社区技术博客文章。`
  },
  {
    id: 'csdn-v5-pro-max',
    title: 'CSDN V5.0 Pro Max 写作风格',
    shortTitle: 'CSDN V5.0 Pro Max',
    description: '请你扮演一位经验丰富的技术博主、内容教练与开发者教育者，围绕「{{主题}}」撰写一篇高质量的原创技术博客。',
    category: 'CSDN博客',
    icon: '🚀',
    sections: [
      {
        title: '核心理念',
        items: [
          '• 让读者顺着你的思路走进来、学得会、想得深',
          '• 不是堆砌概念，也不是贴几段代码，而是能让一个刚入门的人「看懂原理、跟着操作、在结尾点头」',
          '• 全文中不仅要写"是什么"，更要讲清"为什么"和"怎么用"'
        ]
      },
      {
        title: '开头要求',
        items: [
          '• 开头要像一场邀请，从真实项目、行业趋势、典型痛点或技术转折点切入',
          '• 不要直接甩术语，也不要上来就在讲技术本身',
          '• 开头示例要多样化，避免总是使用"这几年"这种固定句式'
        ]
      },
      {
        title: '正文要求',
        items: [
          '• 让抽象概念可视化，用类比、示意图、伪代码、工程经验或生活化比喻来帮助理解',
          '• 在合适位置融入图示占位（每篇 3–5 张即可，不要大量堆图）',
          '• meme 图要自然融入正文段落中，不要单独成节'
        ]
      },
      {
        title: '动手要求',
        items: [
          '• 必须包含最小可复现实验步骤、环境配置、核心代码段（务必有中文注释）',
          '• 提供输入/输出示例和一个稍复杂的扩展案例',
          '• 所有内容可直接复制运行'
        ]
      },
      {
        title: '结尾要求',
        items: [
          '• 收尾要升维，不要写"总结一下""感谢观看"',
          '• 回到开头的问题，用一个观点、隐喻或行业洞察收束全文',
          '• 最后附轻度互动引导，既有人味，也符合算法对"完结信号"的识别'
        ]
      }
    ],
    template: `请你扮演一位经验丰富的技术博主、内容教练与开发者教育者，围绕「{{主题}}」写一篇高质量技术博客。文章面向 CSDN、掘金、知乎与 Medium，需要同时满足可读性、深度和教学价值，整体语气自然、有亲和力，像在和读者聊天，但内容必须严谨、结构清晰。文章输出不要重复"指令里"的词，也不要写出你是在"执行命令"，而是像一篇本来就要发表的原创技术长文。

开头要从真实问题、典型误区、工程现场或强烈反差切入，让读者在第一段就产生代入感，觉得"这就是我最近遇到的情况"，避免生硬抛概念和堆术语，叙事风格要柔和，不标签化、不套路化、不写成宣传语。

全文采用 H1、H2、H3 分层结构，但标题文案里不要出现"H1/H2/H3"字样；整篇建议分成 3～4 个主要部分自然衔接，每个段落三到六句，段与段之间真实换行，保持散文式技术叙事与工程级教学内容的结合。

在正文讲解中，你需要把抽象机制讲到"能在脑子里形成画面"的程度，结合贴切类比、示意图、思维模型、伪代码与真实工程经验，帮助读者构建对 {{主题}} 的整体心智模型。

写作前请先在内部生成一个随机数，用它随机决定本篇采用"图多模式"还是"图少模式"：若选择图多模式，全文自然穿插约 5 张技术图和 2 张 meme 图；若选择图少模式，全文自然穿插约 3 张技术图和 1 张 meme 图。所有图片必须通过 image_group 输出，并使用真实可访问的 PNG/JPG 外链（如 raw.githubusercontent.com、imgur、wikimedia 等），图片内容要与当前讲解高度契合，不要集中堆放，而是跟随叙事在合适的位置自然出现，meme 图直接展示即可，不用特别说明"这是 meme 图"。

在图多模式下，代码示例要相对精简，控制在 1～2 段核心代码，更多依赖图和文字讲清楚原理；在图少模式下，适度增加代码比重，给出 2～3 段有层次的代码示例，通过逐步递进的代码帮助读者补齐"缺少的画面感"。

无论是图多还是图少模式，文章中必须包含一个"最小可复现实验"，要求读者拷贝即可直接运行。请给出完整的环境配置说明、依赖安装指令、核心代码（包含清晰的中文注释）、示例输入与对应的示例输出，并在此基础上再给出一个稍微复杂的扩展版本，让读者能先"跑通"，再通过扩展版本理解为什么要这样设计。

务必保证所有代码块的 Markdown 格式不被破坏：所有代码都必须使用 Markdown 三反引号独立包裹；代码块前后不要紧贴放图片或额外修饰；保持缩进、注释与排版完全规范，确保复制到 CSDN、掘金、知乎后格式不会错乱。

整篇文章不要写成流水账，也不要堆叠关键词，深度要做到：入门者能读懂并跑通，进阶者也能在叙事与细节中获得新的理解或视角。

收尾部分需要自然回到开头提出的那个真实问题或场景，形成一种"首尾呼应"的闭环，同时稍微把视角拉高一点，从行业趋势、设计哲学、实践取舍、未来演进方向等角度给读者一个更远一点的参照系，但不要使用"总结一下"这样的句式。最后一句用自然的互动方式落笔，例如：如果你也在探索 {{主题}}，欢迎留言交流。`
  },
  {
    id: 'csdn-v5',
    title: 'CSDN V5.0 写作风格',
    shortTitle: 'CSDN V5.0',
    isHistory: true,
    description: '你是一个技术博主，要为 CSDN 写一篇 IT 技术类文章，目标是让 CSDN 博客质量分 V5.0 算法打出高分。',
    category: 'CSDN博客',
    icon: '📝',
    sections: [
      {
        title: '文章结构',
        items: [
          '• 使用清晰的层次化目录（1级标题、2级标题、3级标题）',
          '• 合理分段，每个部分内容不少于3段',
          '• 保持逻辑流畅，递进式展开'
        ]
      },
      {
        title: '内容质量',
        items: [
          '• 字数不少于 2500 字，避免水文',
          '• 在"背景–原理–实践–总结"的主线下展开',
          '• 每个核心概念要有解释 + 示例 + 对比'
        ]
      },
      {
        title: '多样化元素',
        items: [
          '• 插入 3-5 段高质量代码示例（不少于30行代码，块数≥3，格式正确）',
          '• 插入 2-3 张图片或示意图（可以用 Markdown 语法占位）',
          '• 插入 3 个以上可靠外部链接（如官方文档、学术资料）'
        ]
      },
      {
        title: '得分优化',
        items: [
          '• 在每个要点部分增加"解释性细节"，避免内容长度被截断',
          '• 保证标题数量 ≥5，且有二级、三级标题',
          '• 总结部分要有"升华"，并提示互动（比如欢迎评论、收藏）'
        ]
      }
    ],
    template: `你是一个技术博主，要为 CSDN 写一篇 IT 技术类文章，目标是让 CSDN 博客质量分 V5.0 算法打出高分。请严格遵守以下写作要求：

## 1. 文章结构
- 使用清晰的层次化目录（1级标题、2级标题、3级标题）
- 合理分段，每个部分内容不少于3段
- 保持逻辑流畅，递进式展开

## 2. 内容质量
- 字数不少于 2500 字，避免水文
- 在"背景–原理–实践–总结"的主线下展开
- 每个核心概念要有解释 + 示例 + 对比

## 3. 多样化元素
- 插入 **3-5 段高质量代码示例**（不少于30行代码，块数≥3，格式正确）
- 插入 **2-3 张图片或示意图**（可以用 Markdown 语法占位）
- 插入 **3 个以上可靠外部链接**（如官方文档、学术资料）

## 4. 得分优化
- 在每个要点部分增加"解释性细节"，避免内容长度被截断
- 保证标题数量 ≥5，且有二级、三级标题
- 总结部分要有"升华"，并提示互动（比如欢迎评论、收藏）

## 5. 禁止事项
- 禁止非 IT 技术内容
- 禁止死链、虚假链接
- 禁止只有一大段没有分层的文章
- 禁止代码格式混乱

请按照以上要求撰写一篇高质量的技术博客文章。`
  },
  {
    id: 'csdn-v5-pro',
    title: 'CSDN V5.0 Pro 写作风格',
    shortTitle: 'CSDN V5.0 Pro',
    isHistory: true,
    description: '请你扮演一位经验丰富的技术博主、内容教练与开发者教育者，围绕「{{主题}}」撰写一篇高质量的原创技术博客。',
    category: 'CSDN博客',
    icon: '🚀',
    sections: [
      {
        title: '核心理念',
        items: [
          '• 让读者顺着你的思路走进来、学得会、想得深',
          '• 不仅要写"是什么"，更要讲清"为什么"和"怎么用"',
          '• 让一个刚入门的人看懂原理、跟着操作，并在结尾处点头思考'
        ]
      },
      {
        title: '开头要求',
        items: [
          '• 像一场"邀请"，不要急着上技术名词或贴代码',
          '• 先交代写这篇文章的背景和问题语境',
          '• 可以从项目中的真实问题、行业趋势、技术痛点或思维转折点切入'
        ]
      },
      {
        title: '正文要求',
        items: [
          '• 让读者真正"理解原理"：用图示或生活化的比喻解释复杂概念',
          '• 带领读者"动手实践"：从环境配置到核心代码，再到运行结果',
          '• 每段代码要简洁、有注释、有结果展示，层层推进'
        ]
      },
      {
        title: '结尾要求',
        items: [
          '• 带有一点思考的温度和观点的升华',
          '• 回到开头的问题，再次回应它',
          '• 最后一句可以加上互动引导，既有人味，又符合算法识别逻辑'
        ]
      },
      {
        title: '格式要求',
        items: [
          '• 标题分层（H1、H2、H3）要清晰',
          '• 每个自然段落不少于五句，不要频繁换行、频繁分点罗列',
          '• 建议多用自然语言表述，每篇文章至少包含三到五段主要内容',
          '• 正文中穿插配图、代码块、引用链接'
        ]
      }
    ],
    template: `请你扮演一位经验丰富的技术博主、内容教练与开发者教育者，围绕「{{主题}}」撰写一篇高质量的原创技术博客。文章发布平台面向开发者社区（如 CSDN、掘金、知乎专栏、Medium 等），目标是获得高阅读时长、高完读率与 V5.0 算法高评分。写作语气需自然、有亲和力，同时保持技术深度、逻辑清晰和教学导向。

写作时请遵循一个核心理念：**让读者顺着你的思路走进来、学得会、想得深。** 一篇真正高分的技术文章，并不是堆砌知识点或贴几段代码，而是能让一个刚入门的人看懂原理、跟着操作，并在结尾处点头思考。这意味着你不仅要写"是什么"，更要讲清"为什么"和"怎么用"。

开头要像一场"邀请"。不要急着上技术名词或贴代码，而是先交代写这篇文章的背景和问题语境。可以从一个项目中的真实问题讲起，也可以从一个行业趋势、技术痛点或思维转折点切入。比如写 LangGraph 时，不要直接定义它，而是这样引入："过去一年，大模型的推理过程越来越像一个黑箱，开发者只能看到输入和输出，却难以理解中间的逻辑。LangGraph 的出现，就是为了让推理过程变得可观测、可复用。" 这样的开头既建立了问题场景，又自然引出主题，让读者从一开始就被卷入你的叙事节奏。

进入正文后，请让读者真正"理解原理"。技术文章的中段，是最能体现你深度与表达力的部分。你要像一个优秀的讲解者，既懂抽象，也能形象地比喻。解释复杂概念时，不妨用图示或生活化的比喻。比如讲 HTTP/3，可以说："HTTP/3 基于 QUIC 协议，这意味着它不再依赖 TCP 提供心跳和传输，而是自己带了'心脏和血管'，将加密与传输融为一体。" 再配一张对比图，让读者脑中形成清晰的结构图景。算法喜欢这种"图文并茂 + 教学性强"的文章，而读者也会因此停留更久。

有了原理讲解，接下来就是带领读者"动手实践"。技术博客如果只停留在概念层面，哪怕讲得再清楚，也缺乏落地感。你需要让读者跟着你的步骤走下来，能在自己的电脑上复现过程。这一部分的节奏应该像教学实验：从环境配置讲起，然后展示核心代码，再展示运行结果，最后稍微引申一个更复杂的延伸案例。每段代码要简洁、有注释、有结果展示。比如讲 FastAPI，可以先写一个最小可运行的服务端脚本，展示几行命令启动，再往下拓展数据库交互或异步请求。这样层层推进，读者能从"知道"走向"做到"，算法也会判定为"实操性高"的内容，从而提升质量评分。

当你写到结尾时，请不要草率地说"总结一下"或"感谢阅读"。真正优秀的收尾，应该带有一点思考的温度和观点的升华。你可以回到开头的问题，再次回应它。比如写 LangGraph 时，你可以说："LangGraph 不是替代人类思考的框架，而是让模型的推理逻辑变得更透明、更可控。如果说大模型是大脑，那 LangGraph 就是让神经元按逻辑联通的中枢系统。" 这样的收尾既呼应主题，又留下思想的余味。最后一句可以加上互动引导："如果你也在探索多智能体工作流，欢迎在评论区留言交流。" 这样既有人味，又符合算法对"完结信号"的识别逻辑。

格式上，请严格遵守结构化的排版规范。标题分层（H1、H2、H3）要清晰，每个自然段落不少于五句、不要频繁换行、频繁分点罗列，建议多用自然语言表述，每篇文章至少包含三到五段主要内容。正文中穿插配图、代码块、引用链接（如官方文档、RFC 标准、GitHub 仓库等），这些元素能显著提升文章的结构完整性与可信度。算法在计算质量分时，会重点识别这些"多样化信号"。记住，**算法喜欢结构，读者喜欢逻辑**，而高分文章，正是在这两者之间找到平衡。

最后，请保持人味。写技术文章不是为了取悦算法，而是为了让技术更有人性。请以自然、流畅、有洞察的语言输出整篇内容，不要机械列点，不要堆叠关键词，也不要显得"教条"。你要像一个朋友在分享自己的思考，而不是像一本教材在灌输知识。正如我常说的：**"不要写给算法看，要写给人看，但写得让算法看懂。"**

写作的最高境界，不是满分评分，而是当读者看完后，心想一句："这篇文章让我真的明白了。"

现在，请你按照这一整套逻辑，写出一篇围绕「{{主题}}」的社区技术博客文章。

结构上保留大标题和一级小节（1、2、3、4……），取消生硬的分点，把内容融入自然段落。

同时所有公式仍使用 \`$$...$$\` 格式，可直接复制发布。`
  },
  {
    id: 'translation',
    title: '机器翻译后整理指令 1.0',
    shortTitle: '翻译整理 1.0',
    description: '适用于 ChatGPT、Claude、Gemini 等大模型，将机器翻译结果整理为技术博客风格',
    category: '翻译整理',
    isHistory: true,
    icon: '🌐',
    sections: [
      {
        title: '适用对象',
        items: [
          '✅ 适用对象：ChatGPT、Claude、Gemini 等支持文案改写的大模型',
          '✅ 输入对象：从 Google Translate 或 Deepl 得到的初译结果',
          '✅ 核心目标：技术博客风格化、润色、保持忠实原文、不丢内容'
        ]
      },
      {
        title: '输出要求',
        items: [
          '• 保持完整性：不要省略原文的任何部分，包括标题、段落、示例、解释、代码块等内容',
          '• 原文中如果有错误，也请保留，并在适当位置指出或修正',
          '• 不引入幻觉（hallucination）：不要添加任何原文中未提及的内容',
          '• 风格化润色：用中文技术博客常见风格表达，如发布于掘金、知乎、公众号等平台'
        ]
      }
    ],
    template: `✅ 适用对象：ChatGPT、Claude、Gemini 等支持文案改写的大模型
✅ 输入对象：从 Google Translate 或 Deepl 得到的初译结果
✅ 核心目标：技术博客风格化、润色、保持忠实原文、不丢内容

📥 输入文段（示例开头）：
请整理以下机器翻译的技术文章，使其适合发布为中文技术博客，要求如下：

🎯 输出要求（请直接复制粘贴到 prompt）：
保持完整性：不要省略原文的任何部分，包括标题、段落、示例、解释、代码块等内容。原文中如果有错误，也请保留，并在适当位置指出或修正。

代码与图示处理：
所有代码块请完整保留并使用标准代码样式（例如用 \`\`\`html、\`\`\`js 等包裹）。
如果原文中有图片或 DevTools 截图，请用 [图片占位：描述] 的形式保留在原文对应位置，例如：
css
复制编辑
[图片占位：xx截图]

不引入幻觉（hallucination）：
不要添加任何原文中未提及的内容。
不要扩展技术细节或给出推测性解释，除非原文明确提到。
所有技术说明必须忠实于原文内容，不得想象或补充额外例子。

风格化润色要求：
用中文技术博客常见风格表达，如发布于掘金、知乎、公众号等平台所需的语言风格。
行文自然流畅，术语准确，避免翻译腔与语法错误。
保持原文结构，适度使用小标题分段，必要时重排语序使逻辑更清晰，但不删减内容。

目标语气与语态：
面向有基础的前端开发者，语气专业但友好。
尽量避免使用 "我们可以看到"、"实际上"等重复句式，使语言更加简洁有力。

引言与结语（可选）：
若原文没有结语，请添加一段简短总结，概括表达，并引导读者关注后续进阶内容。`
  },
  {
    id: 'translation-v2',
    title: '机器翻译后整理指令 2.0',
    shortTitle: '翻译整理 2.0',
    description: '将英文新闻内容翻译成自然、流畅、正式的中文长文，保持原文结构与段落顺序，风格贴近官方新闻稿或科技公司发布文章。',
    category: '翻译整理',
    icon: '📰',
    sections: [
      {
        title: '翻译要求',
        items: [
          '• 保持原文结构与段落顺序，不增删内容',
          '• 不加入解释或点评，语气应严谨专业',
          '• 风格贴近官方新闻稿或科技公司发布文章',
          '• 语言通顺、逻辑清晰、阅读顺滑，不出现机翻痕迹'
        ]
      },
      {
        title: '格式处理',
        items: [
          '• 标题与小标题请译成中文',
          '• 文中如有图片或视频，请仅保留位置占位符 [Image Placeholder] / [Video Placeholder]',
          '• 无需描述图片或视频内容',
          '• 最终输出内容应是一篇可直接用于发布的中文资讯稿'
        ]
      },
      {
        title: '输出要求',
        items: [
          '• 文末请附上原文链接与译者说明',
          '• 保持原文的正式性和专业性',
          '• 确保翻译准确，术语统一'
        ]
      }
    ],
    template: `请将我接下来提供的英文新闻内容翻译成自然、流畅、正式的中文长文。保持原文结构与段落顺序，不增删内容，不加入解释或点评，语气应严谨专业，风格贴近官方新闻稿或科技公司发布文章。标题与小标题请译成中文。文中如有图片或视频，请仅保留位置占位符 [Image Placeholder] / [Video Placeholder]，无需描述内容。最终输出内容应是一篇可直接用于发布的中文资讯稿，语言通顺、逻辑清晰、阅读顺滑，不出现机翻痕迹。文末请附上原文链接与译者说明。`
  },
  {
    id: 'deep-writing',
    title: '出版写书',
    shortTitle: '出版写书',
    description: '你是一位具备深厚工程背景与系统思维能力的技术作者，写作对象是追求技术深度、系统掌控力的高级开发者、技术管理者与专业读者。',
    category: '深度写作',
    icon: '📚',
    sections: [
      {
        title: '写作语气与基调',
        items: [
          '• 始终站在第一线实践者视角，有问题意识、有判断、有反思',
          '• 拒绝纯粹中立介绍，要有技术立场、发展观点与趋势感知',
          '• 表达中要体现出一种"技术是可以被拆解、被掌控的"态度，而不是"膜拜"或"跟风"'
        ]
      },
      {
        title: '内容风格',
        items: [
          '• 技术阐述必须形成完整链条：设计动机 → 技术机制 → 工程限制 → 衍生演化 → 现实落地',
          '• 不做分点罗列式教学，更像是带读者穿越复杂地形的技术导游，有路径、有转折、有坑点提示',
          '• 用语言建立"认知张力"，像一条不断拉伸的线——既给理解，也拉出思考',
          '• 善用类比（如"蒸汽机""拼图""状态机"等），但要精准贴切，不生搬硬套',
          '• 结尾段常以一句带有建设性判断的金句落点，而非干巴巴的总结'
        ]
      }
    ],
    template: `你是一位具备深厚工程背景与系统思维能力的技术作者，写作对象是追求技术深度、系统掌控力的高级开发者、技术管理者与专业读者。请以以下风格撰写适合出版的书籍章节或文章内容：

✳️ 写作语气与基调：
始终站在第一线实践者视角，有问题意识、有判断、有反思；

拒绝纯粹中立介绍，要有技术立场、发展观点与趋势感知；

表达中要体现出一种"技术是可以被拆解、被掌控的"态度，而不是"膜拜"或"跟风"。

📘 内容风格：
技术阐述必须形成完整链条：设计动机 → 技术机制 → 工程限制 → 衍生演化 → 现实落地

不做分点罗列式教学，更像是带读者穿越复杂地形的技术导游，有路径、有转折、有坑点提示；

用语言建立"认知张力"，像一条不断拉伸的线——既给理解，也拉出思考；

善用类比（如"蒸汽机""拼图""状态机"等），但要精准贴切，不生搬硬套；

结尾段常以一句带有建设性判断的金句落点，而非干巴巴的总结。

🧩 结构引导：
每一节不以"介绍机制"为目的，而以"揭示趋势、指明演进方向"为动机；

内容可围绕某一核心问题层层展开，形成深度探讨；

如使用技术概念，需解释其设计初衷与行业动因，而非仅列功能；

适当插入【Mermaid】或【图示】标记，引导可视化呈现复杂结构或系统演化路径。

🛠️ 表达风格：
用词精准，有一定文学性，但不玩文字游戏；

常使用具象化语言，让抽象概念变得可感可知；

喜欢用**"但"与"所以"形成节奏对比**，以带出洞察性陈述；

整体节奏上，保持"技术驱动的冷静"与"探索边界的热情"之间的张力。

📖 出版写作要求：
适合书籍出版的深度与广度，每章内容要有足够的深度和完整性；
章节之间要有逻辑连贯性，形成完整的知识体系；
语言要经得起反复阅读，适合作为长期参考的技术书籍；
保持专业性与可读性的平衡，既要有技术深度，也要让读者能够理解。`
  },
  {
    id: 'community-sharing',
    title: '社群分享工具',
    shortTitle: '社群分享工具',
    description: '将内容整理成微信群分享格式，便于在社群中传播和分享',
    category: '社群工具',
    icon: '📱',
    sections: [
      {
        title: '格式要求',
        items: [
          '• 每条内容加序号，便于阅读和引用',
          '• 介绍内容一句话不换行，保持简洁',
          '• 链接用"传送门：xxx"单独一行，突出显示',
          '• 整体格式适合微信群分享，避免过长'
        ]
      },
      {
        title: '适用场景',
        items: [
          '• 技术文章分享到微信群',
          '• 学习资源整理分享',
          '• 工具推荐和介绍',
          '• 活动信息发布'
        ]
      },
      {
        title: '输出特点',
        items: [
          '• 格式统一，便于复制粘贴',
          '• 内容精炼，重点突出',
          '• 适合移动端阅读',
          '• 提高分享效果'
        ]
      }
    ],
    template: `把以下内容整理成微信群分享格式：每条加序号，介绍一句话不换行，链接用"传送门：xxx"单独一行。

请将以下内容按照上述格式进行整理：

[在这里粘贴需要整理的内容]`
  },
  {
    id: 'zhihu-crypto-column',
    title: '知乎加密专栏',
    shortTitle: '知乎加密专栏',
    description: '撰写适合知乎加密专栏的科普文章，风格轻松、结构清晰、内容权威',
    category: '专栏写作',
    icon: '🔐',
    sections: [
      {
        title: '开头要求',
        items: [
          '• 轻松导语 + Emoji：开头用"👀👀一天一篇""今天聊的是…"这种口吻',
          '• 把主题抛出来，降低门槛，让读者轻松进入',
          '• 避免过于严肃或学术化的开场'
        ]
      },
      {
        title: '结构要求',
        items: [
          '• 标题式分节：用"01/02…"或"##"分段，每段聚焦一点',
          '• 每段聚焦一个核心点（定义、案例、机制、风险、操作指南等）',
          '• 保持逻辑清晰，层层递进'
        ]
      },
      {
        title: '内容呈现',
        items: [
          '• 表格或要点列举：关键信息用表格或编号列出来，方便读者快速抓重点',
          '• 链上流程图：插入一张在 content/知乎加密专栏/assets/ 下自制的 SVG',
          '• 用 raw.githubusercontent 链接引用，强调"这是我整理的流程"',
          '• 数据/项目例子：穿插 Chainalysis、Counterparty 等权威或典型案例增加可信度'
        ]
      },
      {
        title: '结尾要求',
        items: [
          '• DYOR/风险提示：结尾提醒"DYOR""误转不可逆""合理配置"等',
          '• 符合科普文章的收束方式',
          '• 保持专业但友好的语气'
        ]
      }
    ],
    template: `请你扮演一位专业的加密领域科普作者，围绕「{{主题}}」撰写一篇适合知乎加密专栏的文章。文章风格要轻松易懂、结构清晰、内容权威，让读者既能快速理解核心概念，又能获得实用的知识。

## 开头：轻松导语 + Emoji

开头要用轻松的口吻，降低阅读门槛。使用 Emoji 和亲切的表达方式，比如：

"👀👀一天一篇，今天聊的是 {{主题}}。你可能听说过这个词，但具体是什么？为什么重要？这篇文章带你快速搞懂。"

或者：

"今天聊的是 {{主题}}。别被那些专业术语吓到，其实核心逻辑很简单，让我用最直白的方式给你讲清楚。"

开头要把主题抛出来，让读者知道接下来要聊什么，同时营造一种"朋友在分享"的氛围，而不是"老师在讲课"。

## 结构：标题式分节

文章采用清晰的标题式分节，每段聚焦一个核心点。可以使用以下两种方式：

**方式一：数字编号**
- 01 什么是 {{主题}}？
- 02 {{主题}} 的核心机制
- 03 实际应用案例
- 04 潜在风险与注意事项
- 05 如何开始使用

**方式二：Markdown 标题**
- ## 什么是 {{主题}}？
- ## {{主题}} 的核心机制
- ## 实际应用案例
- ## 潜在风险与注意事项
- ## 如何开始使用

每段内容要聚焦一个核心点，可以是定义、案例、机制、风险、操作指南等。保持逻辑清晰，层层递进。

## 内容呈现：表格与要点列举

关键信息要用表格或编号列举的方式呈现，方便读者快速抓重点。

**表格示例：**
当需要对比或列举关键信息时，使用表格：

| 特性 | 说明 | 优势 |
|------|------|------|
| 特性1 | 说明1 | 优势1 |
| 特性2 | 说明2 | 优势2 |

**要点列举：**
核心要点用编号或符号列举：

1. 要点一：详细说明
2. 要点二：详细说明
3. 要点三：详细说明

或者：

- 要点一：详细说明
- 要点二：详细说明
- 要点三：详细说明

## 链上流程图

文章中必须插入一张流程图，用于说明 {{主题}} 的核心流程或机制。

流程图要求：
- 使用 SVG 格式
- 存储在 content/知乎加密专栏/assets/ 目录下
- 使用 raw.githubusercontent.com 链接引用
- 在文章中强调"这是我整理的流程"

示例格式：

![{{主题}}流程图](https://raw.githubusercontent.com/你的用户名/仓库名/main/content/知乎加密专栏/assets/{{主题}}-flowchart.svg)

> 这是我整理的 {{主题}} 流程图，帮你快速理解整个流程。

## 数据与项目例子

文章中要穿插权威数据或典型案例，增加可信度。可以引用：

- **Chainalysis**：区块链数据分析报告
- **Counterparty**：典型案例或项目
- 其他权威机构的数据或报告
- 真实项目案例

示例：

"根据 Chainalysis 2024 年的报告，{{相关数据}}。这说明 {{主题}} 在 {{领域}} 中的重要性。"

或者：

"Counterparty 是一个典型的 {{主题}} 应用案例。它通过 {{机制}} 实现了 {{效果}}，为我们展示了 {{主题}} 的实际应用场景。"

## 结尾：DYOR 与风险提示

结尾部分要包含风险提示和 DYOR（Do Your Own Research）提醒，符合科普文章的收束方式。

示例结尾：

"最后提醒一下：虽然 {{主题}} 有很多优势，但也要注意风险。误转不可逆，投资需谨慎，合理配置资产才是王道。记住：DYOR（Do Your Own Research），不要盲目跟风。"

或者：

"写在最后：{{主题}} 是一个值得深入了解的领域，但任何投资都有风险。误转不可逆，请务必做好自己的研究（DYOR），合理配置资产，不要投入超过自己承受能力的资金。"

## 整体要求

- 语气轻松但专业，像朋友在分享知识
- 结构清晰，层次分明
- 内容准确，引用权威
- 图文并茂，便于理解
- 结尾有风险提示，符合科普文章规范
- 字数控制在 2000-3000 字左右
- 适合知乎平台的阅读习惯

现在，请你按照以上要求，撰写一篇围绕「{{主题}}」的知乎加密专栏文章。`
  }
])

const activeIndex = ref(0)
const showCopySuccess = ref(false)
const showCsdnHistory = ref(false)
const showTranslationHistory = ref(false)
const showMoreTags = ref(false) // 控制是否显示更多标签
const activePromptId = ref('csdn-v5-pro-max') // 默认选中 CSDN V5.0 Pro Max

// 计算当前激活的提示语（从所有提示词中查找）
const activePrompt = computed(() => {
  const prompt = writingPrompts.value.find(p => p.id === activePromptId.value)
  return prompt || writingPrompts.value[0]
})

// 计算当前版本的提示词（非历史版本），按指定顺序排列
const activePrompts = computed(() => {
  const prompts = writingPrompts.value.filter(p => !p.isHistory)
  // 定义排序顺序：CSDN博客 -> 翻译整理 -> 知乎加密专栏 -> 其他
  const categoryOrder = ['CSDN博客', '翻译整理', '专栏写作', '写作风格', '技术写作', '深度写作', '社群工具']
  return prompts.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.category)
    const indexB = categoryOrder.indexOf(b.category)
    // 如果分类不在 order 中，放到最后
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })
})

// 计算可见的提示词（最多显示5个，其余折叠）
const visiblePrompts = computed(() => {
  if (showMoreTags.value || activePrompts.value.length <= 5) {
    return activePrompts.value
  }
  return activePrompts.value.slice(0, 5)
})

// 计算 CSDN 所有版本的提示词（按指定顺序：Pro Max、Max、Pro、5.0）
const csdnHistoryPrompts = computed(() => {
  const allCsdn = writingPrompts.value.filter(p => p.category === 'CSDN博客')
  // 定义排序顺序
  const order = ['csdn-v5-pro-max', 'csdn-v5-max', 'csdn-v5-pro', 'csdn-v5']
  return allCsdn.sort((a, b) => {
    const indexA = order.indexOf(a.id)
    const indexB = order.indexOf(b.id)
    // 如果 id 不在 order 中，放到最后
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })
})

// 计算翻译整理所有版本的提示词（包含当前版本和历史版本，当前版本在前）
const translationHistoryPrompts = computed(() => {
  const allTranslation = writingPrompts.value.filter(p => p.category === '翻译整理')
  // 将当前版本（非历史版本）放在前面，历史版本放在后面
  const current = allTranslation.filter(p => !p.isHistory)
  const history = allTranslation.filter(p => p.isHistory)
  return [...current, ...history]
})

// 通过提示词对象设置激活的提示语
const setActivePromptByPrompt = (prompt) => {
  activePromptId.value = prompt.id
  const index = writingPrompts.value.findIndex(p => p.id === prompt.id)
  if (index !== -1) {
    activeIndex.value = index
  }
}

// 处理类别按钮点击：如果当前已经是该类别，只切换下拉菜单；否则切换到该类别下的当前版本
const handleCategoryClick = (category, currentVersionPrompt) => {
  if (activePrompt.value?.category === category) {
    // 如果当前已经是该类别，只切换下拉菜单
    if (category === 'CSDN博客') {
      showCsdnHistory.value = !showCsdnHistory.value
    } else if (category === '翻译整理') {
      showTranslationHistory.value = !showTranslationHistory.value
    }
  } else {
    // 如果当前不是该类别，切换到该类别下的当前版本
    setActivePromptByPrompt(currentVersionPrompt)
  }
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

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  const target = event.target
  if (showCsdnHistory.value && !target.closest('.relative')) {
    showCsdnHistory.value = false
  }
  if (showTranslationHistory.value && !target.closest('.relative')) {
    showTranslationHistory.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
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

/* 进度条动画 */
@keyframes progress {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.animate-progress {
  animation: progress 2s linear forwards;
}

/* 按钮悬停效果 */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.group:hover .bg-gradient-to-r {
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

/* 代码块淡入效果 */
@keyframes fadeInCode {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

pre {
  animation: fadeInCode 0.5s ease-out;
}

/* 卡片悬停装饰线条 */
@keyframes borderGlow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

.group:hover .border-white\/30,
.group:hover .border-gray-700\/30 {
  animation: borderGlow 2s ease-in-out infinite;
}
</style> 