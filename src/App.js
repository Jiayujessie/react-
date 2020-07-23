import React, { Component } from 'react';
import MainHeader from './view/user/main-header';
import MainFooter from './view/user/main-footer';
import './view/index.css';

class App extends Component{
  render(){
    return<div className="pageWrap">
      <MainHeader/>
      <div>身体</div>
      <MainFooter/>
    </div>;
  }
}

export default App;
