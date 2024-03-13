import React, { Suspense } from "react";
import routes from "./modules";
import {
  Routes,
  Route,
  useNavigate, // 实现路由跳转
  useLocation,
  useParams, // 获取路由参数
  useSearchParams, // 获取问号传参
} from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

// 统一路由配置
const Element = function Element(props) {
  let { compontent: Compontent, meta } = props;
  // 路由劫持

  // 修改页面title
  let { title = "我的个人网站" } = meta || {};
  document.title = title;

  // 获取路由信息，作为属性传递给组件
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return (
    <Compontent
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    />
  );
};

export default function RouterView() {
  return (
    <Suspense fallback={<LoadingOutlined />}>
      <Routes>
        {routes.map((item) => {
          let { path, name } = item;
          return (
            <Route key={name} path={path} element={<Element {...item} />} />
          );
        })}
      </Routes>
    </Suspense>
  );
}
