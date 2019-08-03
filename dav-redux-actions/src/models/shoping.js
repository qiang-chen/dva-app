//引入网络请求文件 然后发送各类网络请求

import * as Api from "../services/index"

//首页购物车数据列表

//初始化数据
const state = {
  shoping: [], //购物列表的初始数据
  buyList: [], //购物车列表数据
}

//同步函数方法

const reducers = {
  getShopList(state, action) {
    //console.log(state, action)
    let newState = JSON.parse(JSON.stringify(state));
    newState.shoping = action.payload.list.map(item => {
      item.num = 0;
      return item
    });
    //console.log(newState);
    return {
      ...newState
    };
  },
  addBuyList(state, action) {
    //购物车列表添加数据
    let newState = JSON.parse(JSON.stringify(state));
    newState.buyList = [...action.data];
    //console.log(newState.buyList,"仓库中的购买列表")
    return {
      ...newState
    };
  }
}

//异步方法

const effects = {
  //payload的意思是进行传参的  call调用异步网络请求 put调用上面的同步方法
  * getShopListAsync({
    payload
  }, {
    call,
    put
  }) { // eslint-disable-line
    //发送网络请求  如果payload需要传参的话直接在call第二个参数写就可以了
    let results = yield call(Api.getShopList)
    let data = results.data;
    console.log(data);
    if (data.list.length) {
      //调用上面的同步方法来改变数据
      yield put({
        type: 'getShopList',
        payload: data
      });
    }

  },
};




export default {
  //命名空间
  namespace: 'shop',
  //数据
  state,

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
    },
  },
  //异步函数
  effects,
  //同步函数
  reducers,

};
