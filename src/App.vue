<!--内容区-->
<template>
    <div class="app__content">
        <!--导航条-->
        <blog-nav></blog-nav>
        <!-- 路由外链 -->
        <router-view></router-view>
        <!--qq,微信弹出层-->
        <social-info></social-info>
    </div>
</template>

<script>
    import Vue from "vue";
    import blogNav from "./views/blog.nav";
    import socialInfo from "./components/socialInfo.vue";
    import store from './vuex/store'

    /**
     * 设置本地存储
     * */
    import vStorage from './utils/vStorage.js'
    Vue.use(vStorage,{
        storageKeyPrefix:'xst-'
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

    /**
     * 路由相关 路由规则配置
     * */
    import routerConfig from "./router.js";
    routerConfig();


    module.exports = {
        replace: false,
        data: function () {
            return {
//            authenticating: false,
//            isIndex:true
            }
        },
        components: {
            blogNav,socialInfo
        },
        store
    }
</script>

<style lang="scss">
    @import "./theme/theme.scss";

    html {
        padding: 0;
        min-height: 100%;
        /*不要滚动条*/
        & ::-webkit-scrollbar {
            display: none;
        }
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
        background: url(./assets/demo-13.jpg) no-repeat center center/cover;
        background-color:#eee;
        background-attachment: fixed;
        //background: transparent radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
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

    /*内容区*/
    .app__content {
        width: 100%;
    }
</style>
