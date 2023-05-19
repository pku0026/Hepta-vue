import { createRouter, createWebHistory } from 'vue-router'
import PublishPage from '../publish/PublishPage.vue'
import HomePage from '../HomePage.vue'
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
  {
    path: '/publish',
    name: 'PublishPage',
    component: PublishPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
