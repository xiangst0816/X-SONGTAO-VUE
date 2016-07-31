/**
 * Created by xiangsongtao on 16/7/30.
 * Description: action 是一种专门用来被 component 调用的函数。
 */

import api_myinfo from "./api/api_myinfo";
import api_article from "./api/api_article";
import * as types from "./mutation-types";

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
/**
 * 更改我的称述显示状态
 * */
export const setMyWordStatus = function ({dispatch}) {
    dispatch(types.SET_SHOWMYWORD_STATUS)
};

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
 * 获取具有标签结构的记录(标签库)
 * */
export const getTagsListWithStructure = function ({dispatch}) {
    api_article.getHistoryList((data)=> {
        dispatch(types.GET_HISTORYLIST, data)
    });
};