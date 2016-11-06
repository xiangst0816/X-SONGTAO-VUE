<!--内容区-->
<template>
  <div>
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
  </div>
</template>

<script type="text/javascript">
  import Vue from "vue";
  import API from "./config";
  import blogNav from "./views/blog.nav";
  import socialInfo from "./components/socialInfo.vue";
  import doLogout from "./components/doLogout.vue";
  import store from './vuex/store'
  import vStorage from './utils/vStorage.js'
  import vueMoment from 'vue-moment';
  import moment from 'moment';
  import VueResource from 'vue-resource';
  import {num2MMM, uppercase, addImgPrefix} from "./utils/filters.js";
  import {Sign} from "./api/api_statistic";
  import {mapState, mapActions} from 'vuex';
  /**
   * 设置本地存储
   * */
  Vue.use(vStorage, {
    storageKeyPrefix: 'xst-'
  });

  /**
   * 时间格式化插件-过滤器
   * */
  moment.locale('zh-cn')
  Vue.use(vueMoment);

  /**
   * filter全局注册
   * */
  Vue.filter('num2MMM', num2MMM);
  Vue.filter('uppercase', uppercase);
  Vue.filter('addImgPrefix', addImgPrefix);

  /**
   * vue-resource 配置
   * */
  Vue.use(VueResource);
  Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
  Vue.http.headers.common['Content-Type'] = 'application/json; charset=utf-8';

  export default {
    store,
    data: function () {
      return {
        clear: '',
        musicList: API.musicList,
      }
    },
    computed: {
      ...mapState({
        isPlaying: 'isPlaying',
        isLoading: 'isLoading',
        currentMusicInfo: 'currentMusicInfo',
        MusicHandle: 'handle',
        duration: 'duration',
        rightNow: 'rightNow',
        rightPercent: 'rightPercent',
        canAutoPlay: 'canAutoPlay',
      }),
    },
    methods: {
      //vuex
      ...mapActions({
        setLoginState: 'setLoginState',
        setPlayingStatus: 'setPlayingStatus',
        setMusicDuration: 'setMusicDuration',
        setMusicRightNow: 'setMusicRightNow',
        setCurrentMusic: 'setCurrentMusic',
        setLoadingStatus: 'setLoadingStatus',
        setCanAutoPlay: 'setCanAutoPlay',
      }),
      /**
       * music的控制在App.vue中,方便全局管理
       * 只是展示与事件触发,通过vuex操作
       * */
      playCtrl(){
        let _this = this;
        _this.setPlayingStatus(!_this.isPlaying);
      },
      preCtrl(){
        let _this = this;
        let currentid = _this.musicList.indexOf(_this.currentMusicInfo);
        let index;
        if (currentid !== 0) {
          index = currentid - 1;
        } else {
          index = _this.musicList.length - 1;
        }
        _this.indexCtrl(index);
      },
      nextCtrl(){
        let _this = this;
        let currentid = _this.musicList.indexOf(_this.currentMusicInfo);
        let index;
        if (currentid !== (_this.musicList.length - 1)) {
          index = currentid + 1;
        } else {
          index = 0;
        }
        _this.indexCtrl(index);
      },
      // 从第几个开始
      indexCtrl(index){
        let _this = this;
        _this._ended();
        _this.setCurrentMusic(_this.musicList[index]);
        _this._beforeStart();
        _this._start();
        _this.setPlayingStatus(true);
      },
      _init(){
        let _this = this;
        _this.setCurrentMusic(_this.musicList[0]);
        _this._beforeStart();
        //_this._start();
      },
      //start之前的准备工作,比如清除上一个的播放数据
      _beforeStart(){
        let _this = this;
        //监听播放完毕状态
        _this.MusicHandle.addEventListener('ended', function () {
          _this._ended();
          _this.nextCtrl();
          //console.log("ended")
        });
        //监听加载状态
        _this.MusicHandle.addEventListener('canplay', function () {
          console.log("music-canplay")
          _this.setLoadingStatus(false);
          _this.setMusicDuration(_this.MusicHandle.duration)
        });
        //开始请求数据
        _this.MusicHandle.addEventListener('loadstart', function () {
          console.log("music-loadstart")
          _this.setLoadingStatus(true);
        });
        //开始请求数据
        _this.MusicHandle.addEventListener('canplaythrough', function () {
          console.log("music-canplaythrough")
          _this.setLoadingStatus(false);
        });
      },
      _start(){
        let _this = this;
        _this.clear = setInterval(function () {
          _this.setMusicRightNow(_this.MusicHandle.currentTime);
        }, 500)
      },
      _ended(){
        let _this = this;
        clearInterval(_this.clear);
        _this.setPlayingStatus(false);
        _this.setMusicRightNow(0);
      },
      setAutoPlay(){
        let _this = this;
        _this.setCanAutoPlay(!_this.canAutoPlay)
        _this.$localStorage.$set('canAutoPlay', {
          autoPlay: _this.canAutoPlay
        });
      },

    },
    created: function () {
      const _this = this;
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






      /**
       * music 初始化
       * */
      if (!_this.MusicHandle) {
        _this._init()
      }

      /**
       * 进入检查是否有token,是否能直接登录
       * */
      if (!!_this.$localStorage.authorization) {
        let authorization = _this.$localStorage.authorization;
        let time = parseInt(authorization.time);
        if ((new Date().getTime() - time) < 1000 * 60 * 60 * 2) {
          //token有效,能进入
          _this.setLoginState(true);
          // 设置请求的token
          Vue.http.headers.common['authorization'] = "token " + authorization.token;
        }
      }


      /**
       * music 播放的控制区
       * */
      $(document).on("Music_PlayCtrl", function (event, params) {
        _this.playCtrl();
      });
      $(document).on("Music_PreCtrl", function (event, params) {
        _this.preCtrl();
      });
      $(document).on("Music_NextCtrl", function (event, params) {
        _this.nextCtrl();
      });
      $(document).on("Music_SetAutoPlay", function (event, params) {
        _this.setAutoPlay();
      });

      /**
       * music 播放的控制区
       * 是否自动播放
       * 进入初始化
       * */
      if (!!_this.$localStorage.canAutoPlay && !_this.isPlaying) {
        _this.setCanAutoPlay(_this.$localStorage.canAutoPlay.autoPlay);
        _this.setPlayingStatus(_this.$localStorage.canAutoPlay.autoPlay);
      }

    },
    mounted: function () {
      //更改loading状态,，隐藏index中的loading画面
      window.hideLoadingPage();

    },
    components: {
      //小组件挂载集中挂载
      blogNav,
      socialInfo,
      doLogout,
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
      /*padding-left: 45px;*/
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
