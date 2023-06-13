<template>
  <div class="get-container">
    <div class="box">
      <Title titleColor="white" descColor="white" v-if="sort.name" :title="sort.name" :desc="sort.def1" />
      <a :href="sort.link" class="btn">{{ sort.def2 }}</a>
    </div>
    <img v-if="sort.pic" :src="webSite + sort.pic" class="bg" />
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
  components: {
    Title,
  },
  props: {
    sort: {
      type: Object,
    },
  },
  data() {
    return {
      webSite: window.webSite,
    };
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>