/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/

<!--内容区-->
<template>
    <div class="blog animated fadeIn">
        <my-info></my-info>
        <!-- 路由外链 -->
        <div class="blog__content">
            <div class="blog__content--inner">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .blog {
        /*height: 100%;*/
        /*overflow-y: scroll;*/
        .blog__content {
            display: flex;
            justify-content:center;
            align-items: flex-start;
            .blog__content--inner{
                width:780px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                overflow: hidden;
                padding-top:35px;
            }
        }
    }

    @include media(">desktop") {
        .blog {
            width:100%;

            .blog__content {
                z-index: 2;
                width: 66.67%;
                padding-left: 33.33%;
                position: relative;
            }
        }
    }
</style>
<script>
    import Vue from "vue";
    import myInfo from './blog.myInfo.vue'
    module.exports = {
        data: function () {
            return {}
        },
        ready: function () {
        },
        destroyed: function () {
        },
        components: {
            myInfo
        }
    }
</script>