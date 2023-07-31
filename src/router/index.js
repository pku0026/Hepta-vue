import { createRouter, createWebHistory } from 'vue-router'
import PublishMain from '../publish/PublishMain.vue'
import HomePage from '../HomePage.vue'
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
  {
    path: '/publish',
    name: 'PublishMain',
    component: PublishMain
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
