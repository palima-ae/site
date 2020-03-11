import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import WhatWeDo from '../views/WhatWeDo.vue'
import CardList from '../views/CardList'
import Grid from '../views/Grid'
import What from '../views/What'
import SEO from '../views/SEO'
import Expand from '../views/Expand'
import Who from '../views/Who'
import Beginner from '@/views/Beginner'


Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about', name: 'about', component: About},
  {path: '/whatwedo', name: 'whatwedo', component: WhatWeDo},
  {path: '/what', name: 'what', component: What},
  {path: '/seo', name: 'seo', component: SEO},
  {path: '/expand', name: 'expand', component: Expand},
  {path: '/who', name: 'who', component: Who},
  {path: '/analytics-1', name: 'analytics-1', component: Beginner},
  { path: '/grid', name: 'grid', component: Grid },
  { path: '/cards', name: 'cardlist', component: CardList },
  { path: '/cards/:id', name: 'card', component: CardList,
      props: (route) => {
        let id = parseInt(route.params.id);
        return { id };
      } 
    }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
