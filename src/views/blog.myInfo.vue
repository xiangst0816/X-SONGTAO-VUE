/**
* Created by xiangsongtao on 16/7/24.
* Description: 博客页, 我的信息
*/
<template>
    <div class="myinfo" :class="{ 'active': isShowMyWords}">
        <!--我的信息列表-->
        <section class="detail text-center">
            <section class="detail__1">
                <section class="detail__imgBox" @click="setMyWordStatus">
                    <img class="img-circle" :src="myinfo.img_url | addImgPrefix">
                </section>
                <section class="detail__info">
                    <p class="name text-shadow"> {{myinfo.full_name}}</p>
                    <p class="job text-shadow"> {{myinfo.position}}</p>
                    <p class="address text-shadow">
                        <span class="fa fa-map-marker"></span> <span>{{myinfo.address}}</span>
                    </p>
                    <p class="motto text-shadow">
                        <i class="fa fa-coffee"></i> <span>{{myinfo.motto}}</span>
                    </p>
                </section>
            </section>
            <section class="detail__2">
                <section class="detail__nav">
                    <ul class="tabs text-shadow">
                        <li><a v-link="{ name: 'artList',query: { listType: 'latest' },activeClass: 'active'}">文章列表</a></li>
                        <li><a v-link="{ name: 'historyList',activeClass: 'active'}">时光机</a></li>
                        <li><a v-link="{ name: 'tagList',activeClass: 'active'}">标签库</a></li>
                    </ul>
                </section>
                <section class="detail__sns">
                    <div class="github text-shadow">
                        Follow
                    </div>
                    <ul class="SNS">
                        <li><i class="fa fa-qq"></i></li>
                        <li><i class="fa fa-weixin"></i></li>
                        <li><i class="fa fa-weibo"></i></li>
                        <li><i class="fa fa-tencent-weibo"></i></li>
                    </ul>
                </section>
            </section>
        </section>
        <!--我的称述-->
        <section class="mywords visuallyhidden">
            <article>
                {{{myinfo.personal_state}}}
            </article>
        </section>
    </div>
</template>
<style lang="scss">
    @import "../theme/theme.scss";

    .myinfo {

        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;

        .detail {
            .detail__1 {
                .detail__imgBox {
                    width: 160px;
                    height: 160px;
                    margin: 0 auto;
                    img {
                        width: 160px;
                        height: 160px;
                        box-shadow: 0 3px 12px #000;
                    }
                }
                .detail__info {
                    overflow: hidden;
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
                        margin: 10px 0;
                    }
                    .motto {
                        font-size: 14px;
                        color: #fff;
                        width: 100%;
                        line-height: 230%;
                        margin: 0 0;
                    }
                }
            }
            .detail__2 {
                .detail__nav {
                    .tabs {

                        padding: 0;
                        list-style: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        & > li {

                            margin: 0 3px;

                            width: 68px;
                            position: relative;

                            cursor: pointer;

                            box-sizing: border-box;
                            a {
                                display: block;
                                width: 68px;
                                line-height: 100%;
                                box-sizing: border-box;
                                transition: .2s ease;
                                text-align: center;
                                font-size: 14px;
                                padding: 5px 0;
                                text-decoration: none;
                                color: inherit;
                                border: 1px solid transparent;
                            }
                            & > .active {
                                border: 1px solid #38b7ea;
                                background: transparent;
                                color: #38b7ea;
                                border-radius: 5px;
                            }
                        }

                        & :hover {
                            color: #38b7ea;
                        }
                    }
                }
                .detail__sns {
                    .github {
                        background: #38b7ea;
                        color: #fff;
                        text-decoration: none;
                        width: 160px;

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
            }
        }
        .mywords {
            align-items: center;
            transform: translate3d(0, 0, 0);
            display: flex;
            justify-content: center;
            overflow: visible;
            text-align: left;
            font-size: 16px;
            line-height: 22px;
            max-width: 720px;
            color: #fff;
            user-select: none;
            -webkit-user-select: none;
            position: relative;
            box-sizing: border-box;
        }
        &.active {

            @include media(">desktop") {
                width: 100%;
                .mywords {
                    width: 720px;
                    opacity: 1;
                    overflow: inherit;
                    transition: width .5s ease, opacity .2s ease .5s;
                }
            }
            @include media("<=desktop") {
                height: 700px;
                position: relative;
                .detail {
                }
                .mywords {
                    height: 300px;
                    width: 100%;
                    overflow: inherit;
                    opacity: 1;
                    transition: height .5s ease, opacity .2s ease .5s;
                }
            }
        }
    }

    /*响应式处理*/
    @include media(">desktop") {
        .myinfo {
            width: 33.33%;
            z-index: 10;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            position: fixed;
            transition: width ease 500ms;
            .detail {
                width: 350px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .detail__1 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .detail__imgBox {
                        width: 100%;
                    }
                    .detail__info {
                        width: 100%;
                    }
                }
                .detail__2 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .detail__nav {
                        width: 100%;
                        .tabs {
                            margin: 15px 0 25px;
                        }
                    }
                    .detail__sns {
                        width: 265px;
                    }
                    .detail__sns {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .github {
                            margin: 0 auto 15px;
                        }
                        .SNS {
                            padding: 0;
                        }
                    }
                }
            }
            .mywords {
                width: 0;
                align-items: center;
                opacity: 0;
                transition: width .5s ease, opacity .2s ease;
            }
        }
    }

    @include media("<=desktop") {
        .myinfo {
            width: 100%;
            height: 270px;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;

            transition: height ease 500ms;
            .detail {
                width: 720px;
                height: 270px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                .detail__1 {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    .detail__imgBox {
                        width: 225px;
                    }
                    .detail__info {
                        width: 265px;
                    }
                }
                .detail__2 {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin: 25px 0 0;
                    .detail__nav {
                        width: 225px;
                        .tabs {
                            margin: 0;
                        }
                    }
                    .detail__sns {
                        width: 265px;
                    }
                    .detail__sns {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        .github {
                            margin: 0;
                            display: none;
                        }
                        .SNS {
                            padding: 0;
                        }
                    }
                }
            }
            .mywords {
                align-items: flex-start;
                height: 0;
                overflow: hidden;
                width: 720px;
                opacity: 0;
                transition: height .5s ease, opacity .2s ease;
            }

        }
    }
</style>
<script>

    import Vue from "vue";
    import myinfo from "../api/myinfo.js";
    import {getMyInfo,setMyWordStatus} from '../vuex/actions'
    import {addImgPrefix} from "../utils/filters.js";
    Vue.filter('addImgPrefix', addImgPrefix);

    module.exports = {
        replace: true,
        data: function () {
            return {
//                isShowMyWords: false
            }
        },
        vuex: {
            getters: {
                isShowMyWords: state=>state.isShowMyWords,
                myinfo: ({m_myinfo}) => m_myinfo.get
            },
            actions: {
                getMyInfo,
                setMyWordStatus
            }
        },
        created: function () {
            this.getMyInfo()
        },
        destroyed: function () {
        }
    }
</script>