import React, { Component } from 'react';
import{Tag} from "antd";
import data from "./data"; 

export default class TxtTag extends Component{
    render(){
        return(
            <Tag color="magenta">置顶</Tag>
        )
    }
}