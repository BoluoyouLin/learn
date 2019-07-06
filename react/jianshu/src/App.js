import React,{ Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { GlobalStyleByIconfont } from './statics/iconfont/iconfont'
import Header from './common/header'

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <GlobalStyleByIconfont/>
      <Header/>
    </Fragment>
  );
}

export default App;
