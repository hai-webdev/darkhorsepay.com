<template>
  <footer class="footer-container">
    <div class="box max-center">
      <div class="copyright">{{site.copyright}}</div>
    <ul class="icon-list">
      <li class="icon-item">
        <a :href="label.Telegram" target="_blank">
          <img :src="telIcon" alt="">
        </a>
      </li>
    </ul>
    </div>
  </footer>
</template>

<script>
import telIcon from "@/assets/images/icon/tel.png";
import { mapState } from 'vuex'
export default {
  data(){
    return {
      telIcon
    }
  },
  computed:{
    ...mapState({
      site:state => state.site.data,
      label:state => state.label.data
    })
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>