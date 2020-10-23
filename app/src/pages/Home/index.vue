<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav />

    <!--列表-->
    <ContainerList />
    <!--今日推荐-->
    <RecommendToday />
    <!-- 商品排行 -->

    <Rank />
    <!-- 猜你喜欢 -->
    <Like />

    <!--楼层-->
    <Floor />

    <!--楼层-->

    <!--商标-->
    <Brank />
  </div>
</template>

<script>
import Brank from "./Brank";
import ContainerList from "./ContainerList";
import Floor from "./Floor";
import Like from "./Like";
import Rank from "./Rank";
import RecommendToday from "./RecommendToday";
export default {
  name: "Home",
  components: {
    Brank,
    ContainerList,
    Floor,
    Like,
    Rank,
    RecommendToday,
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped></style>
