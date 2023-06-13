import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/styles/reset.css"
import "@/styles/common.less"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

store.dispatch("site/getData");
store.dispatch("label/getData");

if(process.env.NODE_ENV === "development"){
  window.webSite = "http://darkhorsepay.mym35.com/"
} else{
  window.webSite = ""
}


// 引入api
import api from "@/api";
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
