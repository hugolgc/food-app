import { createRouter, createWebHistory } from 'vue-router';
import ReceiptIndex from '../views/ReceiptIndex.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ReceiptIndex',
      component: ReceiptIndex
    }
  ]
});