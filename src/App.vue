<template>
  <div id="app" class="min-h-screen">
    <Home />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Home from './views/Home.vue'

// 主题切换逻辑
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  initTheme()
})
</script> 