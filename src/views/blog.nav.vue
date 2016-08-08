<!--导航条-->
<template>
    <div class="blogNav">
        <nav class="nav__top">
            <a class="nav__item" data-toggle="tooltip" data-placement="right" title="X-SONGTAO">
                <span class="siteLogo"></span>
            </a>
            <a class="nav__item" v-link="{ name: 'index',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="首页">
                <i class="fa fa-home fa-fw fa-lg"></i>
            </a>
            <a class="nav__item" v-link="{ name: 'blog',params: { listType: 'latest' },activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="博客">
                <i class="fa fa-map-signs fa-fw fa-lg"></i>
            </a>
            <!--<a class="nav__item" v-link="{ name: 'article',params: { articleId: '57826e945c21c1dd04b4ad4d' },activeClass: 'active'}">-->
            <!--<i class="fa fa-bold fa-fw fa-lg"></i>-->
            <!--&lt;!&ndash;<span class="visible-hg">博客</span>&ndash;&gt;-->
            <!--</a>-->
        </nav>
        <nav class="nav__bottom">
            <a v-if="isLogin" class="nav__item" v-link="{ name: 'admin-myinfo',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="我的资料">
                <i class="fa fa-user fa-lg"></i>
            </a>
            <a v-if="isLogin" class="nav__item" v-link="{ name: 'admin-tag',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="标签管理">
                <i class="fa fa-tag fa-lg"></i>
            </a>
            <a v-if="isLogin" class="nav__item" v-link="{ name: 'admin-articleManager',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="文章管理">
                <i class="fa fa-list fa-lg"></i>
            </a>
            <a v-if="isLogin" class="nav__item" v-link="{ name: 'admin-commentList',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="文章评论">
                <i class="fa fa-comments fa-lg"></i>
            </a>
            <a v-if="isLogin" class="nav__item" data-toggle="tooltip" data-placement="right" title="退出" @click="doLoginout()">
                <i class="fa fa-sign-out fa-lg"></i>
            </a>
            <a v-if="!isLogin" class="nav__item" v-link="{ name: 'login',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="登录">
                <i class="fa fa-sign-in fa-lg"></i>
            </a>
        </nav>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    //default for desktop
    .blogNav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        transition: background-color ease 400ms;

        background-color: rgba(0, 0, 0, .8);
        &:hover {
            color: rgba(256, 256, 256, 0.8);
            background-color: rgba(0, 0, 0, .9);
            text-shadow: 0px 1px 1px #3b3b3b;
        }
        /*导航上面结构*/
        .nav__top {
        }
        /*导航下面结构*/
        .nav__bottom {
        }
        a {
            color: rgba(256, 256, 256, 0.4);
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
        }
        .nav__item {
            text-align: center;
            display: flex;
            justify-content: flex-start;
            align-items: center;;
            width: 100%;
            height: 45px;
            line-height: 45px;
            float: left;
            cursor: pointer;
            .siteLogo{
                display: inline-block;
                height: 45px;
                width: 45px;
                line-height: 45px;
                font-size: 30px;
                background: rgba(0, 0, 0, 0.9) url(../assets/pleasehole-img.png) no-repeat center center/30px auto;
            }

            i {
                font-size: 24px;
                width: 45px;
                height: 45px;
                display: flex;
                justify-content: center;
                align-items: center;;
            }
            span {
                display: none;
                width: 55px;
                text-align: left;
                font-size: 16px;
            }
            &.active {
                color: $base-theme-color !important;
            }
            &:hover {
                color: $base-theme-color;
            }
        }

    }

    /*响应式*/
    @include media("<=desktop_small") {
        .blogNav {
            width: 100%;
            height: 45px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;;
            .nav__item {
                width: 45px;
            }
        }
    }

    @include media(">desktop_small") {
        .blogNav {
            width: 45px;
            height: 100%;
        }
    }

    @include media(">desktop_large") {
        .blogNav {
            /*width: 100px;*/
            height: 100%;
        }
    }

</style>
<script>
//    import 'bootstrap/js/tooltip.js'
    import {setLoginState} from '../vuex/actions'
    export default{
//        data(){
//            return {
//                msg: 'hello vue'
//            }
//        }
        methods: {
            doLoginout:function () {
                $('#logout').modal()



            }
        },
        ready: function () {
            console.log('isLogin')
            console.log(this.isLogin)
            tooltip();
            function tooltip() {
                let clientWidth = parseInt(document.documentElement.clientWidth);
                if (clientWidth < 768) {

                } else if (clientWidth < 991 && clientWidth > 768) {
                    $('[data-toggle="tooltip"]').tooltip({
                        trigger: 'hover',
                        placement: 'bottom'
                    });
                    return true;
                } else {
                    $('[data-toggle="tooltip"]').tooltip({
                        trigger: 'hover',
                        placement: 'right'
                    });
                    return true;
                }

            }

        },
        components: {
//            tooltip
        },
        vuex: {
            getters: {
                isLogin: state=>state.isLogin,
            }
        }
    }


</script>
