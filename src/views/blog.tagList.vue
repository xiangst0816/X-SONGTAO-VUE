/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <!--<div class="tagList" transition="blogTrans">-->
    <div class="tagList" >
        <div class="cataBox card-shadow animated fadeIn" v-if="tagList.length>0">
            <h3 class="cataBox__title">
                <span class="main">Tags</span>
                <span class="tag">标签库</span>
            </h3>
            <div class="cataBox__content">
                <!--专属于标签库的样式结构-->
                <div class="itemBox" v-for="cata in tagList">
                    <div class="itemBox__name">
                        <i class="fa fa-tag hidden-xs"></i> {{cata.name | uppercase}}
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item" v-for="tag in cata.data">
                            <router-link v-if="tag.used_num>0" :to="{ name: 'tagListFindByTagId',query: { listType: 'tagList',tagId: tag._id }}" activeClass="active" class="ui tag label">
                                <span class="tagName">{{tag.name}}</span>
                                <span class="badge">{{tag.used_num}}</span></router-link>
                            <a v-if="tag.used_num==0" class="ui tag label"><span class="tagName">{{tag.name}}</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <section class="copyright animated fadeIn" v-if="tagList.length>0">
            <copyright></copyright>
        </section>
        <no-data v-if="!hasData && !isLoading"></no-data>
        <is-loading v-if="isLoading"></is-loading>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .tagList {
        .itemBox {
            padding: 10px 40px;
            margin-bottom: 10px;
            .itemBox__name {
                font-size: 25px;
                border-bottom: 1px solid #ccc;
                padding-left: 15px;
                p {
                    margin: 0;
                }

            }
            .itemBox__content {
                flex: 1;
                /*border-left: 1px solid #ddd;*/
                list-style: none;
                padding: 0 0 0 20px;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                align-items: center;
                .itemBox__content__item {
                    padding: 0 10px;
                    list-style-type: none;
                    height: 28px;
                    line-height: 28px;
                    font-size: 16px;
                    color: $base-word-color;
                    cursor: pointer;
                    margin: 10px 0;
                    a {
                        color: $base-word-color;
                        text-decoration: none;
                    }
                    span {
                        font-size: 16px;
                        vertical-align: middle;
                        display: inline-block;
                        max-width: 360px;
                        transition: color ease 200ms;
                    }
                    &:hover {
                        .tagName {
                            color: $base-theme-color;
                        }
                        .badge {
                            background-color: $base-theme-color;
                            color: #fff;
                        }

                    }
                }
            }
        }
        @import "../theme/cataBox.scss";
        width: 780px;
        margin: 0 auto;

    }

    @include media("<=tablet") {
        .tagList {
            max-width: 780px;
            width: 100%;
        }
    }

    @include media("<=phone") {
        .tagList {
            .itemBox {
                padding: 3px 10px;
                .itemBox__name{
                    padding-left: 10px;
                }
                .itemBox__content{
                    padding-left: 0px;
                    .itemBox__content__item {
                        .tagName,.badge{
                            font-size:14px;
                        }

                    }
                }
            }
        }

    }

</style>
<script>
    import noData from "../components/nodata.vue"
    import copyright from '../components/copyright.vue'
    import {GetTagsListWithStructure} from '../api/api_tag'
    import isLoading from "../components/isLoading.vue"
    export default{
        replace: true,
        data: function () {
            return {
                tagList: [],
                hasData: true,
                isLoading: true,
            }
        },
        methods: {},
        mounted: function () {
            const scope = this;
            $(window).scrollTop(0);// 滚到顶部
            // GET /someUrl
            GetTagsListWithStructure().then((data) => {
                scope.tagList = data;
            }, ()=> {
                scope.hasData = false;
            }).then(function () {
                scope.tagList.length === 0 ? (scope.hasData = false) : (scope.hasData = true);
                scope.isLoading = false;
            });
        },
        components: {
            noData, copyright,isLoading
        }
    }
</script>
