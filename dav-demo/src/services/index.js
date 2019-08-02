import request from '../utils/request';

//发送获取购物车商品列表的数据

export function getShopList(){
    return request('/api/shoplist');
}

