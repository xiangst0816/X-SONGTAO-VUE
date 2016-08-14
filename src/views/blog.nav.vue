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
            <a class="nav__item" v-link="{ name: 'music',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="音乐">
                <i class="fa fa-music fa-fw fa-lg"></i>
                <section class="rightBottomStatus">
                    <i class="fa fa-lg" :class="{true:'fa-pause-circle-o',false:' fa-play-circle-o playing'}[!isPlaying]"></i>
                </section>
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
            <!--切换背景-->
            <a class="nav__item fa-stack fa-lg" data-toggle="tooltip" data-placement="right" title="切换背景" @click="changeBG()">
                <i class="fa fa-photo fa-fw fa-lg"></i>
                <section class="rightBottomStatus">
                    <i class="fa fa-lg fa-refresh" :class="{true:'',false:'fa-spin'}[!isChangeBG]"></i>
                </section>
            </a>
            <a v-if="isLogin" class="nav__item animated fadeIn hidden-xs" data-toggle="tooltip" data-placement="right" title="退出" @click="doLoginout()">
                <i class="fa fa-sign-out fa-lg"></i>
            </a>
            <a v-if="!isLogin" class="nav__item hidden-xs" v-link="{ name: 'login',activeClass: 'active'}" data-toggle="tooltip" data-placement="right" title="登录">
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
        /*transition: all ease 400ms;*/

        background-color: rgba(0, 0, 0, .8);
        transition: background-color ease 400ms;

        &:hover {
            .a {
                color: rgba(256, 256, 256, 0.8);
            }
            background-color: rgba(0, 0, 0, 0.9);
            text-shadow: 0px 1px 1px #3b3b3b;
        }
        /*导航上面结构*/
        .nav__top {

        }
        /*导航下面结构*/
        .nav__bottom {

        }
        a {
            color: #696969;
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
            position: relative;
            .siteLogo {
                display: inline-block;
                height: 45px;
                width: 45px;
                line-height: 45px;
                font-size: 30px;
                background: rgba(0, 0, 0, 0.9) url(../assets/pleasehole-img.png) no-repeat center center/28px auto;
            }

            &>i {
                font-size: 22px;
                width: 45px;
                height: 45px;
                display: flex;
                justify-content: center;
                align-items: center;;
            }
            &>span {
                display: none;
                width: 55px;
                text-align: left;
                font-size: 16px;
            }
            &.active {
                color: $base-theme-color !important;
                .rightBottomStatus{
                    color:inherit;
                }
            }
            &:hover {
                color: $base-theme-color;
                .rightBottomStatus{
                    color:inherit;
                }
            }
            .rightBottomStatus{
                display: block;
                position: absolute;
                font-size:14px;
                right:5px;
                bottom:3px;;
                width:18px;
                height:18px;
                color:#999;
                i{
                    display: block;
                    position: absolute;
                    width:18px;
                    height:18px;
                    overflow: hidden;
                    font-size:18px;
                    bottom: 0;
                    left:0;
                }
                .fa{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .playing{
                    //color:$base-theme-color;
                }
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
            /*导航上面结构*/
            .nav__top {
                width:100%;
            }
            /*导航下面结构*/
            .nav__bottom {
                width:100%;
            }
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
    import API from '../config'
    export default{
        data(){
            return {
                isChangeBG: false,
                bgIndexNow: '',
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
                    }, 500);
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
                    let imageList = API.imageList;//图片列表
                    let imageCount = imageList.length;
                    return imageList[selectFrom(0, imageCount - 1)]
                }

                //返回 v_from 和 v_to 之间的随机整数
                function selectFrom(v_from, v_to) {
                    let range = v_to - v_from + 1;
                    let selected = Math.floor(Math.random() * range + v_from);
                    if (selected === parseInt(scope.bgIndexNow)) {
//                        console.log('和上一个相同,再去随机取值')
                        return selectFrom(v_from, v_to);
                    } else {
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
                isPlaying: state=>state.isPlaying,
            }
        }
    }


</script>
