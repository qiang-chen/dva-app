import React, { Component } from 'react'

import style from "../../css/detail.css"

import {connect} from "dva"

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            opj:{}
        }
    }
    render() {
        let {opj}=this.state;
        return (
            <div className={style.detail}>
                <div className={style.head}>
                    商品详情页
                </div>
                <div className={style.item}>
                    <div className={style.left}>
                        <img src={opj.image} alt="" />
                    </div>
                    <div className={style.right}>
                        <p>{opj.title}</p>
                        <p>价格:<b>{opj.price}</b></p>
                        {/* <p><span>-</span><b>{opj.num}</b><span>+</span></p> */}
                        <p><span onClick={this.add.bind(this)}>加入购物车</span></p>
                    </div>
                </div>
                <button onClick={this.skip.bind(this)}>跳转到购物车列表</button>
            </div>
        )
    }
    //在dva中旧的生命周期将不再被使用 而这个生命周期在接受到新的props和state发生更新都会进行调用 返回一个对象用来更改state的值
    static getDerivedStateFromProps(props, state){
        let {id}=props.match.params;
        //通过结构出来的id向仓库筛选数据
        console.log(props.list,"getDerivedStateFromProps")
        let opj=props.list.find(item=>item.id===id*1);
        console.log(opj);
        return {
            opj
        }
    }
}

Object.assign(Detail.prototype,{
    add(){
        let newOpj=this.state.opj;
        //先获取仓库里面的购买列表 然后判断列表里面当前项是不是存在
        //如果不存在的话把其push进去存在修改num
        
       let buyList=this.props.buyList;
       let index=buyList.findIndex(item=>item.id===this.state.opj.id*1);
       if(index===-1){
           //不存在
           newOpj.num=1;
            this.setState({
                opj:newOpj
            },()=>{
                buyList.push(this.state.opj)
            })
            
       }else{
           //存在
           buyList[index].num++; 
       }
       //调用仓库的赋值方法将其进行赋值
       this.props.dispatch({
           type:"addBuyList",
           data:buyList
       })
       console.log(this.props.buyList);
    },
    //跳转到购物车页面
    skip(){
        this.props.history.push("/main/list")
    }   
})

const mapStateToProps=(state)=>{
    return {
        list:state.shop.shoping,
        buyList:state.shop.buyList
    }
}

Detail=connect(mapStateToProps)(Detail)