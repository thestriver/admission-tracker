import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { auth } from '../firebase'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: () => import(/* webpackChunkName: "about" */ '../layouts/Admin.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "/admin/dashboard",
        component: () => import(/* webpackChunkName: "" */ '../views/admin/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/admin/admissions",
        component: () => import(/* webpackChunkName: "admissions" */ '../views/admin/AdmissionsList.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/admin/tasks",
        component: () => import(/* webpackChunkName: "tasks" */ '../views/admin/Tasks.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/admin/resources",
        component: () => import(/* webpackChunkName: "resources" */ '../views/admin/Resources.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/admin/services",
        component: () => import(/* webpackChunkName: "services" */ '../views/admin/Services.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/todo',
        name: 'todo-list',
        component: () => import(/* webpackChunkName: "services" */ '../views/ToDo.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/recycle-bin',
        name: 'recycle-bin',
        component: import(/* webpackChunkName: "services" */ '../views/RecycleBin.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/5Questions-before-pursuing-degree-abroad',
    name: '5Questions',
    component: () => import(/* webpackChunkName: "about" */ '../views/5Questions.vue')
  },
  {
    path: '/20-useful-resources-for-admission',
    name: '20Resources',
    component: () => import(/* webpackChunkName: "about" */ '../views/20useful.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
    // next({
    //   path: '/login',
    //   query: { redirect: to.fullPath }
    // })
  } else {
    next()
  }
})

export default router
