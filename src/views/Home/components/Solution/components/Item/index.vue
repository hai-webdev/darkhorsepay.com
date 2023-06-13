<template>
  <li class="item-container" @click="changeIndex(index)">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    index:{
      type:Number
    }
  },
  methods:{
    changeIndex(index){
      this.$emit("changeIndex", index)
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>