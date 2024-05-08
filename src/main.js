import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// Initialization for ES Users

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Vacancy from './pages/Vacancy.vue'
import Marks from './pages/Marks.vue'

//createApp(App).mount('#app')
const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/vacancy', name: 'Vacancy', component: Vacancy },
  { path: '/marks', name: 'Marks', component: Marks }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.mount('#app')
