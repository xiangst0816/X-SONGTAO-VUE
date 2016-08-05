/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/

<!--内容区-->
<template>
    <div class="blog animated fadeIn">
        <my-info></my-info>
        <!-- 路由外链 -->
        <div class="blog__content"  v-show="!isShowMyWords"  transition="isShowMyWords">
            <div class="blog__content--inner">
                <router-view></router-view>
                <section class="copyright">
                    <copyright></copyright>
                </section>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .blog {
        .blog__content {
            display: flex;
            justify-content:center;
            align-items: flex-start;
            box-sizing: content-box;
            .blog__content--inner{
                width:100%;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                overflow: hidden;
                padding-top:35px;
            }
            .copyright{
                margin-bottom:15px;
            }
        }
    }

    /* 必需 */
    .isShowMyWords-transition {
        transition: all .5s ease;
        opacity: 1;
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .isShowMyWords-enter, .isShowMyWords-leave {
        opacity: 0;
    }



    @include media(">desktop") {
        .blog {
            width:100%;
            .blog__content {
                z-index: 2;
                width: 68%;
                padding-left: 33.33%;
                position: relative;
            }
        }
    }
    @include media("<desktop_small") {
        .blog {
            padding-top:45px;
        }
    }
</style>
<script>
    import Vue from "vue";
    import myInfo from './blog.myInfo.vue'
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
            myInfo,copyright
        },
        vuex: {
            getters: {
                isShowMyWords: state=>state.isShowMyWords,
            }

        }
    }
</script>