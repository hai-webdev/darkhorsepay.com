<template>
  <div class="home-container">
    <Banner :data="bannerData" />
    <Solution id="solution" :sort="solutionSort" :data="solutions" />
    <Product id="product" :sort="productSort" :data="products" />
    <Get id="get" :sort="getSort" />
    <Features id="features" :sort="featureSort" :data="features" />
    <Faq id="faq" :sort="faqSort" :data="faqs" />
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Solution from "./components/Solution";
import Product from "./components/Product";
import Get from "./components/Get";
import Features from "./components/Features";
import Faq from "./components/Faq";
export default {
  components: {
    Banner,
    Solution,
    Product,
    Get,
    Features,
    Faq,
  },
  data() {
    return {
      bannerData: {},
      solutionSort: {},
      solutions: [],
      productSort: {},
      products: [],
      getSort: {},
      featureSort: {},
      features: [],
      faqSort: {},
      faqs: [],
    };
  },
  async created() {
    this.bannerData = await this.$api.getContent({ scode: 1 });
    this.solutionSort = await this.$api.getScodeInfo(2);
    this.solutions = await this.$api.getList({ scode: 2 });
    this.productSort = await this.$api.getScodeInfo(3);
    this.products = await this.$api.getList({ scode: 3 });
    this.getSort = await this.$api.getScodeInfo(4);
    this.featureSort = await this.$api.getScodeInfo(5);
    this.features = await this.$api.getList({ scode: 5 });
    this.faqSort = await this.$api.getScodeInfo(6);
    this.faqs = await this.$api.getList({ scode: 6 });
  },
};
</script>

<style lang="less" scoped>
</style>