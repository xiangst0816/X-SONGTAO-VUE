/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="historyList  animated fadeIn">
        <div class="cataBox card-shadow">
            <h3 class="cataBox__title">
                <span class="main">Tags</span>
                <span class="tag">标签库</span>
            </h3>
            <div class="cataBox__content">
                <!--专属于标签库的样式结构-->
                <div class="itemBox" v-for="cata in tagList">
                    <div class="itemBox__name">
                        <i class="fa fa-tag"></i> {{cata.name | uppercase}}
                    </div>
                    <ul class="itemBox__content">
                        <li class="itemBox__content__item" v-for="tag in cata.data">
                            <a  v-if="tag.used_num>0" v-link="{ name: 'artList',query: { listType: 'tagList',tagId: tag._id },activeClass: 'active'}" class="ui tag label"><span>{{tag.name}}</span> <span class="badge">{{tag.used_num}}</span></a>
                            <a v-if="tag.used_num==0" class="ui tag label"><span>{{tag.name}}</span></a>
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
        .itemBox{
            padding:10px 40px;
            margin-bottom:10px;
            .itemBox__name{
                font-size:25px;
                border-bottom:1px solid #ccc;
                padding-left:15px;

                p{
                    margin:0;
                }

            }
            .itemBox__content {
                flex: 1;
                /*border-left: 1px solid #ddd;*/
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
                    a{
                        text-decoration: none;
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
        @import "../theme/cataBox";
        width:780px;
        margin:0 auto;

    }


</style>
<script>
    import noData from "../components/nodata.vue"
    import {getTagsListWithStructure} from '../vuex/actions'
    export default{
        replace: true,
        data: function () {
            return {
//                tagList: []
            }
        },
        methods: {},
        computed: {
            hasData () {
                return this.tagList.length !== 0;
            }
        },
        created: function () {

            // GET /someUrl
            console.log('API.tagList');
            this.getTagsListWithStructure();

//            this.$http.get(API.getTagsListWithStructure).then((response) => {
//                // success callback
//                let result = response.data;
//                if (parseInt(result.code) === 1) {
//                    this.tagList = result.data;
//                    console.log(this.tagList)
//                    console.log("API.tagList-请求成功")
//                } else {
//                    alert("请求失败!")
//                }
//            }, (response) => {
//                console.log('response2')
//                console.log(response)
//            });
        },
        destroyed: function () {
        },
        vuex: {
            getters: {
                tagList: ({mod_tag}) =>mod_tag.tagsListWithStructure
            },
            actions: {
                getTagsListWithStructure
            },

        },
        components: {
            noData
        }
    }
</script>