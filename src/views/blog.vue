/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/

<!--内容区-->
<template>
    <div class="blog animated fadeIn">
        <my-info></my-info>
        <!-- 路由外链 -->
        <div class="blog__content" v-show="!isShowMyWords" transition="isShowMyWords">
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
        position: relative;
        .blog__content {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            box-sizing: content-box;
            transition: opacity ease 500ms;
            /*opacity:1;*/

            .blog__content--inner {
                max-width: 780px;
                width:100%;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                /*overflow: hidden;*/
                padding-top: 35px;
                position: relative;
            }
            .copyright {
                position: fixed;
                bottom: 0;
                width: 100%;
                text-align: center;
                margin-bottom: 15px;
            }
        }
    }
    @include media("<=tablet") {
        .blog{
            .blog__content{
                padding-left: 15px;
                padding-right: 15px;
                .blog__content--inner{

                }
            }
        }
    }
    @include media("<=phone") {
        .blog{
            .blog__content{
                padding-left: 10px;
                padding-right: 10px;
                .blog__content--inner{

                }
            }
        }
    }


    @include media(">desktop_small","<=desktop") {
        .blog{
            .blog__content{
                padding-top:270px;
                .blog__content--inner{

                }
            }
        }
        .isShowMyWords-transition {
            transition: all .5s ease;
            opacity:1;
        }
        .isShowMyWords-enter, .isShowMyWords-leave {
            opacity: 0;
        }
    }






    @include media(">desktop") {
        .blog {
            width: 100%;
            .blog__content {
                z-index: 2;
                width: 66%;
                padding-left: 34%;
                position: relative;
            }
        }

        .isShowMyWords-transition {
            transition: all .5s ease;
            opacity:1;
        }
        .isShowMyWords-enter, .isShowMyWords-leave {
            opacity: 0;
        }
    }

    @include media("<desktop_small") {
        .blog{
            padding-top: 45px;
            .blog__content{
                padding-top:270px;
                .blog__content--inner{
                }
            }
        }
        .isShowMyWords-transition {
            transition: all .5s ease;
            opacity:1;
        }
        .isShowMyWords-enter, .isShowMyWords-leave {
            opacity: 0;
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
        },
        vuex: {
            getters: {
                isShowMyWords: state=>state.isShowMyWords,
            }

        }
    }
</script>