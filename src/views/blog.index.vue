<template>


    <div id="indexBox" class="indexBox animated fadeIn">
        <div class="index-content">
            <div class="head-wrap">
                <h3 class="text-center services">前端工程师 - Nodejs工程师</h3>
                <div id="headlines">
                    --{{now}}--
                    <h1 v-if="now==1" class="text-center textItem current">我是<span class="blue">X-SONGTAO</span></h1>
                    <h1 class="text-center textItem">既然喜欢那就<span class="blue">行动吧</span>, 不然以后就真没机会了!</h1>
                    <h1 class="text-center textItem">不忘<span class="blue">初心</span> 方得始终</h1>
                    <h1 class="text-center textItem"><span class="blue">行动吧, </span>骚年!</h1>
                    <h1 class="text-center textItem"><span class="blue">坚持</span>才是捷径!</h1>
                    <h1 class="text-center textItem">我还在上道的<span class="blue">路上</span>,求带!</h1>
                    <!--<h1 class="text-center textItem">别犹豫,收了<span class="blue">我</span>吧!</h1>-->
                </div>
                <div class="text-center cat">一个记录时光的博客</div>
            </div>
        </div>
        <section class="index-btnBox">
            <div class="index-btnBox-each text-center">我的博客</div>
            <div class="index-btnBox-each text-center hidden">照片墙</div>
        </section>
        <section class="index-bottom-info text-center text-overflow" ng-include="'web/tpl/copyright.footer.tpl.html'"></section>
    </div>


</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";
    //首次进入页面,主页展示切换文字
    /*index的内容*/
    .indexBox{
        .index-content {
            user-select: none;
            -webkit-user-select: none;
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            left: 0;
            color: #fff;
            overflow: hidden;
            background: transparent radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
            box-sizing: border-box;
            //home 文字展示页
            .head-wrap {
                width: 100%;
                display: block;
                position: relative;
                top: 50%;
                transform: translate3d(0, -140%, 0);
                h3 {
                    max-width: 320px;
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 35px;
                    margin: 0 auto;
                }
                //职位
                .services {
                    border-bottom: 3px solid rgba(255, 255, 255, .5);
                    text-transform: uppercase;
                }
                //座右铭
                #headlines {
                    margin: 0;
                    height: 69px;
                    border: 1px solid transparent;
                    position: relative;
                    h1 {
                        color: #fff;
                    }
                    .current {
                        display: block;
                        opacity: 1 !important;
                    }
                    .textItem {
                        position: absolute;
                        width: 100%;
                        text-align: center;
                        opacity: 0;
                        transition: all ease 800ms;
                        text-transform: uppercase;
                        margin: 10px 0 !important;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space:nowrap;
                        box-sizing: border-box;
                        padding: 0 10px;
                        .blue {
                            color: $base-theme-color;
                        }
                    }
                }
                //第三部分
                .cat {
                    font-size: 14px;
                    color: #fff;
                    font-weight: bold;
                }
            }

            //底部的两个按钮

        }

        .index-btnBox {
            user-select: none;
            -webkit-user-select: none;
            width: 224px;
            position: absolute;
            left: 50%;
            bottom: 10%;
            transform: translate3d(-50%, 0, 0);
            display: flex;
            align-items: center;
            justify-content: space-around;
            z-index: 999;
            @include display-flex;
            @include justify-content(space-around);
            @include align-items(center);
            .index-btnBox-each {
                min-width: 62px;
                color: #fff;
                border: 1px solid $base-theme-color;
                border-radius: 15px;
                line-height: 30px;
                box-sizing: content-box;
                padding: 0 15px;
                cursor: pointer;
                font-size: 14px;
                transition: all ease 300ms;
                &:hover {
                    background: #49c8fb;
                }
            }
        }


    }
    //下面的底部的版权说明
    .index-bottom-info {
        user-select: none;
        -webkit-user-select: none;
        position: absolute;
        width: 100%;
        bottom: 1%;
        left: 50%;
        color: #eee;
        font-size: 12px;
        transform: translate3d(-50%, 0, 0);
        p{
            overflow: hidden;
            //margin: 0 51px 10px;
        }
    }



</style>
<script>
    import Vue from "vue";
    //    import HeaderComponent from './components/header.vue'
    //    import OtherComponent from './components/other.vue'
    module.exports = {
        data: function(){
            return {
                now: 1
            }
        },
        ready: function () {
            console.log("home-dom准备完毕") // -> 'foo'
//            $(".swiper-container").swiper();
            console.log(this.now)

            setInterval(function (this) {
                this.now++;
                console.log(this.now)
            },1000,this);

        }
    }

//    Vue.directive('word-fade-in', {
//        bind: function () {
//            var a = document.getElementById('headlines');
//            console.log(a)
//            // 准备工作
//            // 例如，添加事件处理器或只需要运行一次的高耗任务
//        },
//        update: function (newValue, oldValue) {
//            // 值更新时的工作
//            // 也会以初始值为参数调用一次
//        },
//        unbind: function () {
//            // 清理工作
//            // 例如，删除 bind() 添加的事件监听器
//        }
//    })
</script>


