<template>
  <div class="min-h-screen py-12">
    <div class="container-custom">
      <!-- Back Button -->
      <div class="mb-8">
        <router-link 
          to="/tutorials" 
          class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>返回教程列表</span>
        </router-link>
      </div>

      <!-- Tutorial Header -->
      <div class="mb-12">
        <div class="flex items-center space-x-4 mb-6">
          <div class="text-4xl">{{ tutorial.icon }}</div>
          <div>
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {{ tutorial.title }}
            </h1>
            <div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                {{ tutorial.category }}
              </span>
              <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {{ tutorial.difficulty }}
              </span>
              <span class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ tutorial.duration }}</span>
              </span>
            </div>
          </div>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ tutorial.description }}
        </p>
      </div>

      <!-- Tutorial Content -->
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Introduction -->
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              介绍
            </h2>
            <div class="card p-6">
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {{ tutorial.content.introduction }}
              </p>
            </div>
          </section>

          <!-- Template -->
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Prompt 模板
            </h2>
            <CodeBlock language="prompt">
              {{ tutorial.content.template }}
            </CodeBlock>
          </section>

          <!-- Explanation -->
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              第一性原则解析
            </h2>
            <div class="space-y-4">
              <div 
                v-for="(explanation, index) in tutorial.content.explanation" 
                :key="index"
                class="card p-6"
              >
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                      {{ index + 1 }}
                    </span>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {{ explanation }}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Examples -->
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              实际示例
            </h2>
            <div class="space-y-8">
              <div 
                v-for="(example, index) in tutorial.content.examples" 
                :key="index"
                class="card p-6"
              >
                <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {{ example.title }}
                </h3>
                
                <div class="space-y-4">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">输入内容：</h4>
                    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <p class="text-gray-600 dark:text-gray-400">{{ example.input }}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">使用的 Prompt：</h4>
                    <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p class="text-blue-800 dark:text-blue-200">{{ example.prompt }}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">AI 输出：</h4>
                    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <p class="text-green-800 dark:text-green-200">{{ example.output }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Tips -->
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              实用技巧
            </h2>
            <div class="card p-6">
              <ul class="space-y-3">
                <li 
                  v-for="(tip, index) in tutorial.content.tips" 
                  :key="index"
                  class="flex items-start space-x-3"
                >
                  <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p class="text-gray-600 dark:text-gray-400">{{ tip }}</p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Quick Navigation -->
          <div class="card p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              快速导航
            </h3>
            <nav class="space-y-2">
              <a 
                v-for="section in sections" 
                :key="section.id"
                :href="`#${section.id}`"
                class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {{ section.title }}
              </a>
            </nav>
          </div>

          <!-- Related Tutorials -->
          <div class="card p-6">
            <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              相关教程
            </h3>
            <div class="space-y-3">
              <router-link
                v-for="related in relatedTutorials"
                :key="related.id"
                :to="`/tutorial/${related.id}`"
                class="block p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">{{ related.icon }}</span>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {{ related.title }}
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400 text-xs">
                      {{ related.difficulty }} · {{ related.duration }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CodeBlock from '../components/ui/CodeBlock.vue'
import { getTutorialById, tutorials } from '../data/tutorials.js'

const route = useRoute()

const tutorial = computed(() => {
  return getTutorialById(route.params.id)
})

const sections = computed(() => [
  { id: 'introduction', title: '介绍' },
  { id: 'template', title: 'Prompt 模板' },
  { id: 'explanation', title: '第一性原则解析' },
  { id: 'examples', title: '实际示例' },
  { id: 'tips', title: '实用技巧' }
])

const relatedTutorials = computed(() => {
  if (!tutorial.value) return []
  
  return tutorials
    .filter(t => t.id !== tutorial.value.id && t.category === tutorial.value.category)
    .slice(0, 3)
})
</script> 