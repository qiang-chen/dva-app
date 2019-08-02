import React, { Component } from 'react'

import RouteView from "../../routes/RouteView"

import { NavLink } from "dva/router"

//引入css

import style from "../../css/main.css"


export default class Main extends Component {
    render() {
        return (
            // 这样写class名字的话就会变成局部样式保证每个名字不相同
            <div className={style['container']}>
                <main>
                    <RouteView children={this.props.children}></RouteView>
                </main>
                <footer>
                    <NavLink to="/main/home">
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/main/list">
                        <span>列表</span>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
