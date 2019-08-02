import React, { Component } from 'react'

import style from "../../../css/list.css"

import {connect} from "dva"

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        let {buyList}=this.props;
        return (
            <div>
                <div className={style.head}>
                    列表页面
                </div>
                {buyList.map(item=>{
                    return <div key={item.id} className={style.item}>
                    <div className={style.left}>
                        <img src={item.image} alt="" />
                    </div>
                    <div className={style.right}>
                        <p>{item.title}</p>
                        <p>价格:<b>{item.price}</b></p>
                        <p><span onClick={this.change.bind(this,"-",item.id)}>-</span><b>{item.num}</b><span onClick={this.change.bind(this,"+",item.id)}>+</span></p>
                    </div>
                </div>
                })}
            </div>
        )
    }
}

Object.assign(List.prototype,{
    //加加减减
    change(type,id){
       let buyList=this.props.buyList;
        let index=buyList.findIndex(item=>item.id===id);
        console.log(index,"下标");
        if(type==="-"){
            buyList[index].num--
            if(buyList[index].num<=1){
                buyList[index].num=1
            }
        }else{
            buyList[index].num++
        }
        //调用仓库方法 将其重新赋值
        this.props.dispatch({
            type:"shop/addBuyList",
            data:buyList
        })
    }
})


const mapStateToProps=(state)=>{
    return {
        buyList:state.shop.buyList
    }
}

List=connect(mapStateToProps)(List)