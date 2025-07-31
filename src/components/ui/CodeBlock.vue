<template>
  <div class="relative">
    <div class="flex items-center justify-between bg-gray-800 dark:bg-gray-900 px-4 py-2 rounded-t-lg border-b border-gray-700">
      <span class="text-sm text-gray-300 font-medium">{{ language }}</span>
      <button
        @click="copyToClipboard"
        class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
        :title="copied ? '已复制' : '复制代码'"
      >
        <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <svg v-else class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span class="text-xs">{{ copied ? '已复制' : '复制' }}</span>
      </button>
    </div>
    <pre class="bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-b-lg overflow-x-auto"><code><slot /></code></pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  language: {
    type: String,
    default: 'text'
  }
})

const copied = ref(false)

const copyToClipboard = async () => {
  try {
    const codeElement = document.querySelector('pre code')
    const text = codeElement?.textContent || ''
    
    await navigator.clipboard.writeText(text)
    copied.value = true
    
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<style scoped>
pre {
  font-family: 'Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}
</style> 