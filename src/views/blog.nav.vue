<!--导航条-->
<template>
    <div class="blogNav">
        <nav class="nav__top">
            <a class="nav__item" @click="clearSessionStorage()" data-toggle="tooltip" data-placement="right" title="SongTao">
                <span class="siteLogo"></span>
            </a>
            <a class="nav__item" v-link="{ name: 'index',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="首页">
                <i class="fa fa-home fa-fw fa-lg"></i>
            </a>
            <a class="nav__item" v-link="{ name: 'blog',params: { listType: 'latest' },activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="博客">
                <i class="fa fa-map-signs fa-fw fa-lg"></i>
            </a>
            <a class="nav__item" data-toggle="tooltip" data-placement="right" title="音乐">
                <i class="fa fa-music fa-fw fa-lg"></i>
            </a>
        </nav>
        <nav class="nav__bottom">
            <a v-if="isLogin" class="nav__item animated fadeIn hidden-xs" v-link="{ name: 'admin-myinfo',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="我的资料">
                <i class="fa fa-user fa-lg"></i>
            </a>
            <a v-if="isLogin" class="nav__item animated fadeIn hidden-xs" v-link="{ name: 'admin-tag',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="标签管理">
                <i class="fa fa-tag fa-lg"></i>
            </a>
            <a v-if="isLogin" class="nav__item animated fadeIn hidden-xs" v-link="{ name: 'admin-articleManager',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="文章管理">
                <i class="fa fa-list fa-lg"></i>
            </a>
            <a v-if="isLogin" class="nav__item animated fadeIn hidden-xs" v-link="{ name: 'admin-commentList',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="文章评论">
                <i class="fa fa-comments fa-lg"></i>
            </a>
            <a class="nav__item fa-stack fa-lg" data-toggle="tooltip" data-placement="right" title="切换背景" @click="changeBG()">
                <i class="fa fa-fw fa-lg" :class="{false:'fa-photo',true:'fa-refresh fa-spin'}[isChangeBG]"></i>
            </a>
            <a v-if="isLogin" class="nav__item animated fadeIn hidden-xs" data-toggle="tooltip" data-placement="right" title="退出" @click="doLoginout()">
                <i class="fa fa-sign-out fa-lg"></i>
            </a>
            <a v-if="!isLogin" class="nav__item animated fadeIn hidden-xs" v-link="{ name: 'login',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="登录">
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
        z-index: 1040;
        transition: all ease 400ms;

        background-color: rgba(0, 0, 0, .8);
        &:hover {
            .a {
                color: rgba(256, 256, 256, 0.8);
            }
            background-color: rgba(0, 0, 0, 1);
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
            .siteLogo {
                display: inline-block;
                height: 45px;
                width: 45px;
                line-height: 45px;
                font-size: 30px;
                background: rgba(0, 0, 0, 0.9) url(../assets/pleasehole-img.png) no-repeat center center/28px auto;
            }

            i {
                font-size: 22px;
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
        data(){
            return {
                isChangeBG: false,
                bgIndexNow:'',
            }
        },
        methods: {
            doLoginout: function () {
                $('#logout').modal()
            },
            clearSessionStorage(){
                this.$sessionStorage.$reset();
            },
            /**
             * 更换背景
             * */
            changeBG(){
                const scope = this;
                if (scope.isChangeBG) {
                    return false;
                }
                scope.isChangeBG = true;

                let $body = $('#app');
                let imgUrl = randomImage();
                loadImg(imgUrl, function () {
                    $body.css({
                        background: `url(${imgUrl}) no-repeat top left/cover fixed`
                    });
                    // 动画是500ms
                    setTimeout(function () {
                        scope.isChangeBG = false;
                    },500);
                });





                //加载资源,成功执行回调
                function loadImg(url, cb) {
                    if (/.png$|.jpg$|.gif$/.test(url)) {
                        let _TagObjs = new Image();
                        _TagObjs.src = url;
                        _TagObjs.onload = function () {
                            !!cb && cb();
                        };
                    }
                }

                //随机返回列表中的地址
                function randomImage() {
                    let imageSource = [
                            'http://xiangsongtao.com/bg_resource/1.jpg',
                            'http://xiangsongtao.com/bg_resource/2.jpg',
                            'http://xiangsongtao.com/bg_resource/3.jpg',
                            'http://xiangsongtao.com/bg_resource/4.jpg',
                            'http://xiangsongtao.com/bg_resource/5.jpg',
                            'http://xiangsongtao.com/bg_resource/6.jpg',
                            'http://xiangsongtao.com/bg_resource/7.jpg',
                    ];
                    let imageCount = imageSource.length;
                    return imageSource[selectFrom(0,imageCount-1)]
                }

                //返回 v_from 和 v_to 之间的随机整数
                function selectFrom(v_from, v_to) {
                    let range = v_to - v_from + 1;
                    let selected = Math.floor(Math.random() * range + v_from);
                    if(selected === parseInt(scope.bgIndexNow)){
//                        console.log('和上一个相同,再去随机取值')
                        return selectFrom(v_from, v_to);
                    }else{
//                        console.log("当前取值为:" + (selected+1))
                        scope.bgIndexNow = selected
                        return selected
                    }
                }
            },
        },
        ready: function () {

            /**
             * 工具提示栏
             * */
            let clientWidth = parseInt(document.documentElement.clientWidth);
            if (clientWidth <= 768) {

            } else if (clientWidth > 769 && clientWidth < 991) {
                $('[data-toggle="tooltip"]').tooltip({
                    trigger: 'hover',
                    placement: 'bottom'
                });
            } else if (clientWidth > 991) {
                $('[data-toggle="tooltip"]').tooltip({
                    trigger: 'hover',
                    placement: 'right'
                });
            }
        },
        vuex: {
            getters: {
                isLogin: state=>state.isLogin,
            }
        }
    }


</script>
