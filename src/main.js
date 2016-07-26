/**
 * Created by xiangsongtao on 16/7/26.
 * Description: main.js
 * */

'use strict';
import Vue from "vue";
import "font-awesome/css/font-awesome.min.css";
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


