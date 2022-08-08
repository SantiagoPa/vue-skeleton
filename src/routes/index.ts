
import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/counter',
        name: 'Counter',
        component: () => import('../views/CounterView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;