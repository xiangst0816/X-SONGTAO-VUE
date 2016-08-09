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


import "font-awesome/css/font-awesome.min.css";

/**
 * 精简版的scss,只选用需要的部分
 * */
// import 'bootstrap/scss/bootstrap.slim.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'





new Vue({
    el: '#app',
    replace: false,
    data: function () {
        return {
        }
    },
    components: {
        blogNav, app
    },
    ready:function () {

        // console.log(this.$storage.hello)


    }

})


