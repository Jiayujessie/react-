import React, { Component } from 'react';
import MainHeader from './view/user/main-header';
import MainFooter from './view/user/main-footer';
import './view/index.css';

class App extends Component{
  render(){
    return<div className="pageWrap">
      <MainHeader/>
      <main className="main">身体</main>
      <MainFooter/>
    </div>;
  }
}

export default App;
