// 引入vue
import Vue from "vue";
import VueRouter from "vue-router";
// 引入router
import routes from "./routes.js";

const Orbush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, onCpmllete = () => {}, onAbort) {
  return Orbush.call(this, location, onCpmllete, onAbort);
};

const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onCpmllete = () => {}, onAbort) {
  return replace.call(this, location, onCpmllete, onAbort);
};
// 声明使用路由器
Vue.use(VueRouter);
// 实例化并暴露
export default new VueRouter({
  mode: "history", //地址栏不带#
  routes,
});
