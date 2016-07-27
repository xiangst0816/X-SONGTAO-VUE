/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="aritcleList">
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。
                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签2</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。


                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                        <i class="fa fa-tag"></i> <span>标签2</span>
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。


                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                        <i class="fa fa-tag"></i> <span>标签2</span>
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。


                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                        <i class="fa fa-tag"></i> <span>标签2</span>
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。


                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                        <i class="fa fa-tag"></i> <span>标签2</span>
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。


                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                        <i class="fa fa-tag"></i> <span>标签2</span>
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。


                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                        <i class="fa fa-tag"></i> <span>标签2</span>
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
        <article class="article">
            <div class="article__header">
                <h2 class="article__header--title">IONIC开发——综述</h2>
                <div class="article__header--content">
                    这个项目使用IONIC1.x构建，适用于微信app+IOS+Android项目，该项目主要进行会员管理、活动展示、客服、地图、导航、店铺展示、积分礼品卡券等数据展示，故使用WebApp的方式构建能实现快速开发。到目前为止未引用IONIC之外的组件库，自身已完全够用，考虑到项目整体大小，能使用到jQuery的地方都使用原生js实现；需要组件的能自己写的不引入额外库。关于显示效果及兼容性：
                    IOS手机微信及APP显示效果极佳，能媲美原生应用；安卓微信则会有些卡顿，针对安卓我将进行降级处理，关闭动画及动效。一年内新出的安卓机能在微信中流程运行。


                </div>
            </div>
            <div class="article__infobox">
                <div class="article__info">
                    <div class="article__info--each">
                        <i class="fa fa-calendar"></i>
                        <span am-time-ago="article.publish_time">三天前</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-book"></i>
                        阅读数
                        <span class="article-readnum">223</span>
                    </div>
                    <div class="article__info--each">
                        <i class="fa fa-comments"></i>
                        评论数
                        <span class="article-comment">23</span>
                    </div>
                    <div class="article__info--each hidden-xs">
                        <i class="fa fa-tag"></i> <span>标签1</span>
                        <i class="fa fa-tag"></i> <span>标签2</span>
                        <i class="fa fa-tag"></i> <span>标签3</span>
                    </div>
                </div>

                <div class="arrticle__readmore hidden-xs">
                    <span>阅读更多</span>
                </div>
            </div>
        </article>
    </div>
</template>
<style scoped lang="scss">
    @import "../theme/theme.scss";

    /*内容区*/
    .aritcleList {
        .article {
            user-select: none;
            -webkit-user-select: none;
            box-sizing: border-box;
            margin-bottom: 30px;
            cursor: pointer;
            border-radius: 4px;
            overflow: hidden;

            &:hover .article__header .article__header--title {
                color: $base-theme-color;
                &:after {
                    border-top: 3px solid $base-theme-color;
                }
            }
            //&:hover .article__infobox .arrticle__readmore span {
            //  background-color: $base-theme-color;
            //}
            //标题
            .article__header {
                padding: 35px;
                color: #000;
                font-size: 20px;
                line-height: 28px;
                background: #fff;
                position: relative;
                //&:after {
                //  content: '';
                //  position: absolute;
                //  top: 0;
                //  right: 0;
                //  height:0;
                //  border-top: 2px solid $base-theme-color;border-top-right-radius: 3px;
                //
                //  background: $base-theme-color;
                //  width: 40%;
                //}
                //title
                .article__header--title {
                    text-align: right;
                    color: #333;
                    transition: color ease 200ms; position: relative;
                    padding-bottom:20px;
                    margin:0;
                    font-size:30px;
                    font-weight: 500;
                    line-height: 1.2;
                    &:after {
                        transition: color ease 200ms;
                        content: '';
                        position: absolute;
                        bottom: 10px;
                        right: 0;
                        height:0;
                        border-top: 3px solid $base-theme-color;
                        border-top-right-radius: 3px;
                        border-bottom-right-radius: 3px;

                        //background: #333;
                        width: 10%;
                    }
                }
                //内容
                .article__header--content {
                    color: #999;
                    line-height: 24px;
                    font-size: 16px;
                    overflow: hidden;
                    p {
                        margin: 0;
                    }
                }
            }
            //文章信息
            .article__infobox {
                @include display-flex;
                @include justify-content(space-between);
                @include align-items(center);
                background: $base-background-color;
                padding: 14px 35px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.8) inset;
                transition: all ease 200ms;
                .article__info {
                    @include display-flex;
                    @include justify-content(flex-start);
                    @include align-items(center);
                    .article__info--each {
                        color: #eee;
                        margin-right: 20px;
                        font-size: 14px;
                        white-space: nowrap;
                    }
                }
                //阅读更多
                .arrticle__readmore {
                    span {
                        border: 1px solid $base-theme-color;
                        transition: all ease 200ms;
                        border-radius: 34px;
                        color: #eee;
                        padding: 4px 22px;
                        font-size: 16px;
                    }

                }
            }

        }
    }


</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
