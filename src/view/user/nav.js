import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import { StarOutlined, StarFilled, StarTwoTone, CopyOutlined, InfoCircleOutlined } from '@ant-design/icons';

export default class Nav extends Component{
    render(){
        let {mode, id} = this.props;
        return(
            <Menu id ={id} theme ="dark" mode = {mode}> 
                        <Menu.Item>
                        <StarOutlined />
                        <StarFilled />
                        <StarTwoTone twoToneColor="#eb2f96" />
                            首页
                        </Menu.Item>
                        <Menu.Item>
                        <CopyOutlined />
                            教程
                        </Menu.Item>
                        <Menu.Item>
                        <InfoCircleOutlined />
                            关于
                        </Menu.Item> 
                    </Menu>

        )
    }
}