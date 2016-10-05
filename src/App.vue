<!--内容区-->
<template>
  <div class="app__content">
    <!--导航条-->
    <blog-nav></blog-nav>
    <!-- 路由外链 -->
    <router-view></router-view>
    <!--qq,微信弹出层-->
    <social-info></social-info>
    <!--退出弹层-->
    <do-logout></do-logout>
  </div>
</template>

<script>
  import Vue from "vue";
  import API from "./config";
  import blogNav from "./views/blog.nav";
  import socialInfo from "./components/socialInfo.vue";
  import doLogout from "./components/doLogout.vue";

  import store from './vuex/store'

  /**
   * 设置本地存储
   * */
  import vStorage from './utils/vStorage.js'
  Vue.use(vStorage, {
    storageKeyPrefix: 'xst-'
  });

  /**
   * 时间格式化插件-过滤器
   * */
  var vueMoment = require('vue-moment');
  var moment = require('moment');
  moment.locale('zh-cn')
  Vue.use(vueMoment);

  /**
   * vue-resource 配置
   * */
  var VueResource = require('vue-resource');
  Vue.use(VueResource);
  Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
  Vue.http.headers.common['Content-Type'] = 'application/json; charset=utf-8';

  import {
    setLoginState,
    setPlayingStatus,
    setMusicDuration,
    setMusicRightNow,
    setCurrentMusic,
    setLoadingStatus,
    setCanAutoPlay,
  } from './vuex/actions'


  import {Sign} from "./api/api_statistic";

  module.exports = {
    store,
    replace: false,
    data: function () {
      return {
        clear: '',
        musicList: API.musicList,
      }
    },
    methods: {
      /**
       * music的控制在App.vue中,方便全局管理
       * 只是展示与事件触发,通过vuex操作
       * */
      playCtrl(){
        let scope = this;
        scope.setPlayingStatus(!scope.isPlaying);
      },
      preCtrl(){
        let scope = this;
        let currentid = scope.musicList.indexOf(scope.currentMusicInfo);
        let index;
        if (currentid !== 0) {
          index = currentid - 1;
        } else {
          index = scope.musicList.length - 1;
        }
        scope.indexCtrl(index);
      },
      nextCtrl(){
        let scope = this;
        let currentid = scope.musicList.indexOf(scope.currentMusicInfo);
        let index;
        if (currentid !== (scope.musicList.length - 1)) {
          index = currentid + 1;
        } else {
          index = 0;
        }
        scope.indexCtrl(index);
      },
      // 从第几个开始
      indexCtrl(index){
        let scope = this;
        scope._ended();
        scope.setCurrentMusic(scope.musicList[index]);
        scope._beforeStart();
        scope._Start();
        scope.setPlayingStatus(true);
      },
      _init(){
        let scope = this;
        scope.setCurrentMusic(scope.musicList[0]);
        scope._beforeStart();
        scope._Start();
      },
      //start之前的准备工作,比如清除上一个的播放数据
      _beforeStart(){
        let scope = this;
        //监听播放完毕状态
        scope.MusicHandle.addEventListener('ended', function () {
          scope._ended();
          scope.nextCtrl();
//                    console.log("ended")
        });
        //监听加载状态
        scope.MusicHandle.addEventListener('canplay', function () {
          console.log("canplay")
          scope.setLoadingStatus(false);
          scope.setMusicDuration(scope.MusicHandle.duration)
        });
        //开始请求数据
        scope.MusicHandle.addEventListener('loadstart', function () {
          console.log("loadstart")
          scope.setLoadingStatus(true);
        });
        //开始请求数据
        scope.MusicHandle.addEventListener('canplaythrough', function () {
          console.log("canplaythrough")
          scope.setLoadingStatus(false);
        });
      },
      _Start(){
        let scope = this;
        scope.clear = setInterval(function () {
          scope.setMusicRightNow(scope.MusicHandle.currentTime);
        }, 500)
      },
      _ended(){
        let scope = this;
        clearInterval(scope.clear);
        scope.setPlayingStatus(false);
        scope.setMusicRightNow(0);
      },
      setAutoPlay(){
        let scope = this;
        scope.setCanAutoPlay(!scope.canAutoPlay)
        scope.$localStorage.$set('canAutoPlay', {
          autoPlay: scope.canAutoPlay
        });
      }
    },
    created: function () {
      /**
       * 签到
       * */
        // sign 是一个13位时间戳，填写当前签到的时间
      let sign = parseInt(Vue.$localStorage['sign']);
      let dayStart = parseInt(moment().startOf('day').format('x'));
      if (!sign || sign < dayStart) {
        Sign().then(function () {
          Vue.$localStorage.$set('sign', (new Date().getTime()));
        });
      } else {
        console.log('you have already sign!');
      }
    },
    ready: function () {
      //更改loading状态
      window.hideLoadingPage();

      const scope = this;
      /**
       * 进入检查是否有token,是否能直接登录
       * */
      if (!!scope.$localStorage.authorization) {
        let authorization = scope.$localStorage.authorization;
        let time = parseInt(authorization.time);
        if ((new Date().getTime() - time) < 1000 * 60 * 60 * 2) {
          //token有效,能进入
          scope.setLoginState(true);
          // 设置请求的token
          Vue.http.headers.common['authorization'] = "token " + authorization.token;
        }
      }
      //建立监听,如果有修改state中登录状态,则进行处理
      $(document).on("ChangeLoginStatus", function (event, params) {
        console.log('登录状态修改')
        scope.setLoginState(!!params);
      });

      /**
       * music 初始化
       * */
      if (!scope.MusicHandle) {
        scope._init()
      }

      /**
       * music 播放的控制区
       * */
      $(document).on("Music_PlayCtrl", function (event, params) {
        scope.playCtrl();
      });
      $(document).on("Music_PreCtrl", function (event, params) {
        scope.preCtrl();
      });
      $(document).on("Music_NextCtrl", function (event, params) {
        scope.nextCtrl();
      });
      $(document).on("Music_SetAutoPlay", function (event, params) {
        scope.setAutoPlay();
      });

      /**
       * music 播放的控制区
       * 是否自动播放
       * 进入初始化
       * */
      if (!!scope.$localStorage.canAutoPlay && !scope.isPlaying) {
        scope.setCanAutoPlay(scope.$localStorage.canAutoPlay.autoPlay);
        scope.setPlayingStatus(scope.$localStorage.canAutoPlay.autoPlay);
      }

    },
    components: {
//            小组件挂载集中挂载
      blogNav,
      socialInfo,
      doLogout,
    },
    vuex: {
      getters: {
        isPlaying: state=>state.isPlaying,
        isLoading: state=>state.isLoading,
        currentMusicInfo: state=>state.currentMusicInfo,
        MusicHandle: state=>state.handle,
        duration: state=>state.duration,
        rightNow: state=>state.rightNow,
        rightPercent: state=>state.rightPercent,
        canAutoPlay: state=>state.canAutoPlay,
      },
      actions: {
        setLoginState,//设置登录否
        setPlayingStatus,//该表播放状态
        setMusicDuration,
        setMusicRightNow,
        setCurrentMusic,
        setLoadingStatus,
        setCanAutoPlay,
      },
    },
  }
</script>

<style lang="scss">
  @import "./theme/theme.scss";

  * {
    /*outline: 1px solid #ddd;*/
  }

  /*解决ie下右侧出现滚动条的情况,因为如果使用modal时,会出现抖动*/
  @-ms-viewport {
    width: device-width;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    min-width: 320px;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-family: $font-family-sans-serif !important;
    opacity: 1;
    /*transition: all ease 500ms;*/

    &.isLogin {
      .admin_btn {
        display: block;
      }
    }
    .admin_btn {
      display: none;
    }
  }

  @include media(">desktop_small") {
    body {
      padding-left: 45px;
    }
  }

  @include media("<=desktop_small") {
    body {
      margin-top: 45px;
    }
  }

  @include media("<=phone") {
    html {
      /*background:#fff;*/
    }
  }

  /*内容区*/
  .app__content {
    width: 100%;
  }
</style>
