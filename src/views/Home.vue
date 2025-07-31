<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 lg:py-32">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span class="gradient-text">掌握 AI 提示词</span>
            <br />
            <span class="text-gray-900 dark:text-gray-100">的第一性原则</span>
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            学习如何与人工智能进行有效对话，从底层逻辑理解提示词的本质
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/tutorials" class="btn-primary text-lg px-8 py-3">
              开始学习
            </router-link>
            <router-link to="/examples" class="btn-secondary text-lg px-8 py-3">
              查看示例
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Learn Prompts Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-bold text-center mb-16">
            为什么要学会写 Prompt？
          </h2>
          
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">提升效率</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    掌握正确的提示词技巧，让 AI 成为你的得力助手，大幅提升工作和学习效率。
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">激发创意</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    通过精准的提示词引导，激发 AI 的创造力，获得意想不到的灵感和解决方案。
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">理解本质</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    从第一性原则出发，理解 AI 的工作原理，掌握与机器对话的核心逻辑。
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">未来技能</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    在 AI 时代，掌握提示词技能将成为每个人的核心竞争力，提前布局未来。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            准备好开始你的 Prompt 学习之旅了吗？
          </h2>
          <p class="text-xl text-primary-100 mb-8">
            从基础概念到高级技巧，我们为你准备了完整的教程体系
          </p>
          <router-link to="/tutorials" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
            立即开始
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template> 