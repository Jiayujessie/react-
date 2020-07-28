import React, { Component } from 'react';
import data from "./data";
import PublicCard from "../../public_Card";
//关于视图

class About extends Component{
    render(){
        return(
            <PublicCard
            data = {data}
            />
        );
    };
}

export default About;