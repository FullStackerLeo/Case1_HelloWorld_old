//Todo:  https://juejin.cn/post/6844904020809629710
//Redux: https://segmentfault.com/a/1190000021999973

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux"; //Provider
import store from './components/Todo/store/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
