// 引入所有的组件
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";

// 向外暴露
export default [
  //注册组件对象

  { path: "/", component: Home },
  { path: "/login", component: Login, meta: { isShowFooter: true } },
  { path: "/register", component: Register, meta: { isShowFooter: true } },
  { path: "/search/:keyword?", component: Search },
  // 重定向
  { path: "/", redirect: "/" },
];
