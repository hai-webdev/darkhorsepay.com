<template>
  <li class="item-container">
    <div class="title">{{index + 1 + '.'}} {{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </li>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        desc:{
            type:String
        },
        index:{
            type:Number
        }
    }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>