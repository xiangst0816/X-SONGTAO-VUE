/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="historyList  animated fadeIn">
        <div class="cataBox card-shadow" v-for="cataBox of historyList">
            <h3 class="cataBox__title">
                <!--<i class="fa fa-calendar"></i>-->
                <!--&ensp;-->
                <span class="main">{{cataBox.year}}</span>
                <span class="tag">时光机</span>
            </h3>
            <div class="cataBox__content">
                <div class="itemBox" v-for="monthBox in cataBox.data">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">{{monthBox.month  | num2MMM  | uppercase}}</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item" v-for="article in monthBox.data" v-link="{ name: 'article',params: { articleId: article._id },activeClass: 'active'}">
                            <span class="itemBox__content__item-title" ng-bind="article.title">{{article.title}}</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">{{article.read_num}}</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">{{article.comment_num}}</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <no-data v-if="!hasData"></no-data>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";
    .historyList {
        @import "../theme/cataBox";
        width:780px;
        margin:0 auto;
        .itemBox {
            @include display-flex;
            @include justify-content(flex-start);
            @include align-items(center);
            margin: 0 0 15px 0;
            padding: 26px 10px;
            border: 1px solid transparent;
            //padding-left: 85px;
            &:nth-child(n) {
                background-color: #fff;
            }
            &:nth-child(2n) {
                background-color: #f5f5f5;
            }

            .itemBox__name {
                width: 170px;
                height: 100%;
                text-align: right;
                p {
                    color: $base-word-color;
                    text-shadow: 1px 1px 0px #ffffff;
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 1.2;
                    padding-right: 20px;
                    margin: 0;
                }

            }
            .itemBox__content {
                flex: 1;
                padding-left: 32px;
                height: 100%;
                border-left: 1px solid #ddd;
                list-style: square;
                margin: 0;
                .itemBox__content__item {
                    height: 28px;
                    line-height: 28px;
                    font-size: 16px;
                    color: $base-word-color;
                    cursor: pointer;
                    list-style-type: square;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        width: 6px;
                        height: 6px;
                        background-color: #000;
                        left: -18px;
                        top: 11px;
                    }
                    .itemBox__content__item-title {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                    }
                    span {
                        vertical-align: middle;
                        display: inline-block;
                        max-width: 360px;
                    }
                    &:hover {
                        color: $base-theme-color;
                        &:after {
                            content: '';
                            position: absolute;
                            width: 6px;
                            height: 6px;
                            background-color: $base-theme-color;
                            left: -18px;
                            top: 11px;
                        }
                    }

                }
            }
        }
    }


</style>
<script>
    import Vue from "vue"
    import noData from "../components/nodata.vue"
    import {getHistoryList} from '../vuex/actions'

    import {num2MMM} from "../utils/filters.js";

    Vue.filter('num2MMM', num2MMM);

    export default{
        replace: true,
        data: function () {
            return {
//                historyList: []
            }
        },
        methods: {},
        computed: {
            hasData () {
                return this.historyList.length !== 0;
            }
        },
        created: function () {
            // 获取文章历史列表
            this.getHistoryList();
        },
        destroyed: function () {
        },
        vuex: {
            getters: {
                historyList: ({mod_article}) =>mod_article.historyList
            },
            actions: {
                getHistoryList
            },

        },
        components: {
            noData
        }
    }
</script>