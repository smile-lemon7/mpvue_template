import * as types from './mutation-types'
// 进行涉及到多个全局变量的复杂计算

export const setOpenId = ({ commit }, params) => {
    console.log('action', params)
    // commit(types.OPEN_ID, id)
}
// export default {
//     setUserInfo: ({ commit }, { id }) => commit(openId, id)
// }