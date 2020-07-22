import React, { Component } from 'react';
import {Switch,Router,Redirect} from 'react-router-dom';
import Index from "../view/index/index"; 
import Book from "../view/book/index";
import About from "../view/about/index";
import User from "../view/user/index";
import Details from "../view/details/index";

class RouterIndex extends Component{
    render(){
        return(
            //就是选择到一个就停下
            <Switch>
                {/* 不直接匹配根目录/，应该重定向Redirect匹配到页面目录/index
                render里接收的函数 函数有返回值
                严格匹配 */}
                <Router path="/" exact render={()=>(
                    <Redirect to="/index"/>
                )} />

                {/* 匹配index
                Component需要引入首页的组件或视图 */}
                <Router path="/index" Component={Index}/>
                <Router path="/book" Component={Book}/>
                <Router path="/about" Component={About}/>
                <Router path="/user" Component={User}/>
                <Router path="/details" Component={Details}/>
            </Switch>
        );
    }
}

export default RouterIndex;