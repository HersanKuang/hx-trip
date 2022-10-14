import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  // 映射关系：path -> components
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () =>
        import(/* webpackChunkName: 'home' */ '@/views/home/home.vue')
    },
    {
      path: '/order',
      component: () =>
        import(/* webpackChunkName: 'order' */ '@/views/order/order.vue')
    },
    {
      path: '/favor',
      component: () =>
        import(/* webpackChunkName: 'favor' */ '@/views/favor/favor.vue')
    },
    {
      path: '/message',
      component: () =>
        import(/* webpackChunkName: 'message' */ '@/views/message/message.vue')
    },
    {
      path: '/city',
      component: () =>
        import(/* webpackChunkName: 'city' */ '@/views/city/city.vue'),
      meta: {
        hideTabBar: true
      }
    }
  ]
})

export default router
