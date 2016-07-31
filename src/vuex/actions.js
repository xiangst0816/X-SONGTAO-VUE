/**
 * Created by xiangsongtao on 16/7/30.
 * Description: action 是一种专门用来被 component 调用的函数。
 */

import api_article from "./api/api_article";
import api_comment from "./api/api_comment";
import api_myinfo from "./api/api_myinfo";
import api_tag from "./api/api_tag";
import * as types from "./mutation-types";

//-------------------------全局---------------------------
/**
 * 更改我的称述显示状态
 * */
export const setMyWordStatus = function ({dispatch}) {
    dispatch(types.SET_SHOWMYWORD_STATUS)
};
/**
 * 更改社交的二维码图片
 * */
export const setSocialImgUrl = function ({dispatch},url) {
    dispatch(types.SET_SOCIALIMG,url)
};



//-------------------------我的信息---------------------------
/**
 * 获取我的信息
 * */
export const getMyInfo = function ({dispatch}) {
    // action 会收到 store 作为它的第一个参数,
    // 既然我们只对事件的分发（dispatch 对象）感兴趣。
    // （state 也可以作为可选项放入）,我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
    api_myinfo.get(data=> {
        // action 也可以先从 HTTP 后端或 store 中读取其他数据之后再分发更新事件。
        // action 函数能够通过分发相应的 mutation 函数，来触发对 store 的更新。
        dispatch(types.GET_MYINFO, data)//『当 INCREMENT 事件被触发时，调用这个 handler』
    })
};

//-------------------------文章---------------------------
/**
 * 获取文章列表
 * */
export const getArticleList = function ({dispatch}, url) {
    api_article.getArticleList(url, (data)=> {
        dispatch(types.GET_ARTICLELIST, data)
    });
};
/**
 * 获取文章历史记录
 * */
export const getHistoryList = function ({dispatch}) {
    api_article.getHistoryList((data)=> {
        dispatch(types.GET_HISTORYLIST, data)
    });
};
/**
 * 根据文章id获取文章详情(前台)
 * */
export const getArticleById = function ({dispatch},articleId) {
    api_article.getArticleById(articleId,(data)=> {
        dispatch(types.GET_ARTICLE, data)
    });
};
//-------------------------标签---------------------------
/**
 * 获取具有标签结构的记录(标签库)
 * */
export const getTagsListWithStructure = function ({dispatch}) {
    api_tag.getTagsListWithStructure((data)=> {
        dispatch(types.GET_TAGSWITHSTRUCTURE, data)
    });
};

//-------------------------评论---------------------------
/**
 * 根据文章id获取该文章的评论信息
 * */
export const getArticleComments = function ({dispatch},articleId) {
    api_comment.getArticleComments(articleId,(data)=> {
        dispatch(types.GET_ARTICLECOMMENTS, data)
    });
};