//将后台引入这个地方  这种引发太啰嗦 如果文件多需要一点一点往下require
// export default {
//     ...require("./mock/shopList.js")
// };

import fs from "fs";
import path from "path";

const mock={}

fs.readdirSync(path.join(__dirname+"/mock")).forEach(item=>{
    console.log(item)
    if(item.match(/\.js$/)){
        Object.assign(mock,require("./mock/"+item))
    }
})

export default mock;
