import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'
import Employer from './pages/Employer.vue'
import Vacancy from './pages/Vacancy.vue'
import Resume from './pages/Resume.vue'

// Initialization for ES Users

//createApp(App).mount('#app')
const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/employer', name: 'Employer', component: Employer },
  { path: '/vacancy', name: 'Vacancy', component: Vacancy },
  { path: '/resume', name: 'Resume', component: Resume }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

app.use(router)
app.mount('#app')
