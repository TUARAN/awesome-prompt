import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/styles/main.css'

// 导入页面组件
import Home from './views/Home.vue'
import Tutorials from './views/Tutorials.vue'
import Examples from './views/Examples.vue'
import About from './views/About.vue'
import TutorialDetail from './views/TutorialDetail.vue'

// 路由配置
const routes = [
  { path: '/', component: Home },
  { path: '/tutorials', component: Tutorials },
  { path: '/examples', component: Examples },
  { path: '/about', component: About },
  { path: '/tutorial/:id', component: TutorialDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app') 