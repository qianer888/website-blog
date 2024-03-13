import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* react-redux */
// import { Provider } from 'react-redux';
// import store from './store';

/* antd */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </ConfigProvider>
);
