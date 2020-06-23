import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Expand from '../views/Expand'
import Who from '../views/Who'
import Certificate from '@/views/Certificate'


Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about', name: 'about', component: About},
  {path: '/what', name: 'what', component: Expand},
  {path: '/who', name: 'who', component: Who},
  {path: '/certificate/:id', name: 'certificate', component: Certificate,
      props: (route) => {
        let id = route.params.id;
        return { id };
      }
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
