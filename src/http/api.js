import fly from './request'
import qs from 'qs'

import constants from '../constants'
const host = constants.host;
const appKey = constants.appKey;
const appid = constants.appid;
const file_url = constants.file_url;

/**
 * 接口模版====post
 *
 * export const test = params => {return fly.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test1 = function(){return fly.get(`${root}/api/getNewsList`)}
 *
 *
 * 用法：
 * 在 页面用引入 test
 * import {test} from '../../http/api.js'
 *
 * test(params).then(res=>{ console.log(res) })
 */

// 通用的get请求
export const get = () => {
    return fly.get(`${host}/api/get/carousels/`)
};

// 通用的post请求
export const post = (params) => {
    return fly.post(`${host}${params.url}`, qs.stringify(params.data))
};
// 封装的登录请求，根据后台接收方式选择是否加qs.stringify
export const login = params => {
    return fly.post('/login', params)
};

export const queryCarousel = () => {
    return fly.get(`${host}/api/get/carousels/`).then( data => {
        data.forEach(item => {
            item.cover_img = file_url + item.cover_img
        })
        return data
    } )
};