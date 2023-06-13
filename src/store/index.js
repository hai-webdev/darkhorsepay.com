import Vue from 'vue'
import Vuex from 'vuex'
import site from "./site";
import label from "./label";
import nav from "./nav";
import slide from "./slide";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    site,
    label,
    nav,
    slide,
  },
  strict:true
})
