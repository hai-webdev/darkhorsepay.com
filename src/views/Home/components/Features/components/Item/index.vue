<template>
  <li class="item-container">
    <div class="top">
      <img :src="webSite + ico" :alt="title" class="icon" />
      <div class="title">{{ title }}</div>
    </div>
    <div class="bottom">
      {{ desc }}
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      webSite: window.webSite,
    };
  },
  props: {
    ico: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>