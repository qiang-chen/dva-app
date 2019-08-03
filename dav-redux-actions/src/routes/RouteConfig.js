import React from "react";

const RouteConfig=[
    {
        path:"/main",
        component:React.lazy(()=>import("../views/main/index.jsx")),
        children:[
            {
                path:"/main/home",
                component:React.lazy(()=>import("../views/main/home/index.jsx"))
            },{
                path:"/main/list",
                component:React.lazy(()=>import("../views/main/list/index.jsx"))
            },{
                path:"/main",
                redirect:"/main/home"
            }
        ]
    },{
        path:"/detail/:id",
        component:React.lazy(()=>import("../views/detail/index.jsx")),
    },{
        path:"/",
        redirect: "/main"
    }
]

export default RouteConfig;