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
   <button ui-sref="admin.articleManager.article" class="btn btn-success">
    <i class="fa fa-plus"></i>
   </button>
  </div>
  <!--修改,启用禁用,查看-->
  <table class="table" id="table" ng-init="predicate = 'publish_time';reverse=true">
   <thead>
   <tr class="text-center">
    <th>#</th>
    <th ng-click="predicate = 'title'; reverse=!reverse">文章题目
     <span ng-if="predicate == 'title'">
                    <i ng-if="!reverse" class="fa fa-caret-up"></i>
                    <i ng-if="reverse" class="fa fa-caret-down"></i>
                </span>
    </th>
    <th ng-click="predicate = 'publish_time'; reverse=!reverse">发布时间
     <span ng-if="predicate == 'publish_time'">
                    <i ng-if="!reverse" class="fa fa-caret-up"></i>
                    <i ng-if="reverse" class="fa fa-caret-down"></i>
                </span>
    </th>
    <th ng-click="predicate = 'read_num'; reverse=!reverse">阅读数
     <span ng-if="predicate == 'read_num'">
                    <i ng-if="!reverse" class="fa fa-caret-up"></i>
                    <i ng-if="reverse" class="fa fa-caret-down"></i>
                </span>
    </th>
    <th ng-click="predicate = 'comment_num'; reverse=!reverse">评论数
     <span ng-if="predicate == 'comment_num'">
                    <i ng-if="!reverse" class="fa fa-caret-up"></i>
                    <i ng-if="reverse" class="fa fa-caret-down"></i>
                </span>
    </th>
    <th ng-click="predicate = 'state'; reverse=!reverse">状态
     <span ng-if="predicate == 'state'">
                    <i ng-if="!reverse" class="fa fa-caret-up"></i>
                    <i ng-if="reverse" class="fa fa-caret-down"></i>
                </span>
    </th>
    <th>操作</th>
   </tr>
   </thead>
   <tbody>
   <tr ng-repeat="article in articleLists | orderBy:predicate:reverse track by $index" class="animated fadeIn">
    <td ng-bind="$index+1"></td>
    <td ng-bind="article.title"></td>
    <td ng-bind="article.publish_time | date: 'yyyy/MM/dd'"></td>
    <td ng-bind="article.read_num"></td>
    <td ng-bind="article.comment_num"></td>
    <td ng-switch="article.state">
     <span ng-switch-when="true">已发表</span>
     <span ng-switch-when="false">草稿</span>
    </td>
    <td>
     <button ui-sref="admin.articleManager.article({_id:article._id})"
             class="btn btn-default btn-sm">
      <i class="fa fa-pencil"></i>
     </button>
     <button data-toggle="modal" data-target="#delArticle" ng-click="delArtBtn(article)" class="btn btn-danger btn-sm"><i class="fa fa-bitbucket"></i></button>
    </td>
   </tr>


   </tbody>
  </table>
  <!--无数据提示-->
  <!--<div class="nodata  animated fadeIn" ng-if="!articleLists.length && isLoaded">-->
   <!--<div class="logo-left-box">-->
    <!--<h2 class="logo"><span class="blue">X</span><span class="white">-SONGTAO</span></h2>-->
    <!--<h3 class="blue notice">提示!</h3>-->
    <!--<p class="white">没有找到数据,~~~~(>_<)~~~~</p>-->
   <!--</div>-->
   <!--&lt;!&ndash;<img src="./web/img/employee.svg" alt="employee">&ndash;&gt;-->
  <!--</div>-->

  <!--加载提示-->
  <!--<div class="nodata  animated fadeIn" ng-if="!isLoaded">-->
   <!--<div class="logo-left-box">-->
    <!--<h2 class="logo"><span class="blue">X</span><span class="white">-SONGTAO</span></h2>-->
    <!--<h3 class="blue notice">提示!</h3>-->
    <!--<p class="white">正在加载,O(∩_∩)O稍等~</p>-->
   <!--</div>-->
   <!--&lt;!&ndash;<img src="./web/img/employee.svg" alt="employee">&ndash;&gt;-->
  <!--</div>-->
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

 import copyright from '../components/copyright.vue'
 module.exports = {
  data: function () {
   return {}
  },
  ready: function () {
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