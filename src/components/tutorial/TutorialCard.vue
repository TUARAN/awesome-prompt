<template>
  <div class="card p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer" @click="navigateToDetail">
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center space-x-3">
        <div class="text-3xl">{{ tutorial.icon }}</div>
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {{ tutorial.title }}
          </h3>
          <div class="flex items-center space-x-2 mt-1">
            <span class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
              {{ tutorial.category }}
            </span>
            <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
              {{ tutorial.difficulty }}
            </span>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        {{ tutorial.duration }}
      </div>
    </div>
    
    <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
      {{ tutorial.description }}
    </p>
    
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
        <span>详细教程</span>
      </div>
      
      <div class="flex items-center space-x-2 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform duration-200">
        <span class="text-sm font-medium">开始学习</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  tutorial: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToDetail = () => {
  router.push(`/tutorial/${props.tutorial.id}`)
}
</script> 