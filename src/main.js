import Vue from 'vue'
import './plugins/fontawesome'
import PalimaApp from './PalimaApp.vue'
import router from './router/index'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(PalimaApp)
}).$mount('#app')
