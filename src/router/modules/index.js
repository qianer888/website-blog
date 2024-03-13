import { lazy } from "react";
import Home from "@/views/Home";
import Blog from "@/views/Blog";

const routes = [
  {
    path: "/",
    name: "home",
    compontent: Home,
    mate: {
      title: "首页",
    },
  },
  {
    path: "/blog",
    name: "blog",
    compontent: Blog,
    mate: {
      title: "博客",
    },
  },
  {
    path: "/blog/detail/:id",
    name: "blogDetail",
    compontent: lazy(() => import("../../views/Blog/detail")),
    mate: {
      title: "详情",
    },
  },
];

export default routes;
