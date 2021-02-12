import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue') // import Home from '../views/Home.vue'
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credencials = () => import('../views/Credentials/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*', // expressão regulçar da prorio vue
    redirect: { name: 'Home' }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
