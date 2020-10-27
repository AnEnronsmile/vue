// 管理首页中的数据
import { reqBaseCategoryList } from "@/api";
export default {
  state: {
    // 三级分类信息数据
    baseCategoryList: [],
  },
  mutations: {
    //直接修改三级分类信息
    RECEIVE_BASE_CATEGORY_LIST(state, baseCategoryList) {
      state.baseCategoryList = baseCategoryList;
    },
  },
  actions: {
    // 调用接口异步请求获取数据
    async reqBaseCategoryList({ commit }) {
      const result = await reqBaseCategoryList();
      if (result.code === 200) {
        commit("RECEIVE_BASE_CATEGORY_LIST", result.data);
      }
    },
  },
  getters: {},
};
