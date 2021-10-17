import { createRouter, createWebHistory } from 'vue-router'
import index from '../components/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/:sid',
        component: index,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    next();
});

export default router;
