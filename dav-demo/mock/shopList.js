const Mock=require("mockjs")
module.exports={
    "GET /api/shoplist":Mock.mock({
        'list|12':[
            {
                image:"@image(100x100,@color)",
                
                'id|+1':1,
                title:"@ctitle",
                'price|12-25':1
            }
        ]
    })
}