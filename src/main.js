/**
 * Created by xiangsongtao on 16/7/26.
 * Description: main.js
 * */

'use strict';
import Vue from "vue";
import routerConfig from "./router.js";
import app from "./App.vue";
import blogNav from "./views/blog.nav";
import "./theme/util.scss";

import "bootstrap/scss/bootstrap.slim.scss";
import "bootstrap/js/tooltip.js";
import "bootstrap/js/modal.js";
import "bootstrap/js/transition.js";



import attachFastClick from "fastclick";
/**
 * 路由相关 路由规则配置
 * */
routerConfig();

/**
 * 触摸配置
 * */
new attachFastClick(document.body);

/**
 * 发布模式禁用console.log()
 * */
window.noop = function () {}
if (process.env.NODE_ENV === 'production') {
    console.log = noop;
    console.warn = noop;
}


new Vue({
    el: '#app',
    replace: false,
    data: function () {
        return {}
    },
    components: {
        blogNav, app
    },
    ready: function () {
    }

})



