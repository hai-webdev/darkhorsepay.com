<template>
  <div class="title-container">
    <h2
      class="title"
      :style="{ fontSize: titleSize + 'px', color: titleColor }"
    >
      {{ title }}
    </h2>
    <div class="desc" :style="{ fontSize: descSize + 'px', color: descColor }">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    titleSize: {
      type: Number,
      default: 40,
    },
    descSize: {
      type: Number,
      default: 18,
    },
    titleColor: {
      type: String,
      default: "#0F172A",
    },
    descColor: {
      type: String,
      default: "#334155",
    },
  },
};
</script>

<style lang="less" scoped>
.title-container{
    text-align: center;
}
.desc {
  margin-top: 24px;
}
</style>