<template>
    <div class="nodata animated fadeIn">
        <div class="logo-left-box">
            <h2 class="logo"><span class="blue">X</span><span class="white">-SONGTAO</span></h2>
            <h3 class="blue notice">提示!</h3>
            <p class="white">没有找到数据!</p>
        </div>
        <img src="../assets/employee.svg" alt="当前没有数据诶">
    </div>
</template>
<style lang="scss">
    @import "../theme/theme.scss";
    .nodata {
        max-width:780px;
        width:100%;
        padding: 20px;
        margin:0 auto;
        @include display-flex;
        @include justify-content(flex-end);
        @include align-items(center);
        @include flex-direction(column);
        height: 312px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        margin-bottom: 30px;
        margin-top: 30px;
        position: relative;
        .logo-left-box {
            position: absolute;
            left: 25px;
            top: 25px;
            color: #fff;
            .logo{
                margin-bottom:5px;
            }
            .notice {
                margin-top: 5px;
                margin-bottom: 10px;
                position: relative;
                &::after {
                    content: '';
                    height: 3px;
                    width: 30px;
                    position: absolute;
                    background: $base-theme-color;
                    left: 0;
                    bottom: -6px;
                }
            }
            .blue {
                color: $base-theme-color;
            }
            .white {
                color: #fff;
            }
        }
        img {
            width: 200px;
            height: 200px;
        }
        &::after{
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            width: 10px;
            height: 70px;
            background:$base-theme-color;
            border-bottom-right-radius: 5px;
        }
    }

</style>