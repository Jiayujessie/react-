import React, { Component } from 'react';
import {Card, Avatar} from "antd";
import data from "./data";
import TxtTag from "../index/texTag"; 
import{Link} from "react-router-dom";

class TxtDetails extends Component{
    render(){
        console.log(data)
        const title =(
            <div>
                <h1>{data.data.title}</h1>
                <div
                style={{
                    display:"flex",
                    alignItems:"center" 
                }}
                >
                    <TxtTag data ={data.data}/>
                    <Avatar src={data.data.author.avatar_url}/>
                    <Link to = {"/user/"+data.data.author.loginname} >
                        {data.data.author.loginname}
                    </Link>
                    发表于：{data.data.create_at.split("T")[0]}
                </div>
            </div>
        );
        return(
            <div>
                <Card
                    title={title}
                >
                    <div
                    dangerouslySetInnerHTML = {
                        {
                            __html: data.data.content
                        }
                    }
                    >
                    </div>
                </Card>               
            </div>
        );
    };
}

export default TxtDetails;