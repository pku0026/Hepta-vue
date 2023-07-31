import { createRouter, createWebHistory } from 'vue-router'
import PublishMain from '../publish/PublishMain.vue'
import HomePage from '../HomePage.vue'
import FormPage from '../formpage/FormPage.vue'
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
  },
  {
    path: '/form/:id',
    name: 'FormPage',
    component: FormPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
