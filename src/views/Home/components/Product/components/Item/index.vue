<template>
  <div class="item-container" @click="changeIndex(index)">
    <div class="icon-box">
      <img :src="icon" class="icon" :alt="title" />
      <img :src="iconHover" class="icon-hover" :alt="title" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconHover: {
      type: String,
    },
    index:{
      type:Number
    }
  },
  methods:{
    changeIndex(index){
      this.$emit("changeIndex", index);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>