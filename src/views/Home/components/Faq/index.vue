<template>
  <div class="faq-container">
    <div class="box max-center">
      <div class="title">{{ sort.subname }}</div>
      <ul class="faq-list">
        <Item
          v-for="(item, index) in data"
          :key="item.id"
          :index="index"
          :title="item.title"
          :desc="item.ext_wb"
        />
      </ul>
    </div>
    <img :src="webSite + sort.pic" alt="" class="bg" />
  </div>
</template>

<script>
import Item from "./components/Item";
export default {
  data() {
    return {
      webSite: window.webSite,
    };
  },
  props: {
    sort: {
      type: Object,
    },
    data: {
      type: Array,
    },
  },
  components: {
    Item,
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>