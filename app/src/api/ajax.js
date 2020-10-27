// 二次封装ajax
import axios from "axios";
// 引入nprogress
import Nprogress from "nprogress";
// 引入该样式的css文件
import "nprogress/nprogress.css";

// 设置请求的根路径和超时
const ajax = axios.create({
  baseURL: "api", //根路径
  timeOut: 20000, //超时时间
});
// 请求拦截器
ajax.interceptors.request.use((config) => {
  Nprogress.start(); //显示进度条
  return config;
});
// 响应拦截器
ajax.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response.data;
  },
  (error) => {
    Nprogress.done();
    alert("错误信息" + error.message);
    return Promise.reject(error);
  }
);
export default ajax;
