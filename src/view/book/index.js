import React, { Component } from 'react';
import{ Card} from 'antd';
import data from "./data";
import PublicCard from "../../public_Card";

//https://ant.design/components/card-cn/#header

class Book extends Component{
    render(){
        return (
            <PublicCard
            data = {data}
            />
        );
    };
}
export default Book;