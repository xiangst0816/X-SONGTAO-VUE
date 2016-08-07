/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<!--内容区-->
<template>
    <div class="comments animated fadeIn">
        <!--column title-->
        <h3 class="title">
            <i class="fa fa-fw fa-lg fa-comments"></i> 评论管理 / <span class="blue">COMMENTS</span>
        </h3>
        <!--增加-->
        <section class="commentList">

            <!--筛选-->
            <section class="commentList--dropdown">
                <div class="commentList--dropdown-e">
                    <label class="commentList--dropdown-label">子主评论筛选: </label>
                    <div class="dropdown commentList--dropdown-div">
                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                            {{btn_filter_mainComm}}
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li @click="Condition_main=0,btn_filter_mainComm='全部'"><a>全部</a></li>
                            <li @click="Condition_main=1,btn_filter_mainComm='主评论'"><a>主评论</a></li>
                            <li @click="Condition_main=2,btn_filter_mainComm='子评论'"><a>子评论</a></li>
                        </ul>
                    </div>
                </div>
                <div class="commentList--dropdown-e">
                    <label class="commentList--dropdown-label">回复筛选: </label>
                    <div class="dropdown commentList--dropdown-div">
                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                            {{btn_filter_reply}}
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li @click="Condition_reply=0,btn_filter_reply='全部'"><a>全部</a></li>
                            <li @click="Condition_reply=1,btn_filter_reply='未回复'"><a>未回复</a></li>
                            <li @click="Condition_reply=2,btn_filter_reply='已回复'"><a>已回复</a></li>
                        </ul>
                    </div>
                </div>
                <div class="commentList--dropdown-e">
                    <label class="commentList--dropdown-label">审核筛选: </label>
                    <div class="dropdown commentList--dropdown-div">
                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                            {{btn_filter_auth}}
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li @click="Condition_auth=0,btn_filter_auth='全部'"><a>全部</a></li>
                            <li @click="Condition_auth=1,btn_filter_auth='未审核'"><a>未审核</a></li>
                            <li @click="Condition_auth=2,btn_filter_auth='已审核'"><a>已审核</a></li>
                        </ul>
                    </div>
                </div>
                <button class="btn btn-info" @click="Condition_main=0,Condition_reply=0,Condition_auth=0,btn_filter_mainComm=btn_filter_reply=btn_filter_auth='全部'">
                    <i class="fa fa-refresh"></i>
                </button>
            </section>

            <!--评论-->
            <div class="comments__ask animated fadeIn"
                 v-for="item in resultList" track-by="$index">
                <div class="comments__ask__title">
                    <h3 v-link="{ name: 'article',params: { articleId: item.article_id._id },activeClass: 'active'}"><span>原文: </span><span>{{item.article_id.title}}</span></h3>
                    <div class="comments__ask__title--btns">
                        <button @click="changeAuthState(item._id),item.state=!item.state;" class="btn btn-default btn-sm" :class="{true:'btn-success',false:'btn-warning'}[!item.state]">
                            <i class="fa" :class="{true:'fa-circle-o',false:'fa-ban'}[!item.state]"></i>
                        </button>
                        <button v-if="!item.isIReplied" class="btn btn-default btn-sm" @click="comment(item)" data-toggle="modal" data-target="#addComm">
                            <i class="fa fa-pencil"></i>
                        </button>
                        <button class="btn btn-default btn-sm btn-danger" @click="delbtn(item)" data-toggle="modal" data-target="#delComm">
                            <i class="fa fa-bitbucket"></i>
                        </button>
                    </div>
                </div>
                <div class="comments__ask__header">
                    <span class="name">{{item.name}}</span>
                    &ensp;·&ensp;
                    <span>{{item.time}}</span>
                    &ensp;·&ensp;
                    <span>
                     <a href="mailto:{{item.email}}">{{item.email}}</a>
                </span>
                    &ensp;·&ensp;
                    <span v-if="item.article_id._id.toString() === item.pre_id.toString()" class="alreadyReplied">主评论</span>
                    <span v-if="item.article_id._id.toString() !== item.pre_id.toString()" class="alreadyReplied">子评论</span>
                    <span v-if="!item.isIReplied">&ensp;·&ensp; <span class="reply">未回复</span></span>
                    <span v-if="!!item.isIReplied">&ensp;·&ensp; <span class="alreadyReplied">已回复</span></span>

                    &ensp;·&ensp;
                    <span v-if="!item.state" class="no-check">审核未通过</span>
                    <span v-if="!!item.state" class="checked">审核通过</span>
                </div>
                <div class="comments__ask__content">
                    <span>{{item.content}}</span>
                </div>
            </div>

            <!--无数据提示-->
            <!--<div class="nodata  animated fadeIn" v-if="!commentArr.length && isLoaded">-->
            <!--<div class="logo-left-box">-->
            <!--<h2 class="logo"><span class="blue">X</span><span class="white">-SONGTAO</span></h2>-->
            <!--<h3 class="blue notice">提示!</h3>-->
            <!--<p class="white">没有找到数据,~~~~(>_<)~~~~</p>-->
            <!--</div>-->
            <!--&lt;!&ndash;<img src="./web/img/employee.svg" alt="employee">&ndash;&gt;-->
            <!--</div>-->

            <!--加载提示-->
            <!--<div class="nodata  animated fadeIn" v-if="!isLoaded">-->
            <!--<div class="logo-left-box">-->
            <!--<h2 class="logo"><span class="blue">X</span><span class="white">-SONGTAO</span></h2>-->
            <!--<h3 class="blue notice">提示!</h3>-->
            <!--<p class="white">正在加载,O(∩_∩)O稍等~</p>-->
            <!--</div>-->
            <!--&lt;!&ndash;<img src="./web/img/employee.svg" alt="employee">&ndash;&gt;-->
            <!--</div>-->

        </section>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .comments {
        height: 100%;
        .title {
            width: 100%;
            color: #fff;
            margin-bottom: 20px;
            text-align: left;
        }

        .commentList {
            .commentList--dropdown {
                @include display-flex;
                @include justify-content(space-between);
                @include align-items(center);
                margin-bottom: 10px;
                .commentList--dropdown-e {
                    @include display-flex;
                    @include justify-content(flex-end);
                    @include align-items(center);

                    .commentList--dropdown-label {
                        color: $base-theme-color;
                        //margin-right: 10px;
                        font-size: 14px;
                        //margin-left:10px;
                    }
                    .commentList--dropdown-div {
                        margin-left: 10px;
                        button {
                            width: 120px;
                        }
                        .dropdown-menu {
                            width: 120px;
                            min-width: auto;
                            li {
                                text-align: center;
                                a {
                                    cursor: pointer;
                                }
                            }

                        }

                    }
                }

            }
            .comments__ask {
                box-sizing: content-box;
                padding: 10px;
                margin-bottom: 5px;
                border-bottom: 1px solid #6f6f6f;
                position: relative;
                &:nth-last-child(1) {
                    border-bottom: 1px solid transparent;
                }
                .comments__ask__title {
                    color: #fff;
                    margin-bottom: 10px;
                    @include display-flex;
                    @include justify-content(space-between);
                    @include align-items(center);
                    h3 {
                        cursor: pointer;
                        color: #fff;
                        border-left: 4px solid $base-theme-color;
                        padding-left: 10px;
                        transition: all ease 200ms;
                        max-width: 580px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 0;

                        &:hover {
                            color: $base-theme-color;

                        }
                    }
                    .comments__ask__title--btns {
                        button {

                        }
                    }

                }
                .comments__ask__header {
                    font-size: 14px;
                    line-height: 130%;
                    padding: 5px 0;
                    color: #ececec;
                    //cursor: pointer;
                    .name {
                        font-size: 18px;
                        color: $base-theme-color;
                    }
                    .reply, .no-check {
                        color: $base-theme-color-o;
                        //transition: all ease 200ms;
                    }
                    .alreadyReplied, .checked {
                        color: green;
                    }
                    a {
                        color: #ececec;
                    }
                }
                .comments__ask__content {
                    font-size: 14px;
                    line-height: 150%;
                    padding: 5px 0;
                    color: #fff;
                    //cursor: pointer;
                }
            }
        }

    }

    .comment--replyBox {

        font-size: 14px;
        .comment--replyBox-body {
            .comment--replyBox--textarea {
                textarea {
                    overflow-x: hidden;
                    resize: vertical;
                }

            }
        }

    }

</style>
<script>
    import Vue from "vue";
    import API from "../config";
    import {
            GetCommentToArticleList,
            ChangeCommentAuthState,
    } from "../api/api_comment";

    import "bootstrap/js/dropdown"

    import copyright from '../components/copyright.vue'

    module.exports = {
        data: function () {
            return {
                commentList: [],
                btn_filter_mainComm: '全部',
                Condition_main: 0,
                btn_filter_reply: '全部',
                Condition_reply: 0,
                btn_filter_auth: '全部',
                Condition_auth: 0,
            }
        },
        computed: {
            resultList: function () {
                const scope = this;
                let _tmp = [];
                let source = scope.commentList;

                for (let data of source) {
                    (filter_main(data) && filter_reply(data) && filter_auth(data)) && _tmp.push(data);
                }

                //子主评论筛选
                function filter_main(data) {
                    switch (parseInt(scope.Condition_main)) {
                        case 0:
                            return true;
                            break;
                            //主评论
                        case 1:
                            return data.article_id._id.toString() === data.pre_id.toString();
                            break;
                            //子评论
                        case 2:
                            return data.article_id._id.toString() !== data.pre_id.toString();
                            break;
                        default:
                            return true;
                            break;
                    }
                }
                //是否回复筛选
                function filter_reply(data) {
                    switch (parseInt(scope.Condition_reply)) {
                        case 0:
                            return true;
                            break;
                            //主评论
                        case 1:
                            return !data.isIReplied;
                            break;
                            //子评论
                        case 2:
                            return !!data.isIReplied;
                            break;
                        default:
                            return true;
                            break;
                    }
                }
                //是否审核筛选
                function filter_auth(data) {
                    switch (parseInt(scope.Condition_auth)) {
                        case 0:
                            return true;
                            break;
                            //主评论
                        case 1:
                            return !data.state;
                            break;
                            //子评论
                        case 2:
                            return !!data.state;
                            break;
                        default:
                            return true;
                            break;
                    }
                }

                return _tmp;
            }
        },
        methods: {
            changeAuthState: function (_id) {
                ChangeCommentAuthState({
                    _id: _id
                }).then((data)=> {
                    console.log("状态改变成功")
                }, (error)=> {
                    console.log("状态改变" + error)
                })
            }
        },
        created: function () {
            const scope = this;

            /**
             * 获得评论列表
             * */
            GetCommentToArticleList().then((data)=> {
                scope.commentList = data;
                console.log(data)
            }, (err)=> {
                alert(err)
            });






        },
        destroyed: function () {
        },
        components: {
            copyright
        },
//        vuex: {
//            getters: {
//                isShowMyWords: state=>state.isShowMyWords,
//            }
//
//        }
    }
</script>