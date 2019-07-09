import React from 'react';
import { GlobalStyle } from './style.js';
import { GlobalStyleByIconfont } from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Details from './pages/details';
import Home from './pages/home'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <GlobalStyleByIconfont/>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Details}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
