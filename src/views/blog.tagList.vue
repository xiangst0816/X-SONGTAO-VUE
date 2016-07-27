/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="historyList">
        <div class="cataBox card-shadow" ng-repeat="cataBox in historyLists track by $index">
            <h3 class="cataBox__title">
                <span class="main" ng-bind="cataBox.year">Tags</span>
                <span class="tag">标签库</span>
            </h3>
            <div class="cataBox__content">
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">苏州小生活</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">苏州小生活</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                    </ul>
                </div>
                <div class="itemBox" ng-repeat="itemBox in cataBox.data track by $index">
                    <div class="itemBox__name">
                        <p ng-bind="itemBox.month | toEnMonth | uppercase">苏州小生活</p>
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label blue">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
                        </li>
                        <li class="itemBox__content__item">
                            <a class="ui tag label">标签1</a>
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
            border-left: 1px solid #ddd;
            list-style: none;
            padding:0 0 0 20px;
            display: flex;
            justify-content:flex-start;
            flex-wrap: wrap;
            align-items: center;
            .itemBox__content__item {
                padding:0 10px;
                list-style-type: none;
                height: 28px;
                line-height: 28px;
                font-size: 16px;
                color: $base-word-color;
                cursor: pointer;
                margin:10px 0;
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