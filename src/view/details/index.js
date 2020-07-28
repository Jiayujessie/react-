import React, { Component } from 'react';
import {Card, Avatar} from "antd";
import data from "./data";
import TxtTag from "../index/texTag"; 
import{Link} from "react-router-dom";
import TxtDetails from "./txtDetails";

class Details extends Component{
    render(){
        return(
            <div className="wrap">
                <TxtDetails
                    loading={false}
                    data={data}
                />          
            </div>
        );
    };
}

export default Details;