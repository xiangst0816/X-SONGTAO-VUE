/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="article-detail">
        <div class="paper" ng-class="{true:'loaded',false:'loading'}[!!article]">


            <section class="paper__header">

                <div class="ui breadcrumb">
                    <a class="section" v-link="{ name: 'index'}">首页</a>
                    <span class="divider">/</span>
                    <a class="section" v-link="{ name: 'blog'}">博客</a>
                    <span class="divider">/</span>
                    <div class="active section">文章</div>
                </div>


                <h1 ng-bind="article.title">IONIC开发IONIC开发IONIC开发</h1>
            </section>
            <section class="paper__info">
                <div class="paper__info--span">
                    <i class="fa fa-calendar"></i>
                    <span am-time-ago="article.publish_time">三天前</span>
                </div>
                <div class="paper__info--span">
                    <i class="fa fa-book"></i>
                    阅读数
                    <span ng-bind="article.read_num">23</span>
                </div>
                <div class="paper__info--span">
                    <i class="fa fa-comments"></i>
                    评论数
                    <span ng-bind="article.comment_num">223</span>
                </div>
                <div class="paper__info--span hidden-xs" ng-repeat="tag in article.tags">
                    <i class="fa fa-tag"></i> <span ng-bind="tag">标签1</span>
                </div>
                <div class="paper__info--span hidden-xs" ng-repeat="tag in article.tags">
                    <i class="fa fa-tag"></i> <span ng-bind="tag">标签1</span>
                </div>
                <div class="paper__info--span hidden-xs" ng-repeat="tag in article.tags">
                    <i class="fa fa-tag"></i> <span ng-bind="tag">标签1</span>
                </div>
            </section>
            <section class="paper__content">
                <div class="paper__content--inner markdown-body" ng-bind-html="article.content | toTrusted"></div>
                <!--page-->
            </section>
            <!--the end-->
            <!--<section class="paper__navBox">-->
            <!--<div class="paper__navBox__inner">-->
            <!--&lt;!&ndash;<div>-&#45;&#45; The End -&#45;&#45;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="pager-prev">&ndash;&gt;-->
            <!--&lt;!&ndash;<span>上一篇</span>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="pager-next">&ndash;&gt;-->
            <!--&lt;!&ndash;<span>下一篇</span>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</div>-->
            <!--</section>-->
        </div>
        <section class="commentbox">

            <!--标题-->
            <div class="commentbox__header">
                <h3><span class="commentbox__header--Comments">Comments</span><span class="commentbox__header--count" ng-bind="article.comment_num">0</span></h3>
            </div>

            <!--提问题-->
            <div class="commentBox__question  hidden-xs" ng-class="{true:'',false:'active'}[canComment]">
                <!--问题盒子-->
                <div class="commentBox__questionBox">
                    <input ng-focus="chain.selectId=''" class="commentBox__questionBox--input" type="text" placeholder="我要说几句" ng-model="commentContent">
                    <button class="btn commentBox__questionBox--reply" ng-click="commentBtn(article,commentContent);commentContent=''"
                            ng-disabled="!commentContent || !commentInfo.username || !commentInfo.email">
                        <i class="fa fa-fw"
                           ng-class="{'default':'fa-comments','going':'fa-spinner fa-spin','success':'fa-check','error':'fa-close','email':'fa-envelope','clock':'fa-clock-o'}[chain.main_state]"></i>
                    </button>
                </div>
                <!--个人信息-->
                <div class="commentBox__info">
                    <div class="commentBox__info--input">
                        <label>昵称:</label>
                        <input type="text" placeholder="请输入昵称!" ng-model="commentInfo.username">
                    </div>
                    <div class="commentBox__info--input ">
                        <label>邮箱: </label>
                        <input type="text" placeholder="请输入邮箱!" ng-model="commentInfo.email">
                    </div>
                </div>
            </div>

            <!--问题盒子-->

            <div class="commentbox__inner">
                <div class="comments" ng-repeat="comment in commentList track by $index" ng-init="toggle=false">
                    <!--{{comment._id}}{{'&#45;&#45;'}}{{chain.selectId ==comment._id}}{{'&#45;&#45;'}}{{toggle}}{{'&#45;&#45;'}}{{chain.selectId}}-->
                    <div class="comments__ask">
                        <div class="comments__ask__header">
                            <!--<span class="name" ng-bind="comment.name"></span>&ensp;·&ensp;<span am-time-ago="comment.time" ></span>&ensp;·&ensp;<span class="reply" ng-click="commentToComemntBtn($event)">回复</span>-->
                            <span class="name" ng-bind="comment.name"></span>&ensp;·&ensp;<span am-time-ago="comment.time"></span><span class="hidden-xs">&ensp;·&ensp;<span class="reply"
                                                                                                                                                                             ng-click="chain.selectId=comment._id;toggle=!toggle;">回复</span></span>
                        </div>
                        <div class="comments__ask__content">
                            <span ng-bind="comment.content"></span>
                        </div>
                    </div>
                    <div class="comments__reply" ng-class="{true:'active',false:''}[(chain.selectId ==comment._id  && toggle) || (toggle = false)]">
                        <!--提问题-->
                        <div class="commentBox__question" ng-class="{true:'',false:'active'}[canComment]">
                            <!--问题盒子-->
                            <div class="commentBox__questionBox">
                                <input class="commentBox__questionBox--input" type="text" placeholder="我要说几句" ng-model="commentContent">
                                <button class="btn commentBox__questionBox--reply" ng-click="commentBtn(comment,commentContent);commentContent='';"
                                        ng-disabled="!commentContent || !commentInfo.username || !commentInfo.email">
                                    <i class="fa fa-fw"
                                       ng-class="{'default':'fa-comments','going':'fa-spinner fa-spin','success':'fa-check','error':'fa-close','email':'fa-envelope','clock':'fa-clock-o'}[chain.sub_state]"></i>
                                </button>
                            </div>
                            <!--个人信息-->
                            <div class="commentBox__info">
                                <div class="commentBox__info--input">
                                    <label>昵称:</label>
                                    <input type="text" placeholder="请输入昵称!" ng-model="commentInfo.username">
                                </div>
                                <div class="commentBox__info--input ">
                                    <label>邮箱: </label>
                                    <input type="text" placeholder="请输入邮箱!" ng-model="commentInfo.email">
                                </div>
                            </div>
                        </div>

                        <div class="comments__reply__each" ng-repeat="reply in comment.next_id track by $index">
                            <div class="comments__reply__header">
                                <span class="name" ng-bind="reply.name"></span>&ensp;·&ensp;<span am-time-ago="reply.time"></span>
                            </div>
                            <div class="comments__reply__content">
                                <span ng-bind="reply.content"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .article-detail {
        width: 780px;
        margin: 0 auto;
        padding-top: 35px;
        box-sizing: border-box;
        .paper {
            background-color: transparent;
            margin-bottom: 30px;
            border-radius: 4px;
            overflow: hidden;
            &.loading {
                .paper__header {
                    h1 {
                        background: #eee;

                    }
                }
                .paper__info {
                    .paper__info--span {
                        opacity: 0.3;
                        background: #fff;
                        min-width: 70px;
                    }
                }
                .paper__content {
                    .paper__content--inner {
                        //background: url(../img/body_placeholder.png) no-repeat center top/cover;
                        min-height: 834px;
                        width: 100%;
                    }
                }

            }

            .paper__header {
                border: 1px solid transparent;
                padding: 35px 35px 0;
                background: #fff;
                text-align: right;
                h1 {
                    min-height: 52px;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 36px;
                    font-weight: 500;
                    line-height: 1.2;
                    margin:20px 0 10px;
                }
            }
            .paper__info {
                @include display-flex;
                @include justify-content(flex-end);
                @include align-items(center);
                background: $base-background-color;
                padding: 10px 35px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.8) inset;
                transition: all ease 200ms;
                .paper__info--span {
                    color: #eee;
                    margin-left: 20px;
                    font-size: 14px;
                    //min-width: 70px;
                    white-space: nowrap;
                }

            }
            .paper__content {
                padding: 35px 35px 0;
                background: #fff;
                //min-height: 800px;
                .paper__content--inner {
                    padding: 5px 0 40px;
                    //border-bottom: 1px dashed #464646;
                }
            }
            .paper__navBox {
                background-color: #fff;
                .paper__navBox__inner {
                    padding: 20px 0;
                    text-align: center;
                    list-style: none;
                    color: $base-word-color;
                    //border: 1px solid transparent;
                    //padding: 35px;
                    @include display-flex;
                    @include justify-content(center);
                    @include align-items(center);
                    border-bottom: 1px solid #000;
                    div {
                        margin: 0 10px;
                        //border: 1px solid #464646;
                        padding: 5px 20px;
                        font-size: 16px;
                        //border-radius: 28px;
                        //transition: all ease 200ms;
                        //cursor: pointer;
                        //&:hover {
                        //  color: #fff;
                        //  border-color: $base-theme-color;
                        //  background-color: $base-theme-color;
                        //}

                    }
                }

            }

        }

        .commentbox {
            background-color: $base-background-color;
            padding: 0;
            border-radius: 3px;
            //border-top: 3px solid $base-theme-color;
            border-bottom: 3px solid $base-theme-color;
            position: relative;
            overflow: hidden;
            &::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                border-top: 4px solid $base-theme-color;
                border-top-right-radius: 3px;
                width: 40%;
                height: 0;
            }

            .commentbox__header {
                padding: 0 10px;
                //border-bottom: 1px solid #fff;
                margin-bottom: 0;
                text-align: right;
                h3 {
                    margin: 0;
                    height: 72px;
                    @include display-flex;
                    @include justify-content(flex-end);
                    @include align-items(center);

                    .commentbox__header--Comments {
                        font-size: 50px;
                        color: #fff;
                        margin-right: 10px;
                    }
                    .commentbox__header--count {
                        top: 6px;
                        background: $base-theme-color;
                        font-size: 20px;
                        background: $base-theme-color;
                        color: #fff;
                        border-radius: 5px;
                        padding: 3px 6px;
                        position: relative;
                        font-weight: 400;
                        vertical-align: baseline;
                        min-width: 30px;
                        min-height: 30px;
                        text-align: center;
                    }
                }
            }

            //问题盒子
            .commentBox__question {
                width: 100%;
                box-sizing: border-box;
                position: relative;
                height: 50px;
                transition: all ease 200ms;
                z-index: 1;
                margin: 0;
                padding: 0 35px;
                &.active {
                    height: 100px;
                    .commentBox__info {
                        transform: translateY(50px);
                        opacity: 1;
                    }
                }
                .commentBox__questionBox {
                    position: relative;
                    height: 50px;
                    z-index: 10;
                    .commentBox__questionBox--input {
                        width: 100%;
                        border-radius: 5px;
                        border: 1px solid $base-theme-color;
                        height: 100%;
                        padding-left: 20px;
                        padding-right: 78px;
                        &::-webkit-input-placeholder {
                            color: #a8a8a8;
                        }
                    }
                    .commentBox__questionBox--reply {

                        position: absolute;
                        right: 0;
                        top: 0;
                        height: 50px;
                        box-sizing: border-box;
                        border-bottom-right-radius: 5px;
                        border-top-right-radius: 5px;

                        background: $base-theme-color;
                        color: #fff;
                        //height: 100%;
                        padding: 0 18px;
                        @include display-flex;
                        @include justify-content(center);
                        @include align-items(center);
                        font-size: 20px;

                        transition: all ease 200ms;
                        &:active,
                        &.activated {
                            background: darken($base-theme-color, 10%);
                        }
                    }
                }
                .commentBox__info {
                    @include display-flex;
                    @include justify-content(center);
                    @include align-items(center);
                    height: 50px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1;
                    transition: all ease 200ms;
                    opacity: 0;
                    .commentBox__info--input {
                        flex: 1;
                        @include display-flex;
                        @include justify-content(center);
                        @include align-items(center);
                        color: #eee;

                        label {
                            margin-right: 10px;

                        }
                        input {
                            border-radius: 5px;
                            border: 1px solid $base-theme-color;
                            height: 32px;
                            width: 255px;
                            color: #464642;
                            padding: 0 10px;
                            &::-webkit-input-placeholder {
                                color: #a8a8a8;
                            }
                        }

                    }

                }

            }
            //用户评论内容盒子
            .commentbox__inner {
                padding: 0 35px 35px 35px;
                .comments {
                    margin-bottom: 10px;
                    .comments__ask {
                        box-sizing: content-box;
                        padding: 10px;
                        margin-bottom: 5px;
                        cursor: pointer;
                        border-bottom: 1px solid #1b1b1b;
                        position: relative;

                        &:after {
                            content: '';
                            position: absolute;
                            bottom: -2px;
                            left: 0;
                            width: 100%;
                            height: 0px;
                            border-top: 1px solid #6f6f6f;

                        }

                        &:hover {
                            .reply {
                                color: $base-theme-color-o;
                            }
                        }
                        .comments__ask__header {
                            font-size: 14px;
                            line-height: 130%;
                            padding: 5px 0;
                            color: #ececec;
                            .name {
                                font-size: 18px;
                                color: $base-theme-color;
                            }
                            .reply {
                                transition: all ease 200ms;
                            }

                        }
                        .comments__ask__content {
                            font-size: 14px;
                            line-height: 150%;
                            padding: 5px 0;
                            color: #fff;
                        }
                    }
                    .comments__reply {
                        padding-left: 80px;
                        .commentBox__question {
                            display: block;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            padding: 0;
                        }
                        &.active {
                            //height: 100px;
                            //margin-top: 10px;
                            .commentBox__question {
                                display: block;
                                height: 50px;
                                opacity: 1;
                                overflow: visible;
                                -webkit-overflow-scrolling: touch;
                                //height: 100px;
                                margin-top: 10px;
                                &.active {
                                    height: 100px;
                                }
                            }
                        }
                        .comments__reply__each {
                            padding: 5px;
                            margin-bottom: 0;
                            border-bottom: 1px solid #1b1b1b;
                            position: relative;
                            &:after {
                                content: '';
                                position: absolute;
                                bottom: -2px;
                                left: 0;
                                width: 100%;
                                height: 0;
                                border-top: 1px solid #6f6f6f;

                            }
                            .comments__reply__header {
                                font-size: 14px;
                                line-height: 130%;
                                padding: 3px 0;
                                color: #fff;
                                .name {
                                    font-size: 14px;
                                    color: $base-theme-color;
                                }
                            }
                            .comments__reply__content {
                                font-size: 14px;
                                line-height: 150%;
                                padding: 3px 0;
                                color: #fff;
                            }
                        }
                    }

                }
            }

        }
    }

</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>