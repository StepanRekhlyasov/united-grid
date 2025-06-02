import { useUserStore } from '@/store/user';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/chat'
  },
  {
    path: '/chat',
    component: () => import('@/views/ChatPage.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/widgets/chat/ChatWidget.vue'),
        name: 'chat',
      },
      {
        path: 'auth',
        component: () => import('@/components/widgets/auth/AuthWidget.vue'),
        name: 'auth',
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.name === 'chat' && !userStore.user) {
    next({ name: 'auth' })
  } else {
    next()
  }
})

export default router
