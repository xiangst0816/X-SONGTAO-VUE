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
 * 独立样式
 * */
import "font-awesome/css/font-awesome.min.css";
import "./theme/codeHighLight.css";
import "./theme/markdown.scss";
import "./theme/util.scss";
import "./theme/ui-modify.scss";
import "./theme/grid.scss";



/**
 * 精简版的scss,只选用需要的部分
 * */
import 'bootstrap/scss/bootstrap.slim.scss'
import 'bootstrap/js/tooltip.js'
import 'bootstrap/js/modal.js'
import 'bootstrap/js/dropdown.js'
import 'bootstrap/js/transition.js'
import 'bootstrap/js/popover.js'


/**
 * 触摸配置
 * */
import attachFastClick from "fastclick";
new attachFastClick(document.body);



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
    ready:function () {}

})


