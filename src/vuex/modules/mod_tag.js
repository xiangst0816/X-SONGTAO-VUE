/**
 * Created by xiangsongtao on 16/7/30.
 * Description:
 */
import {
    GET_ARTICLELIST,GET_HISTORYLIST
} from '../mutation-types'

// 保存我的个人信息
const state = {
    getTagsListWithStructure: [],//存放文章列表
    historyList: [],//存放文章列表
};

// mutations
const mutations = {
    [GET_ARTICLELIST] (state, articleList) {
        state.articleList = articleList
    },
    [GET_HISTORYLIST] (state, historyList) {
        state.historyList = historyList
    },



}

export default {
    state,
    mutations
}