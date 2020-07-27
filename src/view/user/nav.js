import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import { StarOutlined, StarFilled, StarTwoTone, CopyOutlined, InfoCircleOutlined } from '@ant-design/icons';

export default class Nav extends Component{
    render(){ 
        let {mode, id} = this.props;
        return(
            <Menu id ={id} theme ="dark" mode = {mode}> 
                <Menu.Item>
                    <Link to="/index">
                        <StarOutlined />
                        <StarFilled />
                        <StarTwoTone twoToneColor="#eb2f96" />
                        首页
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/book"><CopyOutlined />教程</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about">
                        <InfoCircleOutlined />
                        关于
                    </Link>
                </Menu.Item> 
            </Menu>

        )
    }
}