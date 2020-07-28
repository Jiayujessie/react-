 import React, { Component } from 'react';
 import{List, Avatar} from "antd";
 import data from "./data"; 
 import {Link} from "react-router-dom";
 import { UserOutlined } from '@ant-design/icons';

 export default class IndexList extends Component{
     render(){
         console.log(data)
         return(
             <List
              loading = {false}
              dataSource = {data.data}
              renderItem = {item=>(<List.Item>
                  <List.Item.Meta
                    avatar = {<Avatar src= {item.author.avatar_url} />}
                    title = {<h3>{item.title}</h3>}
                     
                    /* title = {<Link to {"/details/"+item.id}>{item.title}</Link>} */
                    description={(
                        <p>
                            <Link to={"/user/"+item.author.loginname}>
                                {item.author.loginname}
                            </Link>
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

