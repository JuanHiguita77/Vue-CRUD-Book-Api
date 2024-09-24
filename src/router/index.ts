import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ListBooksView from '@/views/ListBooksView.vue'
import CreateBookView from '@/views/CreateBookView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'ListBooks' }
  },
  {
      path: '/books',
      name: 'ListBooks',
      component: ListBooksView  
  },
  {
    path: '/books/:id/edit',
    name: 'EditBook',
    component: CreateBookView,
  },
  {
    path: '/books/add',
    name: 'AddBook',
    component: CreateBookView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Cambiado aquí
  routes,
})

export default router
