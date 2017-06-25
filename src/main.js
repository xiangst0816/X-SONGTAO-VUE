/**
 * Created by xiangsongtao on 16/10/29.
 * Description: main.js
 * */
'use strict'
import 'bootstrap/js/modal.js'
import 'bootstrap/js/tooltip.js'
import 'bootstrap/js/transition.js'
import 'bootstrap/scss/bootstrap.slim.scss'
import attachFastClick from 'fastclick'
import Vue from 'vue'
import App from './App'
import ua from './plugin/parseUA'
import router from './router.js'
import './theme/util.scss'

/**
 * $router全局化，便于外部js调用
 * */
window.$router = router

/**
 * 浏览环境判断，保存为全局
 * */
window.ua = ua

/**
 * 触摸配置
 * */
new attachFastClick(document.body)

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
  components: {App}
})
