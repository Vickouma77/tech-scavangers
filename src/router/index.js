// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Hero.vue';
import About from '../components/Feature.vue';
import Team from '../components/Team.vue';
import Contact from '../components/Footer.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
