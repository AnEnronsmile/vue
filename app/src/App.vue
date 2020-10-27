<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isShowFooter" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { reqBaseCategoryList } from "./api/index";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  async mounted() {
    this.$store.dispatch("reqBaseCategoryList");
    const baseCategoryList = (state) => state.home.baseCategoryList;
    console.log(baseCategoryList[1]);
  },
};
</script>

<style></style>
