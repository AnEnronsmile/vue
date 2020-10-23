// 引入vue
import Vue from "vue";
import VueRouter from "vue-router";
// 引入router
import routes from "./routes.js";
// 声明使用路由器
Vue.use(VueRouter);
// 实例化并暴露
export default new VueRouter({
  mode: "history", //地址栏不带#
  routes,
});
