/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/

<!--内容区-->
<template>
    <div class="animated fadeIn">
        <my-info></my-info>
        <!-- 路由外链 -->
        <div>
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
    import Vue from "vue";
    import myInfo from './blog.myInfo.vue'
    module.exports = {
        data: function () {
            return {
            }
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