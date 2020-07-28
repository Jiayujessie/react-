import React, { Component } from 'react';
import{Tag} from "antd";

//给标签分类
/* top置顶,
good:精华,
job:招聘,
ask:问答,
dev:测试. */
const tab ={
    top: {
        color : "magenta",
        txt:"置顶"
    },
    good:{
        color: "geekblue",
        txt:"精华"
    },
    job:{
        color:"purple",
        txt:"招聘"
    },
    share:{
        color: "gold",
        txt:"分享"
    },
    ask:{
        color:"cyan",
        txt:"问答"
    },
    dev:{
        color:"lime",
        txt:"测试"
    },
};

function getTab(data){
    return(
        data.top?
            "top":
            data.good?
                "good":data.tab
    )
}

export default class TxtTag extends Component{
    render(){
        let nowTab = tab[ getTab(this.props.data)];
    return(
     <Tag color = {nowTab.color}>{nowTab.txt}</Tag>
     )
    }
}