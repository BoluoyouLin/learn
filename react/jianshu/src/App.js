import React from 'react';
import { GlobalStyle } from './style.js';
import { GlobalStyleByIconfont } from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <GlobalStyleByIconfont/>
      <Header/>
    </Provider>
  );
}

export default App;
