import React, { Component } from 'react'

import { Switch, Route, Redirect } from "dva/router"

export default class RouteView extends Component {
    render() {
        return (
            <Switch>
                    {this.props.children.map((item, index) => {
                        if (item.redirect) {
                            return <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
                        } else {
                            return <Route key={index} path={item.path} render={(props) => {
                                //console.log(props)
                                return <item.component {...props} children={item.children}></item.component>
                            }}></Route>
                        }
                    })}
               
            </Switch>
        )
    }
}
