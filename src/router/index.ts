<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router"
=======
import { createRouter, createWebHistory } from 'vue-router'
>>>>>>> 2920fb3a9ab92cb7bb71bfc5dd31bc93e4c2befc

const router = createRouter({
  history: createWebHistory(),
  // 映射关系：path -> components
  routes: [
<<<<<<< HEAD
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue")
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue")
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      meta: {
        hideTabBar: true
      }
    }
=======

>>>>>>> 2920fb3a9ab92cb7bb71bfc5dd31bc93e4c2befc
  ]
})

export default router