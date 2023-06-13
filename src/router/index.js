import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";
import titleController from "../utils/titleController";
import Home from '../views/Home'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.afterEach(async (to) => {
  document.body.scrollTop = 0;
  await store.dispatch("site/getData");
  if (
    store.state.site &&
    store.state.site.data &&
    store.state.site.data.title
  ) {
    titleController.setSiteTitle(store.state.site.data.title);
    if (to.meta.title) {
      titleController.setRouteTitle(to.meta.title);
    }
  }
});

export default router
