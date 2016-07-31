/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 评论相关的store
 */
import {
    GET_ARTICLECOMMENTS
} from '../mutation-types'

// 保存我的个人信息
const state = {
    articleComments: [],//存放由id查找出来的文章信息
};

// mutations
const mutations = {
    [GET_ARTICLECOMMENTS] (state, articleComments) {
        state.articleComments = articleComments
    }
}

export default {
    state,
    mutations
}