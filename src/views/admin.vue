<template>
    <div class="adminBox">
        <!--<section class="adminBox-footer text-center text-overflow"  ng-include="'web/tpl/copyright.footer.tpl.html'"></section>-->
        <div class="adminBox-content" :class="{'preview':isShowBigAdmin}" id="adminBox-content">
            <div class="adminBox-content-header">
                <h1 class="text-right textItem"><span class="blue">X</span>-SONGTAO
                    <small class="blue">后台管理</small>
                </h1>
            </div>
            <!--修改信息的内部-->
            <div class="adminBox-content-innerBox">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "../theme/theme.scss";
    //后台整个页面的盒子
    .adminBox{
        overflow-y:scroll;
        -webkit-overflow-scrolling:touch;
        height:100%;
    .adminBox-content {
        width: 780px;
        padding: 0 30px;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.5);
        position: relative;
        border-radius: 3px;
        border-bottom: 2px solid #00b2e2;
        margin-top: 50px;
        margin-left: auto;
        margin-bottom: 50px;
        margin-right: auto;
        user-select:none;
        -webkit-user-select:none;
        -webkit-user-select: none;
    //min-height:500px;
        min-height: calc(100% - 100px);
    .adminBox-content-header h1 {
    //font-family: "Dosis", arial, tahoma, verdana;
        display: inline-block;
        float: right;
        padding: 20px 30px 10px 0;
        margin: 0;
        border-top: 2px solid #00b2e2;
        position: absolute;
        top: 0;
        right: 0;
        border-top-right-radius: 3px;
    }

    .adminBox-content-innerBox {
        width: 100%;
        padding-top: 50px;
        height: 100%;
    }
    }
    .adminBox-footer{
        position: absolute;
        width: 100%;
        bottom: 1%;
        left: 50%;
        color: #eee;
        font-size: 12px;
        transform: translate3d(-50%, 0, 0);

    }
    }

    .blue {
        color: $base-theme-color;
    }
    .textItem {
        color: #fff;
    }
    .adminBox-content {
        &.preview {
            width: 1530px;
        }
    }

</style>
<script>
//    import HeaderComponent from './components/header.vue'
//    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        },
        vuex: {
            getters: {
                isShowBigAdmin: state=>state.isShowBigAdmin,
            },
        }
    }
</script>
