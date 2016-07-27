/**
 * Created by xiangsongtao on 16/7/26.
 * Description: main.js
 * */

'use strict';
import Vue from "vue";

/**
 * 组件--基于semantic.UI
 * */
import "font-awesome/css/font-awesome.min.css";//icon字体
import "semantic-ui-breadcrumb/breadcrumb.min.css";//面包屑
import "semantic-ui-label/label.min.css";//标签


import app from "./App.vue";
import blogNav from "./views/blog.nav";
import routerConfig from "./router.js";


// import VueRouter from "vue-router";


/**
 * 路由相关
 * */
//路由规则配置
routerConfig();


/**
 * views & components
 * */

// module.exports = {
//
//
// }

new Vue({
    el: '#app',
    replace: false,
    data: function () {
        return {
//            authenticating: false,
//            isIndex:true
        }
    },
    components: {
        blogNav, app
    }
})


