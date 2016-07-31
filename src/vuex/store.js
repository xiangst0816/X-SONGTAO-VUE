import Vue from "vue";
import Vuex from "vuex";
import mod_myinfo from "./modules/mod_myinfo";
import mod_article from "./modules/mod_article";
import mod_tag from "./modules/mod_tag";
import {
    SET_SHOWMYWORD_STATUS
} from './mutation-types'
//vuex模块
// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    //全局state状态
    state: {
        isShowMyWords: false
    },
    //全局突变事件处理
    mutations: {
        //toggle我的个人称述信息
        [SET_SHOWMYWORD_STATUS] (state) {
            state.isShowMyWords = !state.isShowMyWords;
        }
    },
    modules: {
        mod_myinfo,//我的信息
        mod_article,//文章列表
        mod_tag,//文章列表
    }
})