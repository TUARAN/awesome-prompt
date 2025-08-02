<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">A</span>
          </div>
          <span class="text-xl font-semibold gradient-text">Awesome Prompt</span>
        </router-link>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
          >
            首页
          </router-link>
          <router-link 
            to="/tutorials" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
          >
            教程
          </router-link>
          <router-link 
            to="/examples" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
          >
            示例
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
          >
            关于
          </router-link>
        </nav>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
        >
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
        <nav class="flex flex-col space-y-4">
          <router-link 
            to="/" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
            @click="mobileMenuOpen = false"
          >
            首页
          </router-link>
          <router-link 
            to="/tutorials" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
            @click="mobileMenuOpen = false"
          >
            教程
          </router-link>
          <router-link 
            to="/examples" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
            @click="mobileMenuOpen = false"
          >
            示例
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-400"
            @click="mobileMenuOpen = false"
          >
            关于
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)

const isDark = computed(() => {
  return document.documentElement.classList.contains('dark')
})

const toggleTheme = () => {
  const isDarkMode = document.documentElement.classList.contains('dark')
  if (isDarkMode) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>