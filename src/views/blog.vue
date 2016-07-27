/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/

<!--内容区-->
<template>
    <div class="blog animated fadeIn">
        <!--<div class="blog__info">-->
            <my-info></my-info>
        <!--</div>-->

        <!-- 路由外链 -->
        <div class="blog__content">
            <router-view></router-view>
        </div>

    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .blog{
        .blog__content{

        }
    }

    @include media(">desktop") {
        .blog{
            .blog__info{
                z-index: 3;
            }
            .blog__content{
                z-index: 2;
                width: 66.67%;
                height:100px;
                padding-left:33.33%;
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