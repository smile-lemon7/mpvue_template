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



export const uploadFile = (params) => {
    return fly.post(`${host}/api/add/file/path/`, qs.stringify(params))
};


