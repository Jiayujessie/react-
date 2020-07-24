import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Layout, Row, Col, Divider, Dropdown, Button} from "antd";
import 'antd/dist/antd.css';
import Icon, { MenuFoldOutlined } from '@ant-design/icons';
import Nav from './nav';  

export default class MainHeader extends Component {
    render(){
        return (
        <Layout.Header>
            <Row className= "wrap">
                <Col md={6} xs={24}>
                    <h1 id="logo">Knowledge Sharing</h1>
                    
                </Col>
                <Col md={18} xs={0}>
                    {/* 嵌套导航 */}   
                    <Divider type="vertical" className="headerDivider" />
                    <Nav
                    id= "nav"
                    mode= "horizontal"
                    />
                    
                </Col>
                <Col md={0} xs={24} className="xsNav">
                    <Dropdown overlay={
                        <Nav
                        id = "xsNav"
                        mode = "vertical"
                        />
                    }
                    trigger = {["click","touchend"]}
                    placement = "bottomRight "

                    >
                        <Button><MenuFoldOutlined /></Button>
                    </Dropdown>
                </Col>
            </Row>
    
        </Layout.Header>);
    }
}

