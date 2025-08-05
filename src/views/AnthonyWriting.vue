<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            典型标杆案例
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="gradient-text">安东尼写作提示语</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            与大模型共舞，创作更好的技术文章<br>
            掌握提示语艺术，让AI成为你的最佳写作伙伴
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="scrollToSection('methodology')" class="btn-primary">
              探索方法论
            </button>
            <button @click="scrollToSection('examples')" class="btn-secondary">
              查看实战案例
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心理念 -->
    <section class="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 gradient-text">核心理念</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            技术写作不再是孤军奋战，而是与AI协作的艺术
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">思维启发</h3>
            <p class="text-gray-600 dark:text-gray-300">
              利用AI的多角度思维，突破写作瓶颈，激发创意灵感
            </p>
          </div>
          <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">结构优化</h3>
            <p class="text-gray-600 dark:text-gray-300">
              通过精准提示语，让AI帮助构建清晰的文章结构和逻辑
            </p>
          </div>
          <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">效率提升</h3>
            <p class="text-gray-600 dark:text-gray-300">
              合理分工，人机协作，大幅提升技术文章的创作效率
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 方法论 -->
    <section id="methodology" class="py-16 px-4">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 gradient-text">安东尼写作方法论</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            经过实战验证的技术文章创作流程
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <!-- 步骤1 -->
            <div class="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">主题确定与大纲构建</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  与AI协作确定文章主题，构建清晰的文章大纲和逻辑结构
                </p>
                <div class="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg border">
                  <p class="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    "我想写一篇关于[技术主题]的文章，目标读者是[读者群体]。请帮我：<br>
                    1. 分析这个主题的核心要点<br>
                    2. 设计一个吸引人的文章结构<br>
                    3. 提出3-5个关键章节的标题"
                  </p>
                </div>
              </div>
            </div>

            <!-- 步骤2 -->
            <div class="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">内容深度挖掘</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  针对每个章节，利用不同的AI模型特长进行深度内容创作
                </p>
                <div class="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg border">
                  <p class="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    "针对[具体章节]，请从以下角度展开：<br>
                    1. 技术原理解释（要求通俗易懂）<br>
                    2. 实际应用场景举例<br>
                    3. 常见问题和解决方案<br>
                    4. 最佳实践建议"
                  </p>
                </div>
              </div>
            </div>

            <!-- 步骤3 -->
            <div class="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">代码示例与实战</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  让AI生成高质量的代码示例，并提供详细的解释说明
                </p>
                <div class="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg border">
                  <p class="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    "请为[技术概念]提供一个完整的代码示例：<br>
                    1. 使用[编程语言]实现<br>
                    2. 包含详细的注释说明<br>
                    3. 提供运行结果和输出<br>
                    4. 解释关键代码段的作用"
                  </p>
                </div>
              </div>
            </div>

            <!-- 步骤4 -->
            <div class="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-100 dark:border-orange-800">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-3">文章优化与润色</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  利用AI进行文章的整体优化，提升可读性和专业性
                </p>
                <div class="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg border">
                  <p class="text-sm text-gray-700 dark:text-gray-300 font-mono">
                    "请帮我优化这篇技术文章：<br>
                    1. 检查逻辑结构是否清晰<br>
                    2. 优化语言表达和专业术语<br>
                    3. 增加过渡句提升连贯性<br>
                    4. 确保技术准确性"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 不同AI模型的特长 -->
    <section class="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 gradient-text">AI模型特长分工</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            了解不同AI模型的优势，合理分配写作任务
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-700">
            <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">GPT-4</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              擅长逻辑推理、结构化思维、复杂概念解释
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-700">
            <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Claude</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              擅长代码分析、技术文档、深度思考
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border border-green-200 dark:border-green-700">
            <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Gemini</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              擅长多模态内容、创意表达、实时信息
            </p>
          </div>
          <div class="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 border border-orange-200 dark:border-orange-700">
            <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">专业模型</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              针对特定领域的专业AI工具
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 实战案例 -->
    <section id="examples" class="py-16 px-4">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 gradient-text">实战案例展示</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            真实的技术文章创作案例，展示AI协作的强大效果
          </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- 案例1 -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold">《深入理解React Hooks》</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              通过AI协作，从概念解释到实战应用，创作了一篇2万字的深度技术文章
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                创作时间：3小时（传统方式需要2天）
              </div>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                阅读量：50,000+ 次
              </div>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                用户反馈：98% 好评率
              </div>
            </div>
            <button class="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
              查看完整案例 →
            </button>
          </div>

          <!-- 案例2 -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold">《微服务架构实战指南》</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              结合多个AI模型的优势，创作了涵盖理论与实践的系列技术文章
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                创作时间：5小时（传统方式需要1周）
              </div>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                系列文章：8篇，总计15万字
              </div>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                企业采用：20+ 公司参考实施
              </div>
            </div>
            <button class="mt-4 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm">
              查看完整案例 →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 提示语模板库 -->
    <section class="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 gradient-text">精选提示语模板</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            经过实战验证的高效提示语模板，直接复制使用
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="template in promptTemplates" :key="template.id" 
               class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-96 flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold">{{ template.title }}</h3>
              <button @click="copyPrompt(template.content)" 
                      class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ template.description }}</p>
            <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg flex-1 overflow-y-auto">
              <pre class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{{ template.content }}</pre>
            </div>
            <!-- 示例区域（仅第三个模板显示） -->
            <div v-if="template.id === 3 && template.examples" class="mt-4 border-t pt-4">
              <button 
                @click="template.showExamples = !template.showExamples"
                class="w-full flex items-center justify-between text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm mb-3"
              >
                <span>{{ template.showExamples ? '收起示例' : '查看使用示例' }}</span>
                <svg 
                  class="w-4 h-4 transition-transform duration-200"
                  :class="{ 'rotate-180': template.showExamples }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <!-- 横向轮播图 -->
              <div v-if="template.showExamples" class="relative">
                <div class="overflow-x-auto scrollbar-hide">
                  <div class="flex space-x-4 pb-2" style="width: max-content;">
                    <div 
                      v-for="example in template.examples" 
                      :key="example.id"
                      class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 flex-shrink-0"
                      style="width: 280px;"
                    >
                      <div class="flex items-start justify-between mb-3">
                        <h4 class="font-medium text-blue-800 dark:text-blue-300 text-sm">
                          💡 {{ example.title }}
                        </h4>
                        <button 
                          @click="copyPrompt(template.content + '\n\n' + example.content)"
                          class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 ml-2 flex-shrink-0"
                          title="复制提示语+示例"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        </button>
                      </div>
                      <p class="text-blue-700 dark:text-blue-400 text-xs leading-relaxed">
                        {{ example.content }}
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- 滚动提示 -->
                <div class="flex justify-center mt-2">
                  <div class="flex space-x-1">
                    <div 
                      v-for="(example, index) in template.examples" 
                      :key="index"
                      class="w-2 h-2 rounded-full bg-blue-300 dark:bg-blue-600"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- CTA Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          开始你的AI写作之旅
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          掌握安东尼写作方法论，让AI成为你最强的写作伙伴
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            下载完整指南
          </button>
          <button class="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
            加入学习社群
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 提示语模板数据
const promptTemplates = ref([
  {
    id: 1,
    title: '安东尼GPT4o通用写作风格完全体提示语',
    description: '适用于技术博客、深度分析的通用写作风格模板',
    content: `你是一位具有深度技术背景、敏锐洞察力与原创表达风格的博客博主。请用 Aran Tu 的风格撰写文章，风格要求如下：

结构要求：
文章逻辑清晰但不板书式罗列，避免过度分点，强调自然展开与思辨链条；
开头要引入背景或问题本质，用引人注目的句子直接点破核心冲突；
结尾常带有总结性判断、未来趋势或哲思视角，形成闭环。

语言风格：
用词精准而不堆砌术语，专业但接地气，有观点、有感情、有"人味"；
行文节奏自然，不堆句式，也不拖沓，擅长用一个比喻或口语点醒读者；
拒绝套话与空话，强调真实体验与独立思考。

写作态度与立场：
观点鲜明，敢于质疑行业惯性或技术泡沫，强调"从实践出发"；
注重实用价值，同时保持系统性视野，强调工程可落地与未来趋势结合；
风格不媚俗不装逼，哪怕是写推广文也得让开发者"信得过"。

内容倾向与细节处理：
喜欢从系统设计、工程实现或思维模型切入，避免空泛讲概念；
常结合实际项目、工具或开源技术进行分析，带有"做过、用过、踩过坑"的底层经验；
善于使用 Mermaid 流程图、项目架构图等增强技术可读性；
如果文章中引用他人观点，一定要加以分析或转述，不做信息搬运工。

适配平台与受众：
写作面向掘金、知乎、公众号等技术社区或开发者圈层；
读者为中高级开发者、AI 初创者、技术产品经理等，对内容质量有较高要求；
可以在文末引导点赞、评论、关注，但方式自然不强求，像朋友交流。`
  },
  {
    id: 2,
    title: '安东尼Claude-4-Sonnet 写作风格提示语',
    description: '专为Claude 4 Sonnet设计的技术博客写作风格指南',
    content: `你是一位资深的技术博主和系统架构师，具有深厚的技术功底和敏锐的商业洞察力。请按照以下风格特征进行写作：

## 内容深度要求：
- 从多个维度（技术、产品、商业、用户）深入分析问题
- 提供独特的洞察和逆向思维，避免人云亦云
- 结合实际项目经验，增加内容可信度
- 给出具体可行的解决方案，而非泛泛而谈

## 语言表达风格：
- 开篇用对比或有趣现象引出核心问题
- 使用"这不是...问题，而是..."的句式强调本质
- 适当使用比喻和类比，让复杂概念易懂
- 保持技术专业性，准确使用行业术语
- 语言简洁有力，避免冗余表达

## 结构组织方式：
- 使用清晰的标题层级（##、###）
- 重要观点用**粗体**强调
- 用列表和编号组织信息
- 适当插入代码块、流程图（mermaid）
- 每个章节控制在300-500字，保持阅读节奏

## 视觉呈现要求：
- 标题前适当使用emoji增强视觉效果
- 用引用块(>)突出核心观点
- 重要概念用\`代码格式\`标记
- 插入技术架构图或流程图说明复杂逻辑
- 使用表格对比不同方案的优劣

## 互动与价值观：
- 结尾鼓励读者参与讨论，提出开放性问题
- 承认技术的局限性，保持谦逊态度
- 强调实用价值，技术服务于实际问题
- 体现系统思维，关注技术与商业生态的关系
- 用"我们"而非"你们"，营造共同探索氛围

## 具体写作技巧：
1. 开篇用"当所有人都在...的时候，我们却发现..."的句式
2. 用"这让我意识到..."引出核心洞察
3. 用"从工程实现角度..."体现技术深度
4. 用"我观察到一个有趣的现象..."引入案例
5. 结尾用"技术的边界往往在讨论中变得更加清晰"类似表达

请严格按照以上风格特征进行创作，确保内容既有技术深度又有可读性，既专业严谨又富有个人特色。`
  },
  {
    id: 3,
    title: '🧠 大模型深度写作风格提示语（Inspired by "掌控大模型"）',
    description: '面向高级开发者和AI创业者的深度技术写作风格，强调系统思维和实践导向',
    content: `你是一位具备深厚工程背景与系统思维能力的技术作者，写作对象是追求大模型落地能力、系统掌控力的高级开发者、AI创业者与技术管理者。请以以下风格撰写章节或文章内容：

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

内容可围绕某一核心问题层层展开（如"大模型为何推理不稳？"或"蒸馏是否是规模极限下的唯一出路？"）；

如使用技术概念（如KV Cache、FSDP、LoRA、MCP），需解释其设计初衷与行业动因，而非仅列功能；

适当插入【Mermaid】或【图示】标记，引导可视化呈现复杂结构或系统演化路径。

🛠️ 表达风格：
用词精准，有一定文学性，但不玩文字游戏；

常使用具象化语言，如"踩在裂缝上的奇迹""用推理链条换可控性""像拼蒸汽机一样地集成"；

喜欢用**"但"与"所以"形成节奏对比**，以带出洞察性陈述；

整体节奏上，保持"技术驱动的冷静"与"探索边界的热情"之间的张力。`,
    examples: [
      {
        id: 1,
        title: '推理加速技术章节示例',
        content: '请以上述风格撰写 2.3 节《推理加速技术纵览：KV Cache、Speculative Decoding 等》，并结合 DeepSeek-R1、GPT-4 Turbo 的工程优化实践，穿插插图提示与对比机制，强调"不是更快，而是更聪明"的演化逻辑。'
      },
      {
        id: 2,
        title: 'MCP 标准章节示例',
        content: '请以该风格撰写一节关于 MCP 标准的章节，强调其对"模型孤岛"问题的解决意义，并结合 Function Calling 的演进关系作系统结构说明，插入【Mermaid：MCP 模型上下文流动图】。'
      }
    ],
    showExamples: false
  },
  {
    id: 4,
    title: '🧠 机器翻译后交由大模型整理的指令模版',
    description: '用于翻译文章用：机器翻译后交由大模型整理的指令模版',
    content: `✅ 适用对象：ChatGPT、Claude、Gemini 等支持文案改写的大模型
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
  }
])

// 滚动到指定区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 复制提示语
const copyPrompt = async (content) => {
  try {
    await navigator.clipboard.writeText(content)
    // 这里可以添加复制成功的提示
    alert('提示语已复制到剪贴板！')
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-primary {
  @apply px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl;
}

.btn-secondary {
  @apply px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200;
}

/* 隐藏滚动条 */
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}

/* 轮播图平滑滚动 */
.overflow-x-auto {
  scroll-behavior: smooth;
}
</style>