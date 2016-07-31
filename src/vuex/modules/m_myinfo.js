/**
 * Created by xiangsongtao on 16/7/30.
 * Description:
 */

import {
    GET_MYINFO
} from '../mutation-types'

// 保存我的个人信息
const state = {
    get: {}
}

// mutations
const mutations = {
    [GET_MYINFO] (state, myinfo) {
        state.get = myinfo
    }
}

export default {
    state,
    mutations
}
