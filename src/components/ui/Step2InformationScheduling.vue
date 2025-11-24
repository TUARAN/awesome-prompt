<template>
  <div class="w-full">
    <div class="rounded-3xl bg-white/5 backdrop-blur-xl p-8 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- 标题 -->
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold text-white">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              第二步：信息调度层
            </span>
          </h2>
          <p class="text-white/70 text-base max-w-2xl mx-auto">
            分阶段提供上下文，让模型在不同写作阶段「看到」不同的信息
          </p>
        </div>

        <!-- 核心概念 -->
        <div class="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-6">
          <h3 class="text-xl font-semibold text-white">核心概念</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <span class="text-cyan-400 text-sm font-bold">1</span>
              </div>
              <div class="flex-1">
                <h4 class="text-white font-medium mb-2">阶段化上下文注入</h4>
                <p class="text-white/60 text-sm leading-relaxed">
                  技术写作的不同阶段需要不同的上下文信息。开头阶段需要背景、问题语境；正文阶段需要原理、代码示例；结尾阶段需要升华、互动引导。
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <span class="text-cyan-400 text-sm font-bold">2</span>
              </div>
              <div class="flex-1">
                <h4 class="text-white font-medium mb-2">动态上下文切换</h4>
                <p class="text-white/60 text-sm leading-relaxed">
                  根据写作进度和内容类型，动态调整提供给模型的上下文。避免一次性注入所有信息，而是按需提供，保持上下文的精准和高效。
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <span class="text-cyan-400 text-sm font-bold">3</span>
              </div>
              <div class="flex-1">
                <h4 class="text-white font-medium mb-2">闭环推理能力</h4>
                <p class="text-white/60 text-sm leading-relaxed">
                  通过分阶段提供上下文，让模型具备闭环推理能力。能够基于当前阶段的上下文，生成符合该阶段要求的内容，并自然过渡到下一阶段。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 功能模块（占位） -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 class="text-white font-medium mb-3">阶段检测器</h4>
            <p class="text-white/50 text-sm">识别当前写作阶段，自动切换上下文</p>
          </div>
          <div class="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 class="text-white font-medium mb-3">上下文管理器</h4>
            <p class="text-white/50 text-sm">管理不同阶段的上下文模板和规则</p>
          </div>
          <div class="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 class="text-white font-medium mb-3">内容类型识别</h4>
            <p class="text-white/50 text-sm">识别内容类型，匹配对应的上下文策略</p>
          </div>
          <div class="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 class="text-white font-medium mb-3">上下文注入器</h4>
            <p class="text-white/50 text-sm">在合适的时机注入对应的上下文信息</p>
          </div>
        </div>

        <!-- 开发状态 -->
        <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
          <p class="text-yellow-400 text-sm text-center">
            🚧 功能开发中，敬请期待...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 第二步组件
</script>

