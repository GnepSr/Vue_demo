import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'),
      redirect: '/welcome',
      children: [{
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/welcome.vue')
      },
      {
        path:'/users',
        name:'users',
        component:()=>import('../views/users.vue')
      }
      ]
    }
  ]
})

// // 挂载路由守卫 防止没有权限也能访问特定地址
// router.beforeEach((to, from, next) => {
//   // 访问路径是login放行
//   if (to.path === '/login') return next()
//   //  获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   // 没有token跳转到登录页
//   if (!tokenStr) return next('/login')
//   // 有token放行
//   next()
// })

export default router