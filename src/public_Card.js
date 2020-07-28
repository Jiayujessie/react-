import React, { Component } from 'react';
import{ Card} from 'antd';
//https://ant.design/components/card-cn/#header

export default class PublicCard extends Component{
    render(){
        let {data} = this.props;
        return (
            <div className="wrap">
                {data.map((item,index)=>(
                    <Card 
                    title={item.title}
                    inner = "type"
                    hoverable = {true}
                    key={index}
                    >
                        <div
                            dangerouslySetInnerHTML ={{
                                __html:item.content
                            }}
                        >
                        </div>
                    </Card>
                ))}
            </div>
        )
    };
}