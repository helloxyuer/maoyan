import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import RouterMap from './js/router'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(RouterMap);
const store = new Vuex.Store({
  state:{
    list:[
      {
        name:'AA',
        age:23,
      },
       {
        name:'BB',
        age:32,
      },
       {
        name:'钱傻',
        age:14,
      },
       {
        name:'王老',
        age:54,
      },
       {
        name:'冬菜',
        age:33,
      },
       {
        name:'梦圆',
        age:23,
      }
    ],
    count:0
  },
  getters:{
    onlyNum:function (state) {
      
    }
  },
  mutations:{

  },
  actions:{

  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
