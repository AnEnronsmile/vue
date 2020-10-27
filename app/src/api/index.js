// 封装api接口函数
import ajax from "./ajax";
// 获取首页的api接口函数
export const reqBaseCategoryList = () =>
  ajax.get(`/product/getBaseCategoryList`);
