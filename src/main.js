/**
 * Created by xiangsongtao on 16/7/26.
 * Description: main.js
 * */

'use strict';
import Vue from "vue";
/**
 * 路由相关 路由规则配置
 * */
import routerConfig from "./router.js";
routerConfig();

/**
 * views & components
 * */
import app from "./App.vue";
import blogNav from "./views/blog.nav";
/**
 * 组件--基于semantic.UI
 * */
// import $ from "jquery";//去掉ajax的版本
// import jQuery from 'jquery'

import "font-awesome/css/font-awesome.min.css";
import "semantic-ui-breadcrumb/breadcrumb.min.css";
import "semantic-ui-label/label.min.css";
import "semantic-ui-input/input.min.css";
import "semantic-ui-button/button.min.css";





/**
 * vue-resource 配置
 * */
var VueResource = require('vue-resource');
Vue.use(VueResource);
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
// import API from "./config.js" Access-Control-Allow-Origin

// console.log(API)

//icon字体
//面包屑
//标签
//输入框
//按钮

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
    },

})


