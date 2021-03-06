 import React, { Component } from 'react';
 import{List, Avatar} from "antd";
 import data from "./data"; 
 import {Link} from "react-router-dom";
 import TexTag from "./texTag";

 export default class IndexList extends Component{
     render(){
         return(
             <List
              loading = {false}
              dataSource = {data.data}

              renderItem = {
                  item =>(
                  <List.Item
                  actions = {[
                      "回复: "+item.reply_count,
                      "访问: "+item.visit_count
                    ]}
                    key={item.id}
                  >

                  <List.Item.Meta
                    avatar = {<Avatar src= {item.author.avatar_url} />}

                    title =  {
                        <div>
                            <TexTag data = {item }/>

                            <Link to = {"/details/"+item.id}>
                            {item.title}
                            </Link>
                        </div>
                    }

                    description={(
                        <p>
                            <Link to={"/user/"+item.author.loginname}>
                                {item.author.loginname}
                            </Link>
                            发表于：{item.create_at.split("T")[0]}
                        </p>   
                    )} 
                  /> 
              </List.Item>)}
             >  
             </List>
         )
     }
 }

/*  avatar列表元素的图标
 description 列表元素的描述内容 */

