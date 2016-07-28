/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="historyList  animated fadeIn">
        <div class="cataBox card-shadow" ng-repeat="cataBox in historyLists track by $index">
            <h3 class="cataBox__title">
                <!--<i class="fa fa-calendar"></i>-->
                <!--&ensp;-->
                <span class="main" ng-bind="cataBox.year">2016</span>
                <span class="tag">时光机</span>
            </h3>
            <div class="cataBox__content">
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cataBox card-shadow" ng-repeat="cataBox in historyLists track by $index">
            <h3 class="cataBox__title">
                <!--<i class="fa fa-calendar"></i>-->
                <!--&ensp;-->
                <span class="main" ng-bind="cataBox.year">2016</span>
                <span class="tag">时光机</span>
            </h3>
            <div class="cataBox__content">
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cataBox card-shadow" ng-repeat="cataBox in historyLists track by $index">
            <h3 class="cataBox__title">
                <!--<i class="fa fa-calendar"></i>-->
                <!--&ensp;-->
                <span class="main" ng-bind="cataBox.year">2016</span>
                <span class="tag">时光机</span>
            </h3>
            <div class="cataBox__content">
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">MAT</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
                        </li>
                        <li class="itemBox__content__item">
                            <span class="itemBox__content__item-title" ng-bind="article.title">新年好新年好新年好</span>&ensp;
                            <span> <span>(阅读数:</span><span ng-bind="article.read_num">123</span>
                           <span> ,评论数:</span><span ng-bind="article.comment_num">221</span><span>)</span></span>
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
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>