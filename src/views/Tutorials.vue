<template>
  <div class="min-h-screen py-12">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="gradient-text">Prompt 教程</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          从基础概念到高级技巧，系统性地学习 AI 提示词的艺术。每个教程都包含详细的模板、解释和实际示例。
        </p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Difficulty Filter -->
      <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
        <button
          v-for="difficulty in difficulties"
          :key="difficulty"
          @click="selectedDifficulty = difficulty"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            selectedDifficulty === difficulty
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          ]"
        >
          {{ difficulty }}
        </button>
      </div>

      <!-- Tutorials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TutorialCard
          v-for="tutorial in filteredTutorials"
          :key="tutorial.id"
          :tutorial="tutorial"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredTutorials.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-2xl font-semibold mb-2">没有找到匹配的教程</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          尝试调整筛选条件，或者查看所有教程
        </p>
        <button
          @click="clearFilters"
          class="btn-primary"
        >
          查看所有教程
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TutorialCard from '../components/tutorial/TutorialCard.vue'
import { tutorials } from '../data/tutorials.js'

const selectedCategory = ref('全部')
const selectedDifficulty = ref('全部')

const categories = computed(() => {
  const cats = ['全部', ...new Set(tutorials.map(t => t.category))]
  return cats
})

const difficulties = computed(() => {
  const diffs = ['全部', ...new Set(tutorials.map(t => t.difficulty))]
  return diffs
})

const filteredTutorials = computed(() => {
  return tutorials.filter(tutorial => {
    const categoryMatch = selectedCategory.value === '全部' || tutorial.category === selectedCategory.value
    const difficultyMatch = selectedDifficulty.value === '全部' || tutorial.difficulty === selectedDifficulty.value
    return categoryMatch && difficultyMatch
  })
})

const clearFilters = () => {
  selectedCategory.value = '全部'
  selectedDifficulty.value = '全部'
}
</script> 