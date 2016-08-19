/**
 * Created by xiangsongtao on 16/7/26.
 * Description: main.js
 * */

'use strict';
import Vue from "vue";
import routerConfig from "./router.js";
import app from "./App.vue";
import blogNav from "./views/blog.nav";
import "font-awesome/css/font-awesome.min.css";
import "./theme/util.scss";
import "./theme/ui-modify.scss";
import "./theme/grid.scss";
import "./theme/codeHighLight.css";
import "./theme/markdown.scss";
import "bootstrap/scss/bootstrap.slim.scss";
import "bootstrap/js/tooltip.js";
import "bootstrap/js/modal.js";
import "bootstrap/js/dropdown.js";
import "bootstrap/js/transition.js";
import "bootstrap/js/popover.js";
import attachFastClick from "fastclick";
/**
 * 路由相关 路由规则配置
 * */
routerConfig();

/**
 * views & components
 * */

/**
 * 独立样式
 * */


/**
 * 精简版的scss,只选用需要的部分
 * */


/**
 * 触摸配置
 * */
new attachFastClick(document.body);

/**
 * 发布模式禁用console.log()
 * */
if (process.env.NODE_ENV === 'production') {
    console.log = function () {
    };
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



