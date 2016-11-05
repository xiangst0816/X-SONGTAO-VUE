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
 * 工具提示栏 tooltip 初始化方法
 * */
window.tooltip = function tooltip() {
  // 异步是为了等待页面加载完毕
  setTimeout(function () {
    let clientWidth = parseInt(document.documentElement.clientWidth);
    let $tooltips = $('[data-toggle="tooltip"]');
    if (clientWidth <= 768) {
    } else if (clientWidth > 769 && clientWidth < 991) {
      $tooltips.tooltip({
        trigger: 'hover',
        placement: 'bottom'
      });
    } else if (clientWidth > 991) {
      $tooltips.tooltip({
        trigger: 'hover',
        placement: 'right'
      });
    }
  }, 50)
};
/**
 * 触摸配置
 * */
new attachFastClick(document.body);
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
  components: { App },
})
