import {createAction} from "redux-actions"

//将所有的action放在同一个文件 后期方便管理

export const addBuyList=createAction("addBuyList");

export const getShopListAsync=createAction("shop/getShopListAsync");