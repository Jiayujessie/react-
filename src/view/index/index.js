import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Menu, Row, Col} from "antd";
import {indexMenu} from "./indexMenu";
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
                    <Menu id="indexMenu">
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华 </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/dev">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={0} xs={24} >
                    <Menu id="indexXsMenu" mode="horizontal">
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华 </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/dev">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col 
                md={18}
                xs={24} 
                className="indexList"
                >
                    {arr}
                </Col>
            </Row>
        )
    };
}
export default Index;
