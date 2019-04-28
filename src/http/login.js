import fly from './request'
import qs from 'qs'

import constants from '../constants'
const host = constants.host;
const appKey = constants.appKey;
const appid = constants.appid;

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


// 封装的登录请求，根据后台接收方式选择是否加qs.stringify
export const login = ({params}) => {
  return fly.post(`${host}/api/user/login1/`, qs.stringify(params))
};