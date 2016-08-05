/**
 * Created by xiangsongtao on 16/7/24.
 * Description:
 */
<!--内容区-->
<template>
 <div class="tags animated fadeIn">
  <!--column title-->
  <h3 class="title">
   <i class="fa fa-fw fa-lg fa-tag"></i> 标签管理 / <span class="blue">TAGS</span>
  </h3>
  <!--增加-->
  <div class="btnBox text-right">
   <button data-toggle="modal" data-target="#addTag" ng-click="addNewTagBtn()" class="btn btn-success"><i class="fa fa-plus"></i></button>
  </div>
  <div class="tableScrollBox">
   <div class="table-body">
    <table class="table table-condensed" id="table" ng-init="predicate = 'create_time';reverse=false">
     <thead>
     <tr class="text-center">
      <th>#</th>
      <th ng-click="predicate = 'name'; reverse=!reverse">
       标签名称/Name
       <span ng-if="predicate == 'name'">
                        <i ng-if="!reverse" class="fa fa-caret-up"></i>
                        <i ng-if="reverse" class="fa fa-caret-down"></i>
                    </span>
      </th>
      <th ng-click="predicate = 'catalogue_name'; reverse=!reverse">
       分类名称/Cat.
       <span ng-if="predicate == 'catalogue_name'">
                        <i ng-if="!reverse" class="fa fa-caret-up"></i>
                        <i ng-if="reverse" class="fa fa-caret-down"></i>
                    </span>
      </th>
      <th ng-click="predicate = 'used_num'; reverse=!reverse">引用数/Quote
       <span ng-if="predicate == 'used_num'">
                        <i ng-if="!reverse" class="fa fa-caret-up"></i>
                        <i ng-if="reverse" class="fa fa-caret-down"></i>
                    </span></th>
      <th ng-click="predicate = 'create_time'; reverse=!reverse">创建时间/C.T.
       <span ng-if="predicate == 'create_time'">
                        <i ng-if="!reverse" class="fa fa-caret-up"></i>
                        <i ng-if="reverse" class="fa fa-caret-down"></i>
                    </span>
      </th>
      <th>操作</th>
     </tr>
     </thead>
     <!--<colgroup></colgroup>-->
     <tbody>
     <tr ng-repeat="tag in tagLists | orderBy:predicate:reverse track by $index">
      <td ng-bind="$index+1"></td>
      <!--<td ng-bind="tag._id" style="display: none;"></td>-->
      <td ng-bind="tag.name"></td>
      <td ng-bind="tag.catalogue_name"></td>
      <td ng-bind="tag.used_num"></td>
      <td ng-bind="tag.create_time "></td>
      <td>
       <button data-toggle="modal" data-target="#editTag" ng-click="editTagBtn(tag)" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button>
       <button data-toggle="modal" data-target="#delTag" ng-click="delTagBtn(tag._id)" class="btn btn-danger btn-sm"><i class="fa fa-bitbucket"></i></button>
      </td>
     </tr>
     </tbody>
    </table>
    <!--无数据提示-->
    <!--<div class="nodata  animated fadeIn" ng-if="!tagLists.length && isLoaded">-->
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

  </div>
 </div>
</template>
<style scoped lang="scss">
 //base
 @import "../theme/theme.scss";
 .tags {
  height: 100%;
  .title {
   width: 100%;
   color: #fff;
   margin-bottom: 10px;
   text-align: left;
  }
  .btnBox{
   //text-align: right;
  }
  table {
   color: #fff;
   th {
    text-align: center;
    color: #00b2e2;
    cursor: pointer;
    position: relative;
    span{
     position: absolute;
     margin-left: 5px;
     top: inherit;
     left: inherit;
    }
   }
   .danger td {
    background-color: rgba(255, 2, 0, 0.53) !important;
   }
   .warning td {
    background-color: rgba(2, 255, 0, 0.35) !important;
   }
   td {
    vertical-align: middle !important;
    font-size: 14px;
    text-align: center;
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
 }
</script>