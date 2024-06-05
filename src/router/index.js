import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login'),
    }, {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/register'),
    }, {
        path: '',
        name: 'Layout',
        component: Layout,
        redirect: 'home',
        children: [{
            path: 'home',
            name: 'Home',
            meta: { title: ['首页'], icon: ['home'] },
            component: () => import('@/views/home/index.vue')
        }, {
            path: 'user',
            name: 'User',
            meta: { title: ['个人中心'], icon: ['user'] },
            component: () => import('@/views/user/index.vue')
        }]
    }]
});

export default router;
