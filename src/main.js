/**
 * Created by xiangsongtao on 16/7/26.
 * Description: main.js
 * */

'use strict';
import Vue from "vue";


/**
 * views & components
 * */
import app from "./App.vue";
import blogNav from "./views/blog.nav";


import "font-awesome/css/font-awesome.min.css";
// import "semantic-ui-breadcrumb/breadcrumb.min.css";
// import "semantic-ui-label/label.min.css";
// import "semantic-ui-input/input.min.css";
// import "semantic-ui-button/button.min.css";

//精简版的scss,只选用需要的部分
import 'bootstrap/scss/bootstrap.slim.scss'





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
    ready:function () {


    }

})


