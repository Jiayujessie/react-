import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Menu, Row, Col} from "antd";
import IndexMenu from "./indexMenu";
import IndexList from "./list"; 
//首页视图
let arr = [];
for(let i = 0; i < 100; i++){
arr.push(<li>这是第{i}行</li>)
}

class Index extends Component{
    render(){
        return (
            <Row className="wrap">
                <Col md={6} xs={0} className="indexSider">
                <IndexMenu
                    id="indexMenu" 
                    mode="vertical"
                />    
                </Col>
                <Col md={0} xs={24} >
                    <IndexMenu
                    id="indexXsMenu" 
                    mode="horizontal"
                    />                   
                </Col>
                <Col 
                md={18}
                xs={24} 
                className="indexList"
                >
                    {arr}
                </Col>
                <IndexList/>
            </Row>
        )
    };
}
export default Index;
