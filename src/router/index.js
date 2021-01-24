import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home'
import Favourite from '@/views/Favourite'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favourites',
    name: 'Favourite',
    component: Favourite
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
