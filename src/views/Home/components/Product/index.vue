<template>
  <div class="product-container">
    <Title v-if="sort.def1" :title="sort.def1" :desc="sort.def2" />
    <div class="content">
      <ul class="tab-list">
        <Item
          v-for="(item, i) in data"
          :key="item.id"
          :title="item.title"
          :desc="item.ext_wb"
          :icon="webSite + item.ext_tb"
          :iconHover="webSite + item.ext_tb2"
          :class="{on:index === i}"
          :index="i"
          @changeIndex="handleChange(i)"
        />
      </ul>
      <div class="img-box">
        <ul class="img-list" :style="{width:data.length * 100 + '%',transform:`translateX(-${index * (100 / data.length)}%)`}">
          <li class="img-item" v-for="item in data" :key="item.id">
            <img :src="webSite + item.ico" :alt="item.title" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Item from "./components/Item";
export default {
  props: {
    sort: {
      type: Object,
    },
    data: {
      type: Array,
    },
  },
  components: {
    Title,
    Item,
  },
  methods:{
    handleChange(index){
      this.index = index;
    }
  },
  data() {
    return {
      index:0,
      webSite: window.webSite,

    };
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>