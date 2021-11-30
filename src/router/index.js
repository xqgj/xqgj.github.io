import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../components/index.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: index,
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
    next();
});

export default router;
