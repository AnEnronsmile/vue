import Vue from "vue";
import App from "./App.vue";
// 引入路由器
import router from "./router";
// 设置公共组件
import TypeNav from "./components/TypeNav";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
new Vue({
  render: (h) => h(App),
  // 注册路由器
  router,
}).$mount("#app");
