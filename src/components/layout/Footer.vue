<template>
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-6 h-6 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xs">A</span>
            </div>
            <span class="text-lg font-semibold gradient-text">Awesome Prompt</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            学习 AI 提示词的艺术，掌握与人工智能对话的第一性原则。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/tutorials" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200">
                教程中心
              </router-link>
            </li>
            <li>
              <router-link to="/examples" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200">
                示例库
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200">
                关于我们
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">联系我们</h3>
          <ul class="space-y-2">
            <li class="text-gray-600 dark:text-gray-400 text-sm">
              <span class="font-medium">邮箱：</span>
              <a href="mailto:hello@awesomeprompt.com" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                hello@awesomeprompt.com
              </a>
            </li>
            <li class="text-gray-600 dark:text-gray-400 text-sm">
              <span class="font-medium">GitHub：</span>
              <a href="https://github.com/awesomeprompt" target="_blank" rel="noopener noreferrer" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                @awesomeprompt
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          © 2024 Awesome Prompt. 保留所有权利。
        </p>
      </div>
    </div>
  </footer>
</template> 