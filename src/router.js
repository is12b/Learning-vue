import { createRouter, createWebHashHistory } from 'vue-router';
import { App } from './App.vue';

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('./components/Dashboard.vue'),
      },
    ],
  },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
