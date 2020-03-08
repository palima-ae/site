import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import WhatWeDo from '../views/WhatWeDo.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about', name: 'about', component: About},
  {path: '/whatwedo', name: 'whatwedo', component: WhatWeDo}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
