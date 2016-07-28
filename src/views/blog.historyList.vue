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
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">{{monthBox.month}}</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item"  v-for="article in monthBox.data">
                            <span class="itemBox__content__item-title" ng-bind="article.title">{{article.title}}</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">{{article.read_num}}</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">{{article.comment_num}}</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .historyList {
        @import "../theme/cataBox";
        .itemBox__content {
            flex: 1;
            padding-left: 32px;
            height: 100%;
            border-left: 1px solid #ddd;
            list-style: square;
            .itemBox__content__item {
                height: 28px;
                line-height: 28px;
                font-size: 16px;
                color: $base-word-color;
                cursor: pointer;
                list-style-type: square;
                display: flex;
                justify-content:flex-start;
                align-items: center;
                position:relative;
                &:after{
                    content: '';
                    position: absolute;
                    width:6px;
                    height:6px;
                    background-color:#000;
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
                    &:after{
                        content: '';
                        position: absolute;
                        width:6px;
                        height:6px;
                        background-color:$base-theme-color;
                        left: -18px;
                        top: 11px;
                    }
                }

            }
        }
    }


</style>
<script>
    import API from "../config.js"
    export default{
        replace: true,
        data: function () {
            return {
                historyList: []
            }
        },
        methods: {},
        created: function () {

            // GET /someUrl
            console.log('API.newUpdateArticle')

            this.$http.get(API.getArticleHistoryWithStructure).then((response) => {
                // success callback
                let result = response.data;
                if (parseInt(result.code) === 1) {
                    this.historyList = result.data;
                    console.log(this.historyList)
                    console.log("API.historyList-请求成功")
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