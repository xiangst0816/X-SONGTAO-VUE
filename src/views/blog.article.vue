/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="article-detail animated fadeIn">
        <div class="paper" ng-class="{true:'loaded',false:'loading'}[!!article]">


            <section class="paper__header">

                <div class="ui breadcrumb">
                    <a class="section" v-link="{ name: 'index'}">首页</a>
                    <span class="divider">/</span>
                    <a class="section" v-link="{ name: 'blog'}">博客</a>
                    <span class="divider">/</span>
                    <div class="active section">文章</div>
                </div>


                <h1 ng-bind="article.title">{{article.title}}</h1>
            </section>
            <section class="paper__info">
                <div class="paper__info--span">
                    <i class="fa fa-calendar"></i>
                    <span am-time-ago="article.publish_time">{{article.publish_time}}</span>
                </div>
                <div class="paper__info--span">
                    <i class="fa fa-book"></i>
                    阅读数
                    <span ng-bind="article.read_num">{{article.read_num}}</span>
                </div>
                <div class="paper__info--span">
                    <i class="fa fa-comments"></i>
                    评论数
                    <span ng-bind="article.comment_num">{{article.comment_num}}</span>
                </div>

                <div class="paper__info--span hidden-xs" v-for="tag of article.tags">
                    <i class="fa fa-tag"></i> <span>{{tag}}</span>
                </div>
            </section>
            <section class="paper__content">
                <div class="paper__content--inner markdown-body" ng-bind-html="article.content | toTrusted">
                    {{{article.content}}}

                </div>
                <!--page-->
            </section>
            <!--the end-->
        </div>
        <section class="commentbox">

            <!--标题-->
            <div class="commentbox__header">
                <h3><span class="commentbox__header--Comments">Comments</span><span class="commentbox__header--count">{{article.comment_num}}</span></h3>
            </div>

            <!--提问题-->
            <div class="commentBox__question  hidden-xs active" :class="{true:'',false:'active'}[canComment]">
                <!--问题盒子-->
                <div class="commentBox__questionBox">

                    <div class="ui action input fluid commentBox__questionBox">
                        <input class="commentBox__questionBox--input" type="text" placeholder="我要说几句...">
                        <button class="ui button commentBox__questionBox--reply">提交</button>
                    </div>
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
                <div class="comments" v-for="comment of commentList">
                    <!--{{comment._id}}{{'&#45;&#45;'}}{{chain.selectId ==comment._id}}{{'&#45;&#45;'}}{{toggle}}{{'&#45;&#45;'}}{{chain.selectId}}-->
                    <div class="comments__ask">
                        <div class="comments__ask__header">
                            <!--<span class="name" ng-bind="comment.name"></span>&ensp;·&ensp;<span am-time-ago="comment.time" ></span>&ensp;·&ensp;<span class="reply" ng-click="commentToComemntBtn($event)">回复</span>-->
                            <span class="name">{{comment.name}}</span>&ensp;·&ensp;<span am-time-ago="comment.time">{{comment.time}}</span><span class="hidden-xs">&ensp;·&ensp;<span class="reply"
                                                                                                                                                                                      @click="reply(comment._id)">回复</span>{{selectId}}--{{toggle}}</span>
                        </div>
                        <div class="comments__ask__content">
                            <span>{{comment.content}}</span>
                        </div>
                    </div>
                    <div class="comments__reply" :class="{'active':a}">
                        <!--提问题-->
                        <div class="commentBox__question active" :class="{true:'',false:'active'}[canComment]">
                            <!--问题盒子-->
                            <div class="commentBox__questionBox">

                                <div class="ui action input fluid commentBox__questionBox">
                                    <input class="commentBox__questionBox--input" type="text" placeholder="我要说几句...">
                                    <button class="ui button commentBox__questionBox--reply">提交</button>
                                </div>
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

                        <div class="comments__reply__each" v-for="reply of comment.next_id">
                            <div class="comments__reply__header">
                                <span class="name">{{reply.name}}</span>&ensp;·&ensp;<span am-time-ago="reply.time">{{reply.time}}</span>
                            </div>
                            <div class="comments__reply__content">
                                <span ng-bind="reply.content">{{reply.content}}</span>
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
                a {
                    text-decoration: none;
                }
                h1 {
                    min-height: 52px;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 36px;
                    font-weight: 500;
                    line-height: 1.2;
                    margin: 20px 0 10px;
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
                /*content: '';*/
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
                        top: 2px;
                        background: $base-theme-color;
                        font-size: 20px;
                        color: #fff;
                        border-radius: 5px;
                        padding: 3px 6px;
                        position: relative;
                        font-weight: 400;
                        vertical-align: baseline;
                        min-width: 30px;
                        min-height: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
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
                        border: 1px solid $base-theme-color;
                        font-size: 16px;
                        &::-webkit-input-placeholder {
                            color: #a8a8a8;
                        }
                    }
                    .commentBox__questionBox--reply {
                        background: $base-theme-color;
                        color: #fff;
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
                    margin: 5px 0;
                    .commentBox__info--input {
                        /*flex: 1;*/
                        @include display-flex;
                        @include justify-content(center);
                        @include align-items(center);
                        margin: 0 10px;
                        color: #eee;

                        label {
                            margin-right: 10px;

                        }
                        input {
                            border-radius: 5px;
                            border: 1px solid $base-theme-color;
                            height: 32px;
                            width: 220px;
                            color: #464642;
                            padding: 0 10px;
                            font-size: 14px;
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
    //"57826e945c21c1dd04b4ad4d"
    import API from "../config.js"
    module.exports = {
        replace: true,
        data: function () {
            return {
                article: {},
                commentList: [],
                toggle: true,
                selectId: '',
            }
        },
        methods: {
            reply:function (id) {
                this.selectId=id;
                console.log("before:"+this.toggle)
                this.toggle=!this.toggle;
                console.log("after:"+this.toggle)
            }
        },
        computed:{
            a:function (thisId) {
//                return ((this.selectId ==thisId  && this.toggle) || (this.toggle = false));
                return true;
            }

        },
        ready: function () {

            // GET /someUrl
            console.log('API.getMyInfo')
            console.log(API.getMyInfo)


            console.log('---------------------')
            console.log()
//            let arti            // GET /someUrl
            console.log('API.getMyInfo')
            console.log(API.getMyInfo)



            let articleId = this.$route.params.articleId;
            this.$http.get(API.getArticleById.replace('id', articleId)).then((response) => {
                // success callback
                let result = response.data;
                if (parseInt(result.code) === 1) {
                    this.article = result.data;
                    console.log("API.article-请求成功")
                    console.log(this.article)


                    this.$http.get(API.getArticlesComments.replace('article_id', this.article._id)).then((response) => {
                        let result = response.data;
                        if (parseInt(result.code) === 1) {
                            this.commentList = result.data;
                            console.log('this.commentList')
                            console.log(this.commentList)
                        }

                    }, (response) => {
                        console.log('response2')
                        console.log(response)
                    });


                } else {
                    alert("请求失败!")
                }
            }, (response) => {
                console.log('response2')
                console.log(response)
            });
        },
        destroyed: function () {
        }
    }
</script>