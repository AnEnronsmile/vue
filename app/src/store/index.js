// 引入vue
import Vue from "vue";
// 引入vuex
import Vuex from "vuex";
// 引入模块
import actions from "./actions";
import getters from "./getter";
import mutations from "./mutations";
import state from "./state";

import modules from "./modules";
// 声明使用
Vue.use(Vuex);
// 实例化vuex并、暴露
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  modules,
});
