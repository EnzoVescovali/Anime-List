import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TopanimePage from '@/views/TopAnime.vue'
import TopmangaPage from '@/views/TopManga.vue'
import ProfilePage from '@/views/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/top_anime',
      name: 'TopanimePage',
      component: TopanimePage
    },
    {
      path: '/top_manga',
      name: 'top-manga',
      component: TopmangaPage
    },
    {
      path: '/profile',
      name: 'profilePage',
      component: ProfilePage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
