<template>
  <div class="solution-container">
    <div class="box max-center">
      <Title
        v-if="sort.def1"
        :title="sort.def1"
        :desc="sort.def2"
        :titleSize="48"
        titleColor="white"
        descColor="white"
      />
      <div class="content">
        <ul>
          <Item
          @changeIndex="changeIndex(i)"
            v-for="(item, i) in data"
            :key="item.id"
            :title="item.title"
            :desc="item.ext_wb"
            :index="i"
            :class="{on: i === index}"
          />
        </ul>
        <div class="img">
          <img v-if="data && data[index]" :src="webSite + data[index].ico" alt="">
        </div>
      </div>
    </div>
    <img :src="webSite + sort.pic"  class="bg" />
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
  data() {
    return {
      webSite: window.webSite,
      index: 0,
    };
  },
  methods:{
    changeIndex(index){

      this.index = index;
    }
  },
  props: {
    sort: {
      type: Object,
    },
    data: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>