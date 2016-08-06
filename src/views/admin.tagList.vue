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
            <button data-toggle="modal" data-target="#addTag" @click="addNewTagBtn()" class="btn btn-success"><i class="fa fa-plus"></i></button>
        </div>
        <div class="tableScrollBox">
            <div class="table-body">
                <table class="table table-condensed" id="table">
                    <thead>
                    <tr class="text-center">
                        <th>#</th>
                        <th @click="order('name')">
                            标签名称/Name
                            <span v-if="predicate == 'name'">
                        <i v-if="reverse<0" class="fa fa-caret-up"></i>
                        <i v-if="reverse>0" class="fa fa-caret-down"></i>
                    </span>
                        </th>
                        <th @click="order('catalogue_name')">
                            分类名称/Cat.
                            <span v-if="predicate == 'catalogue_name'">
                        <i v-if="reverse<0" class="fa fa-caret-up"></i>
                        <i v-if="reverse>0" class="fa fa-caret-down"></i>
                    </span>
                        </th>
                        <th @click="order('used_num')">引用数/Quote
                            <span v-if="predicate == 'used_num'">
                        <i v-if="reverse<0" class="fa fa-caret-up"></i>
                        <i v-if="reverse>0" class="fa fa-caret-down"></i>
                    </span></th>
                        <th @click="order('create_time')">创建时间/C.T.
                            <span v-if="predicate == 'create_time'">
                        <i v-if="reverse<0" class="fa fa-caret-up"></i>
                        <i v-if="reverse>0" class="fa fa-caret-down"></i>
                    </span>
                        </th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <!--<colgroup></colgroup>-->
                    <tbody>
                    <tr v-for="tag in tagLists | orderBy predicate reverse" track-by="$index">
                        <td>{{$index+1}}</td>
                        <td>{{tag.name}}</td>
                        <td>{{tag.catalogue_name}}</td>
                        <td>{{tag.used_num}}</td>
                        <td>{{tag.create_time | moment "YYYY/MM/DD HH:mm:ss"}}</td>
                        <td>
                            <button data-toggle="modal" data-target="#editTag" @click="editTagBtn(tag)" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button>
                            <button data-toggle="modal" data-target="#delTag" @click="delTagBtn(tag._id)" class="btn btn-danger btn-sm"><i class="fa fa-bitbucket"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <!--无数据提示-->
                <!--<div class="nodata  animated fadeIn" v-if="!tagLists.length && isLoaded">-->
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
        .btnBox {
            //text-align: right;
        }
        table {
            color: #fff;
            th {
                text-align: center;
                color: #00b2e2;
                cursor: pointer;
                position: relative;
                span {
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
    import {GetTagsList} from "../api/api_tag";

    import copyright from '../components/copyright.vue'


    module.exports = {
        data: function () {
            return {
                reverse: -1,
                predicate: 'create_time',
                tagLists: [],
            }
        },
        computed: {},
        methods: {
            order: function (name) {
                this.predicate = name;
                this.reverse = this.reverse<0;
                return !!this.reverse ? (this.reverse = 1) : (this.reverse = -1)
            }
        },
        ready: function () {
            const scope = this;

            /**
             * GetTagsList
             * */
            GetTagsList().then((data)=> {
                scope.tagLists = data;
            }, (err) => {
            })
        },
        destroyed: function () {

        },
        components: {
            copyright
        },
    }
</script>