 import React, { Component } from 'react';
 import{List} from "antd";
 import data from "./data"; 

 export default class IndexList extends Component{
     render(){
         return(
             <List
              loading = {false}
              dataSource = {data.data}
              renderItem = {item=>(<List.Item>

              </List.Item>)}
            
             >
             </List>
         )
     }
 }

