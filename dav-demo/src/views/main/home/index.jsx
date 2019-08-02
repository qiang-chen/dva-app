import React, { Component } from 'react'

import style from "../../../css/home.css"

//通过connect这个中间件将props挂载上dispatch这个方法

import {connect} from "dva"

//引入列表组件

import Item from "../../../components/Item"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        //调用仓库里面的异步方法 然后发送ajax请求获取数据
        //console.log(this.props)
        this.props.dispatch({
            type:"shop/getShopListAsync"
        })
    }
    render() {
        let {product}=this.props
        return (
            <div className={style.home}>
                <div className={style.head}>
                    首页头部
                </div>
                <div className={style.main}>
                    {product.map(item=>{
                        return <Item key={item.id} {...item}></Item>
                    })}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        product:state.shop.shoping
    }
}


Home=connect(mapStateToProps)(Home)