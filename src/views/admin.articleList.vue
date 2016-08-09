/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<!--内容区-->
<template>
    <div class="articleList animated fadeIn">
        <!--column title-->
        <h3 class="title">
            <i class="fa fa-fw fa-lg fa-list"></i> 文章列表 / <span class="blue">ARTICLE</span>
        </h3>
        <div class="text-right">
            <button v-link="{ name: 'admin-article',params: { articleId: 0 },activeClass: 'active'}" class="btn btn-success">
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <!--修改,启用禁用,查看-->
        <table class="table" id="table">
            <thead>
            <tr class="text-center">
                <th>#</th>
                <th @click="order('title')">文章题目
                    <span v-if="predicate == 'title'">
                    <i v-if="reverse<0" class="fa fa-caret-up"></i>
                    <i v-if="reverse>0" class="fa fa-caret-down"></i>
                </span>
                </th>
                <th @click="order('publish_time')">发布时间
                    <span v-if="predicate == 'publish_time'">
                    <i v-if="reverse<0" class="fa fa-caret-up"></i>
                    <i v-if="reverse>0" class="fa fa-caret-down"></i>
                </span>
                </th>
                <th @click="order('read_num')">阅读数
                    <span v-if="predicate == 'read_num'">
                    <i v-if="reverse<0" class="fa fa-caret-up"></i>
                    <i v-if="reverse>0" class="fa fa-caret-down"></i>
                </span>
                </th>
                <th @click="order('comment_num')">评论数
                    <span v-if="predicate == 'comment_num'">
                    <i v-if="reverse<0" class="fa fa-caret-up"></i>
                    <i v-if="reverse>0" class="fa fa-caret-down"></i>
                </span>
                </th>
                <th @click="order('state')">状态
                    <span v-if="predicate == 'state'">
                    <i v-if="reverse<0" class="fa fa-caret-up"></i>
                    <i v-if="reverse>0" class="fa fa-caret-down"></i>
                </span>
                </th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="article in articleLists | orderBy predicate reverse " track-by="$index" class="animated fadeIn">
                <td>{{$index+1}}</td>
                <td>{{article.title}}</td>
                <td>{{article.publish_time | moment 'YYYY/MM/DD'}}</td>
                <td>{{article.read_num}}</td>
                <td>{{article.comment_num}}</td>
                <td>
                    <span v-if="article.state">已发表</span>
                    <span v-else>草稿</span>
                </td>
                <td>
                    <button v-link="{ name: 'admin-article',params: { articleId: article._id },activeClass: 'active'}"
                            class="btn btn-default btn-sm">
                        <i class="fa fa-pencil"></i>
                    </button>
                    <button data-toggle="modal" data-target="#delArticle" @click="delArtBtn(article)" class="btn btn-danger btn-sm"><i class="fa fa-bitbucket"></i></button>
                </td>
            </tr>


            </tbody>
        </table>
        <!--无数据提示-->
        <!--<div class="nodata  animated fadeIn" v-if="!articleLists.length && isLoaded">-->
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
    </div>
    <!--弹出层-删除-->
    <div class="modal fade" id="delArticle" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title"><i class="fa fa-bitbucket"></i> 删除文章/DELART</h4>
                </div>
                <div class="modal-body">
                    <h3 class="text-center deleteConfirmText">确定删除这篇文章?</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button"  data-dismiss="modal" @click="confirmDelArtBtn()" class="btn btn-danger">
                        删除
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .articleList {
        .title {
            width: 100%;
            color: #fff;
            margin-bottom: 10px;
        }
        .btnBox {
            //text-align: right;
        }
        table {
            text-align: center;
            color: #fff;
            th {
                text-align: center;
                color: #00b2e2;
                position: relative;
                cursor: pointer;
                span {
                    position: absolute;
                    margin-left: 5px;
                    top: inherit;
                    left: inherit;
                }
            }
            td {
                vertical-align: middle !important;
                //cursor: pointer;
                max-width: 190px;
            }
        }
    }

</style>
<script>
    import Vue from "vue";
    import {
            GetArticleList,
            DeleteArticle,
    } from "../api/api_article";

    import copyright from '../components/copyright.vue'
    module.exports = {
        data: function () {
            return {
                reverse: -1,
                predicate: 'publish_time',
                articleLists: [],
                deleteArticle: {},
            }
        },
        methods: {
            order: function (name) {
                this.predicate = name;
                this.reverse = this.reverse < 0;
                return !!this.reverse ? (this.reverse = 1) : (this.reverse = -1)
            },
            delArtBtn(article){
                this.deleteArticle = article;
            },
            confirmDelArtBtn(){
                DeleteArticle(this.deleteArticle._id).then(()=>{
                    //刷新文章列表
                    this.articleLists.splice(this.articleLists.indexOf(this.deleteArticle), 1);
                })
            }
        },
        created: function () {
            const scope = this;
            //获取文章列表
            GetArticleList().then((data)=> {
                console.log('文章列表获取成功')
                scope.articleLists = data;
            }, (err)=> {
                console.log("文章列表获取失败:" + err)
            })
        },
        ready: function () {
        },
        destroyed: function () {
        },
        components: {
            copyright
        },
    }
</script>