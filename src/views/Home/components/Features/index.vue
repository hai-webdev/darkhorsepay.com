<template>
  <div class="features-container max-center">
    <Title v-if="sort.def1" :title="sort.def1" :desc="sort.def2" />
    <ul class="list">
      <Item
        v-for="item in data"
        :key="item.id"
        :title="item.title"
        :desc="item.ext_wb"
        :ico="item.ico"
      />
    </ul>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Item from "./components/Item";
export default {
  components: {
    Title,
    Item,
  },
  props: {
    sort: {
      type: Object,
    },
    data: {
      type: Array,
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