import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/AuthView.vue')
    }
  

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        return { top: 0  , 
        behavior: 'smooth'
        
        }
    }
    
})
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' })
    else next()
})

export default router