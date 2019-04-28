import * as types from './mutation-types'

const mutations = {
    // [方法名](参数1,参数2...){方法}
    [types.SET_USER_INFO](state, v) {
        state.userInfo = {...state.userInfo, ...v}
    },
    [types.SET_FILE](state, curr_file) {
        state.curr_file = curr_file
    },
}

export default mutations;