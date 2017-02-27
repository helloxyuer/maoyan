import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import RouterMap from './js/router'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(RouterMap)

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
