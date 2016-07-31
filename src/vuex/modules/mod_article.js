/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 文章相关的store
 */
import {
    GET_ARTICLELIST,
    GET_HISTORYLIST,
    GET_ARTICLE,
} from '../mutation-types'

// 保存我的个人信息
const state = {
    articleList: [],//存放文章列表
    historyList: [],//存放文章历史记录列表
    article: {},//存放文章
};

// mutations
const mutations = {
    [GET_ARTICLELIST] (state, articleList) {
        state.articleList = articleList
    },
    [GET_HISTORYLIST] (state, historyList) {
        state.historyList = historyList
    },
    [GET_ARTICLE] (state, article) {
        state.article = article
    },



}

export default {
    state,
    mutations
}