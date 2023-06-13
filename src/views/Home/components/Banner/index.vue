<template>
  <div class="banner-container max-center">
    <div class="top">
      <div class="title" v-html="data.ext_title"></div>
      <div class="desc">{{ data.ext_desc }}</div>
      <a v-if="data.ext_link && data.ext_btn_text" :href="data.ext_link" target="_blank" class="btn">
        <svg
        width="10"
        height="14"
        fill="#fff"
          aria-hidden="true"
          class="h-3 w-3 flex-none fill-white group-active:fill-current"
        >
          <path
            d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"
          ></path>
        </svg>
        <span>{{ data.ext_btn_text }}</span>
      </a>
    </div>
    <div class="bottom">
      <div class="text">{{ data.ext_wb }}</div>
      <ul class="link-list" v-if="data.pics && data.pics.length">
        <li
          class="link-item"
          v-for="(item, index) in data.pics.split(',')"
          :key="index"
        >
          <img :src="webSite + item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webSite: window.webSite,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>