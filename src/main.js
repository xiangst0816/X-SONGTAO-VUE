/**
 * Created by xiangsongtao on 16/10/29.
 * Description: main.js
 * */
'use strict';
import Vue from 'vue';
import App from './App';
import router from './router.js'
import "./theme/util.scss";
import "bootstrap/scss/bootstrap.slim.scss";
import "bootstrap/js/tooltip.js";
import "bootstrap/js/modal.js";
import "bootstrap/js/transition.js";
import attachFastClick from "fastclick";

/**
 * $router全局化，便于外部js调用
 * */
window.$router = router;

/**
 * 触摸配置
 * */
new attachFastClick(document.body);

/**
 * 设定创窗口最小高度，写在body中
 * 我的信息展开的时候用到
 * */
var docEl = document.documentElement;
var clientHeight = docEl.clientHeight;
document.body.style.minHeight = clientHeight + 'px';

/**
 * 发布模式禁用console.log()
 * */
if (process.env.NODE_ENV === 'production') {
  console.log = function () {
  }
  console.warn = function () {
  }
}



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
})
