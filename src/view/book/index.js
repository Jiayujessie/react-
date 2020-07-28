import React, { Component } from 'react';
import{ Card} from 'antd';
import data from "./data";

//https://ant.design/components/card-cn/#header

class Book extends Component{
    render(){
        return (
            <div className="wrap">
                {data.map((item,index)=>(
                    <Card 
                    title={item.title}
                    inner = "type"
                    >
                        <div
                            dangerouslySetInnerHTML ={{
                                __html:item.content
                            }}
                        >
                        </div>
                    </Card>
                ))}
{/*                 <Card 
                    title="卡片标题"
                    loading={true}
                    type = "inner"
                >
                    卡片内容
                </Card> */}
            </div>
        )
    };
}
export default Book;