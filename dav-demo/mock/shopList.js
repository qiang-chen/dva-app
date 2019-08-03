const Mock=require("mockjs")
module.exports={
    "GET /api/shoplist":Mock.mock({
        'list|12':[
            {
                image:"@image(100x100,@color)",
                id:"@id",
                nickName:"@last",
                phone:/^1[34578]\d{9}$/,
                createTime:"@datetime",
                isMale:"@boolean",
                title:"@ctitle",
                'price|12-25':1
            }
        ]
    })
}