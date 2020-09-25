import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import { render } from '@testing-library/react';
import PageLogin from './Paginas/PageLogin/login';
import styleGlobal from './assets/styles/global.css';
import Initial from './Paginas/Inicial';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Initial} exact/>
      <Route path="/login" component={PageLogin} exact />
    </BrowserRouter>
  );
}

export default App;