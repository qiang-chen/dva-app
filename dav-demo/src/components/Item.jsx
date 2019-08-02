import React, { Component } from 'react'

import style from "../css/Item.css"

import {withRouter} from "dva/router"

export default class Item extends Component {
    render() {
        return (
            <>
                <div className={style.item} onClick={this.skip.bind(this)}>
                    <div className={style.left}>
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className={style.right}>
                        <p>{this.props.title}</p>
                        <p>价格:<b>{this.props.price}</b></p>
                    </div>
                </div>
            </>
        )
    }
}

//各类方法
Object.assign(Item.prototype,{
    //跳转详情
    skip(){
        console.log(this.props.id);
        this.props.history.push("/detail/"+this.props.id)
    }
})

Item=withRouter(Item)