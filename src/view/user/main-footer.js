import React, { Component } from 'react';
import {Layout} from "antd";

export default class MainFooter extends Component {
    render(){
        return (
            <Layout.Footer style = {
                {textAlign: "center"}
            }>
                Jiayu's React Practice -- 底部
            </Layout.Footer>
        
        );
    }
}

