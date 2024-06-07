import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/Member',
      name: 'about',
      component: () => import('@/views/Member.vue'),
    },
    {
      path: '/Video',
      name: 'Video',
      component: () => import('@/views/Video.vue'),
    },
    {
      path: '/members/:id',
      name: 'MemberInfo',
      component: () => import('@/views/MemberInfo.vue'),
    },
  ],
});

export default router;
