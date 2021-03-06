import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import {routes} from './router'
import { store } from './store/store'
import UUID from 'vue-uuid';
 
Vue.use(UUID);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


