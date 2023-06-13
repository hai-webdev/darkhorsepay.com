<template>
  <header class="header-container max-center">
    <div class="left-layout">
      <router-link class="logo" to="/">
      <img :src="webSite + site.logo">
    </router-link>
    <nav class="nav-list">
      <a v-for="item in nav" :key="item.id" :href="item.ext_link">{{ item.title }}</a>
    </nav>
    </div>
    <div class="right-layout">
      <a href="https://t.me/rich" class="contact">Contact Us</a>
    </div>
  </header>
</template>

<script>
import {mapState} from "vuex";
export default {
  data(){
    return {
      webSite: window.webSite,
    }
  },
  created(){
    this.$store.dispatch("nav/getData");
  },
  computed:{
    ...mapState({
      nav:state => state.nav.data,
      site: state => state.site.data
    })
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>