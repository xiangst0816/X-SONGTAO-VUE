<template>
    <div class="isLoading animated fadeIn">
        <!--<div class="logo-left-box">-->
            <!--<h2 class="logo"><span class="blue">X</span><span class="white">-SONGTAO</span></h2>-->
            <!--<h3 class="blue notice">提示!</h3>-->
            <!--<p class="white">时光正在路上,稍等!</p>-->
        <!--</div>-->
        <div class="loadingBox ball-grid-pulse">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "../theme/theme.scss";

    .isLoading {
        max-width: 780px;
        width: 100%;
        padding: 20px;
        margin: 0 auto;
        @include display-flex;
        @include justify-content(flex-end);
        @include align-items(center);
        @include flex-direction(column);
        /*height: 312px;*/
        /*background: rgba(0, 0, 0, 0.4);*/
        border-radius: 5px;
        margin-bottom: 30px;
        margin-top: 30px;
        position: relative;
        .logo-left-box {
            position: absolute;
            left: 25px;
            top: 25px;
            color: #fff;
            .logo {
                margin-bottom: 5px;
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
        .loadingBox {
            width: 200px;
            /*height: 200px;*/
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /*&::after {*/
            /*content: '';*/
            /*position: absolute;*/
            /*right: 0;*/
            /*bottom: 0;*/
            /*width: 10px;*/
            /*height: 70px;*/
            /*<!--background: $base-theme-color;-->*/
            /*border-bottom-right-radius: 5px;*/
        /*}*/
    }

    @-webkit-keyframes ball-grid-pulse {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            opacity: 0.7;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes ball-grid-pulse {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            opacity: 0.7;
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    .ball-grid-pulse {
        width: 57px;
    }

    .ball-grid-pulse > div:nth-child(1) {
        -webkit-animation-delay: -0.06s;
        animation-delay: -0.06s;
        -webkit-animation-duration: 0.72s;
        animation-duration: 0.72s;
    }

    .ball-grid-pulse > div:nth-child(2) {
        -webkit-animation-delay: 0.25s;
        animation-delay: 0.25s;
        -webkit-animation-duration: 1.02s;
        animation-duration: 1.02s;
    }

    .ball-grid-pulse > div:nth-child(3) {
        -webkit-animation-delay: -0.17s;
        animation-delay: -0.17s;
        -webkit-animation-duration: 1.28s;
        animation-duration: 1.28s;
    }

    .ball-grid-pulse > div:nth-child(4) {
        -webkit-animation-delay: 0.48s;
        animation-delay: 0.48s;
        -webkit-animation-duration: 1.42s;
        animation-duration: 1.42s;
    }

    .ball-grid-pulse > div:nth-child(5) {
        -webkit-animation-delay: 0.31s;
        animation-delay: 0.31s;
        -webkit-animation-duration: 1.45s;
        animation-duration: 1.45s;
    }

    .ball-grid-pulse > div:nth-child(6) {
        -webkit-animation-delay: 0.03s;
        animation-delay: 0.03s;
        -webkit-animation-duration: 1.18s;
        animation-duration: 1.18s;
    }

    .ball-grid-pulse > div:nth-child(7) {
        -webkit-animation-delay: 0.46s;
        animation-delay: 0.46s;
        -webkit-animation-duration: 0.87s;
        animation-duration: 0.87s;
    }

    .ball-grid-pulse > div:nth-child(8) {
        -webkit-animation-delay: 0.78s;
        animation-delay: 0.78s;
        -webkit-animation-duration: 1.45s;
        animation-duration: 1.45s;
    }

    .ball-grid-pulse > div:nth-child(9) {
        -webkit-animation-delay: 0.45s;
        animation-delay: 0.45s;
        -webkit-animation-duration: 1.06s;
        animation-duration: 1.06s;
    }

    .ball-grid-pulse > div {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
        float: left;
        -webkit-animation-name: ball-grid-pulse;
        animation-name: ball-grid-pulse;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-delay: 0;
        animation-delay: 0;
    }
</style>
