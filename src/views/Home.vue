<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- 主背景 -->
    <div class="absolute inset-0 bg-black"></div>
    
    <!-- 动态背景层 -->
    <div class="absolute inset-0">
      <!-- 渐变背景 -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      <!-- 动态粒子效果 -->
      <div class="absolute inset-0">
        <div class="particles-container">
          <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
        </div>
      </div>
      
      <!-- 光晕效果 -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <!-- 网格线 -->
      <div class="absolute inset-0 bg-grid-white/[0.02]"></div>
    </div>

    <!-- 内容层 -->
    <div class="relative z-10">
      <!-- 头部区域 -->
      <header class="pt-16 pb-12">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center space-y-6">
            <!-- 网站标题 -->
            <div>
              <h1 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                <span class="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  AI Writing Lab
                </span>
              </h1>
              <p class="text-sm text-white/60">精选写作提示语实验室</p>
            </div>
            
            <!-- 状态指示器 -->
            <div class="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span class="text-white/70 text-sm font-medium">Live Updates</span>
              <div class="w-1 h-1 bg-white/30 rounded-full"></div>
              <span class="text-white/50 text-xs">v2.0</span>
            </div>
          </div>
        </div>
      </header>

      <!-- 主要内容区域 -->
      <main class="pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <WritingPromptsCarousel />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WritingPromptsCarousel from '@/components/ui/WritingPromptsCarousel.vue'

// 粒子效果
const getParticleStyle = (index) => {
  const size = Math.random() * 3 + 1
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = Math.random() * 20
  const duration = Math.random() * 10 + 10
  
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}
</script>

<style scoped>
/* 粒子动画 */
@keyframes particle-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  50% {
    transform: translateY(-100px) translateX(50px);
  }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4);
  border-radius: 50%;
  opacity: 0;
  animation: particle-float linear infinite;
}

/* 网格背景 */
.bg-grid-white\/\[0\.02\] {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 100px 100px;
}

/* 延迟动画 */
.delay-1000 {
  animation-delay: 1s;
}

/* 毛玻璃效果增强 */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .particles-container {
    display: none;
  }
}
</style>