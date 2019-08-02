// import React from "react";

// const RouteConfig=[
//     {
//         path:"/main",
//         component:React.lazy(()=>import("../views/main/index.jsx")),
//         children:[
//             {
//                 path:"/main/home",
//                 component:React.lazy(()=>import("../views/main/home/index.jsx"))
//             },{
//                 path:"/main/list",
//                 component:React.lazy(()=>import("../views/main/list/index.jsx"))
//             },{
//                 path:"/main",
//                 redirect:"/main/home"
//             }
//         ]
//     },{
//         path:"/",
//         redirect: "/main"
//     }
// ]

import Main from "../views/main/index.jsx";
import Home from "../views/main/home/index.jsx"

import List from "../views/main/list/index.jsx"
import Detail from "../views/detail/index.jsx";


const RouteConfig=[
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"/main/home",
                component:Home
            },{
                path:"/main/list",
                component:List
            },{
                path:"/main",
                redirect:"/main/home"
            }
        ]
    },{
        path:"/detail/:id",
        component:Detail,
    },{
        path:"/",
        redirect: "/main"
    }
]

export default RouteConfig;