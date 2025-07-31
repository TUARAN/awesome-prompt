<template>
  <div class="min-h-screen py-12">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="gradient-text">关于我们</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          我们致力于帮助每个人掌握 AI 提示词的艺术，让 AI 成为你的得力助手。
        </p>
      </div>

      <!-- Mission Section -->
      <section class="mb-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">我们的使命</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card p-8">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-semibold mb-4">普及 AI 技能</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                让每个人都能轻松掌握 AI 提示词技能，在 AI 时代保持竞争力。
              </p>
            </div>
            <div class="card p-8">
              <div class="text-4xl mb-4">🧠</div>
              <h3 class="text-xl font-semibold mb-4">第一性原则</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                从底层逻辑理解 AI 工作原理，掌握与机器对话的核心原理。
              </p>
            </div>
            <div class="card p-8">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-xl font-semibold mb-4">提升效率</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                通过正确的提示词技巧，让 AI 成为工作和学习的得力助手。
              </p>
            </div>
            <div class="card p-8">
              <div class="text-4xl mb-4">🌟</div>
              <h3 class="text-xl font-semibold mb-4">激发创意</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                激发 AI 的创造力，获得意想不到的灵感和解决方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="mb-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">我们的价值观</h2>
          <div class="space-y-8">
            <div class="card p-8">
              <h3 class="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                简单易懂
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                我们相信最好的学习方式是简单直接的。每个教程都经过精心设计，确保即使是初学者也能轻松理解。
              </p>
            </div>
            <div class="card p-8">
              <h3 class="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                实用导向
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                所有内容都基于实际应用场景，提供可直接使用的模板和技巧，让你立即看到效果。
              </p>
            </div>
            <div class="card p-8">
              <h3 class="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                持续更新
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                AI 技术发展迅速，我们持续更新内容，确保你掌握最新的提示词技巧和最佳实践。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="mb-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">我们的团队</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card p-8 text-center">
              <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-2xl font-bold">A</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">AI 专家</h3>
              <p class="text-gray-600 dark:text-gray-400">
                拥有多年 AI 研究和应用经验，专注于提示词工程和 AI 交互设计。
              </p>
            </div>
            <div class="card p-8 text-center">
              <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-2xl font-bold">E</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">教育专家</h3>
              <p class="text-gray-600 dark:text-gray-400">
                专注于在线教育和技能培训，致力于让复杂的技术变得简单易懂。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">联系我们</h2>
          <div class="card p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-semibold mb-4">联系方式</h3>
                <div class="space-y-3">
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:hello@awesomeprompt.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      hello@awesomeprompt.com
                    </a>
                  </div>
                  <div class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                    <a href="https://github.com/awesomeprompt" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-4">反馈建议</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  我们非常重视你的反馈和建议。如果你有任何想法或遇到问题，请随时联系我们。
                </p>
                <button class="btn-primary">
                  发送反馈
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template> 