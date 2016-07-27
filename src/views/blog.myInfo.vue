/**
* Created by xiangsongtao on 16/7/24.
* Description: 博客页, 我的信息
*/
<template>
    <div class="myinfo" :class="{ 'active': isShowMyWords}">
        <!--我的信息列表-->
        <section class="detail text-center">
            <div class="imgBox" @click="isShowMyWords=!isShowMyWords">
                <img class="img-circle" src="http://xiangsongtao.com/uploads/1468162904000.jpg">
            </div>
            <p class="name text-shadow">
                X-SONGTAO
            </p>
            <p class="job text-shadow">
                前端工程师&&Nodejs工程师
            </p>
            <p class="address text-shadow">
                <span class="fa fa-map-marker"></span> <span>江苏-苏州</span>
            </p>
            <p class="motto text-shadow">
                <i class="fa fa-coffee"></i> <span>全栈开发这个博客不简单好不好~</span>
            </p>
            <ul class="tabs text-shadow">
                <li class="active">最近更新</li>
                <li>时光机</li>
                <li>标签库</li>
            </ul>
            <div class="follow text-shadow">
                Follow
            </div>

            <ul class="SNS">
                <li><i class="fa fa-qq hidden-xs"></i></li>
                <li><i class="fa fa-weixin hidden-xs"></i></li>
                <li><i class="fa fa-weibo hidden-xs"></i></li>
                <li><i class="fa fa-tencent-weibo hidden-xs"></i></li>
            </ul>
        </section>
        <!--我的称述-->
        <section class="mywords visuallyhidden">
            <article>
                <p>我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述
                    我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述
                    我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述</p>
                <p>我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述
                    我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述
                    我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述</p>
                <p>我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述
                    我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述
                    我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述我的称述</p>
            </article>
        </section>
    </div>
</template>
<style lang="scss">
    @import "../theme/theme.scss";

    .myinfo {
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        transition: width ease 500ms;
        .detail {
            width: 350px;;
            .imgBox {
                width: 160px;
                height: 160px;
                margin: 0 auto;
                img {
                    width: 100%;
                    height: 100%;
                    box-shadow: 0 3px 12px #000;
                }
            }
            .name {
                color: #fff;
                margin: 20px 0;
                width: 100%;
                font-size: 30px;
                line-height: 100%;
                font-weight: bold;
            }
            .job {
                color: #fff;
                width: 100%;
                font-size: 18px;
                line-height: 100%;
                margin: 20px 0;
            }
            .address {
                color: #fff;
                width: 100%;
                font-size: 14px;
                line-height: 100%;
                margin: 20px 0;
            }
            .motto {
                /*line-height: 170%;*/
                font-size: 14px;
                color: #fff;
                width: 100%;
                line-height: 100%;
                margin: 20px 0;
            }
            .tabs {
                margin: 25px 0;
                padding: 0;
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                & > li {
                    padding: 5px 0;
                    font-size: 14px;
                    /*margin: 0 3px;*/
                    text-align: center;
                    width: 68px;
                    position: relative;
                    line-height: 100%;
                    cursor: pointer;
                    box-sizing: border-box;
                    transition: .2s ease;
                }
                & > .active {
                    border: 1px solid #38b7ea;
                    background: transparent;
                    color: #38b7ea;

                    border-radius: 5px;
                }
                & :hover {
                    color: #38b7ea;
                }
            }
            .follow {
                background: #38b7ea;
                color: #fff;
                text-decoration: none;
                width: 160px;
                margin: 15px auto 10px;
                background: #38b7ea;
                color: #fff;
                border-radius: 20px;
                text-decoration: none;
                height: 40px;
                font-size: 16px;
                line-height: 40px;
                transition: .2s ease;
                display: block;
                cursor: pointer;
                text-align: center;
                &:hover {
                    text-decoration: none;
                    background: #49c8fb !important;
                    color: #fff;
                }

            }
            .SNS {
                margin: 0;
                list-style: none;
                display: flex;
                font-size: 20px;
                width: 100%;
                padding: 5px 0 0 0;
                justify-content: center;
                align-items: center;

                & > li {
                    margin: 0 8px;
                    cursor: pointer;
                    transition: .2s ease;
                    &:hover {
                        color: #38b7ea;
                    }
                }

            }

        }
        .mywords {

            align-items: center;
            width: 0;
            opacity: 0;
            transition: width .5s ease, opacity .2s ease;
            transform: translate3d(0, 0, 0);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible;
            text-align: left;
            font-size: 16px;
            line-height: 22px;
            max-width: 720px;
            color: #fff;
            opacity: 0;
            user-select: none;
            -webkit-user-select: none;
            position: relative;
            box-sizing: border-box;
        }
        &.active {
            width: 100%;

            @include media(">desktop") {
                .mywords {
                    width: 720px;
                    opacity: 1;
                    overflow: inherit;
                    transition: width .5s ease, opacity .2s ease .5s;
                }
            }

        }
    }

    /*内容区*/


</style>
<script>
    module.exports = {
        data: function () {
            return {
                isShowMyWords: false
            }
        },
        methods: {},
        ready: function () {
        },
        destroyed: function () {
        }
    }
</script>