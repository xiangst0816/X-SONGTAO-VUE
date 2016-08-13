<template>
    <div class="musicBox animated fadeIn">
        <div class="music">
            <div class="music--img">
                <img :src="currentMusicInfo.coverUrl">
            </div>
            <div class="music--infoBox">
                <div class="music--info">
                    <h1 class="nameBox">
                        <span class="name">{{currentMusicInfo.name}}</span>
                        <span class="heart" @click="setAutoPlay()" data-toggle="tooltip" data-placement="right" title="希望能自动播放">
                            <i class="fa" :class="{true:'fa-heart text-danger',false:'fa-heart-o'}[canAutoPlay]"></i>
                        </span>
                    </h1>
                    <p class="detail">
                    <span class="left">
                         <span class="player">{{currentMusicInfo.player}}</span>&ensp;<span class="blue">@</span>&ensp;<span class="album">{{currentMusicInfo.album}}</span>
                    </span>
                    </p>
                    <div class="indicator">
                        <div class="loadingBar">
                            <div class="loading" :style="{width:rightPercent+'%'}"></div>
                            <div class="bar" :style="{left:rightPercent+'%'}"></div>
                        </div>
                        <div class="loadingTime">
                            <span class="musicLoading" v-show="isLoading">
                                <i class="fa fa-spin fa-spinner"></i>
                            </span>
                            <span>
                                <span class="blue">{{rightNow | secondsConvert}}</span>/<span>{{duration | secondsConvert}}</span>
                            </span>

                        </div>
                    </div>
                    <div class="controller">
                        <div class="sub circle" @click="preCtrl()">
                            <i class="fa  fa-step-backward"></i>
                        </div>
                        <div class="main circle" @click="playCtrl()">
                            <i class="fa" :class="{true:'fa-pause pause-center',false:'fa-play play-center'}[isPlaying]"></i>
                        </div>
                        <div class="sub circle" @click="nextCtrl()">
                            <i class="fa  fa-step-forward"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="index-copyright">
            <copyright></copyright>
        </section>


        <!--<audio src="http://172.20.10.3:8000/Koi.%20-%20Beirut.mp3" controls autoplay> </audio>-->
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    * {
        /*outline: 1px solid #eee;*/
    }

    .blue {
        color: $base-theme-color;
    }

    .musicBox {
        user-select: none;
        -webkit-user-select: none;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        color: #fff;
        overflow: hidden;
        background: transparent radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
        box-sizing: border-box;
        .music {
            height: 200px;
            width: 700px;
            margin-bottom: 100px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            border-radius: 5px;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.5);
            .music--img {
                width: 200px;
                height: 200px;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;

                }
                &:after {
                    content: '';
                    position: absolute;
                    z-index: 99;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
                }
            }
            .music--infoBox {
                flex: 1;
                height: 100%;
                .music--info {
                    border: 1px solid transparent;
                    box-sizing: border-box;
                    width: 100%;
                    padding: 20px 20px 15px 20px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .nameBox {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 0;
                        .name {
                            color:$base-theme-color;
                        }
                        .heart {
                            cursor: pointer;
                            font-size: 30px;
                        }
                    }
                    .detail {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .left {
                            .player {

                            }
                            .album {

                            }
                        }
                        .right {
                            .publishTime {

                            }
                        }
                    }
                    .indicator {
                        $borderRadius: 6px;
                        $loadingBarHeight: 6px;
                        $barBorder: 4px;
                        $barHeight: 2*$barBorder+$loadingBarHeight;
                        .loadingBar {
                            position: relative;
                            height: $loadingBarHeight;
                            width: 100%;
                            background: #fff;
                            border-radius: $borderRadius;
                            margin-bottom: 5px;
                            .loading {
                                position: absolute;
                                left: 0;
                                top: 0;
                                background: $base-theme-color;
                                height: 100%;
                                border-radius: $borderRadius;
                            }
                            .bar {
                                cursor: pointer;
                                position: absolute;
                                top: -$barBorder;
                                margin-left: -$barHeight/2;
                                width: $barHeight;
                                height: $barHeight;
                                border-radius: 100%;
                                background: #fff;
                                border: $barBorder solid $base-theme-color;
                            }

                        }
                        .loadingTime {
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            .musicLoading {
                                margin-right: 5px;
                            }
                        }
                    }
                    .controller {
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        & > div {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            transition: all ease 500ms;
                            &:hover {
                                color: $base-theme-color;
                                border-color: $base-theme-color;
                            }
                        }
                        .sub {
                            height: 40px;
                            width: 40px;
                            font-size: 18px;
                            margin: 0 18px;
                        }
                        .main {
                            height: 50px;
                            width: 50px;
                            font-size: 25px;
                            .play-center {
                                position: relative;
                                left: 3px;
                            }
                            .pause-center {
                                position: relative;
                                left: 1px;
                            }
                        }
                        .circle {
                            border-radius: 100%;
                            border: 2px solid #fff;
                        }
                    }
                }
            }

        }
    }

    .index-copyright {
        position: absolute;
        bottom: 1%;
        text-align: center;
        width: 100%;
        left: 0;
    }

    @include media("<=phone") {

    }
</style>
<script>
    import Vue from 'vue'
    import copyright from '../components/copyright.vue'
    import {
            setPlayingStatus,
            setMusicDuration,
            setMusicRightNow,
            setCurrentMusic,
            setLoadingStatus,
            setCanAutoPlay,
    } from '../vuex/actions'

    import {secondsConvert} from "../utils/filters.js";

    Vue.filter('secondsConvert', secondsConvert);


    export default{
        data(){
            return {
                clear: '',
                musicList: [
                    {
                        coverUrl: 'http://p4.music.126.net/zYqptzyHld2ylpb5FOoqDA==/1785606883508227.jpg?param=200y200',
                        musicUrl: 'http://xiangsongtao.com/music_resource/Joel%20Hanson%20-%20Traveling%20Light.mp3',
                        name: 'Traveling Light',
                        player: 'Joel Hanson',
                        album: 'Traveling Light',
                    },
                    {
                        coverUrl: 'http://p4.music.126.net/Jm8cjfA9c8udNBnohoIzqA==/3239161256372553.jpg?param=200y200',
                        musicUrl: 'http://xiangsongtao.com/music_resource/Beirut.mp3',
                        name: 'Beirut',
                        player: 'Koi.',
                        album: 'Maelstrom',
                    },
                    {
                        coverUrl: 'http://p3.music.126.net/U_IlMiO7pWenOk0fuDdWvA==/2542070885314968.jpg?param=200y200',
                        musicUrl: 'http://xiangsongtao.com/music_resource/Explorers.mp3',
                        name: 'Explorers',
                        player: 'Koi.',
                        album: 'Beginnings',
                    },
                    {
                        coverUrl: 'http://p4.music.126.net/hH4UmteuzsqZHacrr3YS_g==/18358545649308968.jpg?param=200y200',
                        musicUrl: 'http://xiangsongtao.com/music_resource/China-X.mp3',
                        name: 'China-X',
                        player: '徐梦圆',
                        album: 'Change',
                    },
                    {
                        coverUrl: 'http://p3.music.126.net/DW-fId71WHtzfDJH_X5kBg==/7777945255137045.jpg?param=200y200',
                        musicUrl: 'http://xiangsongtao.com/music_resource/FarAway.mp3',
                        name: 'Far Away',
                        player: 'Yinyues',
                        album: 'Far Away',
                    },
                    {
                        coverUrl: 'http://p4.music.126.net/Vbf6B70-bHLgD4muejpcbQ==/5650390255232065.jpg?param=200y200',
                        musicUrl: 'http://xiangsongtao.com/music_resource/The%20Deysion%20-%20Perfect%20Day%20feat.%20R.I.B.mp3',
                        name: 'Perfect Day feat. R.I.B.',
                        player: 'The Deysion',
                        album: 'TOP25 Chill Emotion',
                    }
                ]
            }
        },
        methods: {
            /**
             * music的控制在App.vue中,方便全局管理
             * 只是展示与事件触发,通过vuex操作
             * */
            playCtrl(){
                let scope = this;
                scope.setPlayingStatus(!scope.isPlaying);
            },
            preCtrl(){
                let scope = this;
                let currentid = scope.musicList.indexOf(scope.currentMusicInfo);
                let index;
                if (currentid !== 0) {
                    index = currentid - 1;
                } else {
                    index = scope.musicList.length - 1;
                }
                scope.indexCtrl(index);
            },
            nextCtrl(){
                let scope = this;
                let currentid = scope.musicList.indexOf(scope.currentMusicInfo);
                let index;
                if (currentid !== (scope.musicList.length - 1)) {
                    index = currentid + 1;
                } else {
                    index = 0;
                }
                scope.indexCtrl(index);
            },
            // 从第几个开始
            indexCtrl(index){
                let scope = this;
                scope.ended();
                scope.setCurrentMusic(scope.musicList[index]);
                scope.beforeStart();
                scope.start();
                scope.setPlayingStatus(true);
            },
            init(){
                let scope = this;
                scope.setCurrentMusic(scope.musicList[0]);
                scope.beforeStart();
                scope.start();
            },
            //start之前的准备工作,比如清除上一个的播放数据
            beforeStart(){
                let scope = this;
                //监听播放完毕状态
                scope.MusicHandle.addEventListener('ended', function () {
                    scope.ended();
                    scope.nextCtrl();
//                    console.log("ended")
                });
                //监听加载状态
                scope.MusicHandle.addEventListener('canplay', function () {
//                    console.log("canplay")
                    scope.setLoadingStatus(false);
                    scope.setMusicDuration(scope.MusicHandle.duration)
                });
            },
            start(){
                let scope = this;
                scope.clear = setInterval(function () {
                    scope.setMusicRightNow(scope.MusicHandle.currentTime);
                }, 500)
            },
            ended(){
                let scope = this;
                clearInterval(scope.clear);
                scope.setPlayingStatus(false);
                scope.setMusicRightNow(0);
            },
            setAutoPlay(){
                let scope = this;
                scope.setCanAutoPlay(!scope.canAutoPlay)
                scope.$localStorage.$set('canAutoPlay', {
                    autoPlay: scope.canAutoPlay
                });
            }
        },
        components: {copyright},
        ready: function () {
            let scope = this;
            /**
             * music的控制在App.vue中,方便全局管理
             * 只是展示与事件触发,通过vuex操作
             * 初始化
             * */
            if (!scope.MusicHandle) {
                scope.init()
            }

            // 工具提示
            $('[data-toggle="tooltip"]').tooltip({
                trigger: 'hover',
                placement: 'right'
            });

            /**
             * music 播放的控制区
             * 是否自动播放
             * 进入初始化
             * */
            if (!!scope.$localStorage.canAutoPlay && !scope.isPlaying) {
                scope.setCanAutoPlay(scope.$localStorage.canAutoPlay.autoPlay);
                scope.setPlayingStatus(scope.$localStorage.canAutoPlay.autoPlay);
            }
        },
        vuex: {
            getters: {
                isPlaying: state=>state.isPlaying,
                isLoading: state=>state.isLoading,
                currentMusicInfo: state=>state.currentMusicInfo,
                MusicHandle: state=>state.handle,
                duration: state=>state.duration,
                rightNow: state=>state.rightNow,
                rightPercent: state=>state.rightPercent,
                canAutoPlay: state=>state.canAutoPlay,
            },
            actions: {
                setPlayingStatus,//该表播放状态
                setMusicDuration,
                setMusicRightNow,
                setCurrentMusic,
                setLoadingStatus,
                setCanAutoPlay,
            },
        },
    }
</script>
