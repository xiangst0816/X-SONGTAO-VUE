/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/

<!--内容区-->
<template>
    <div class="myInfo animated fadeIn">
        <!--我的信息title-->
        <h3 class="title">
            <i class="fa fa-fw fa-lg fa-user"></i> 我的信息 / <span class="blue">MYINFO</span>
        </h3>

        <div class="myInfoInner">
            <div class="myInfoInnerFlexBox">
                <!--我的详细信息-->
                <div class="infoDetail">
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12" for="name">昵称/Nickname</label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <input type="text" ng-click="setThis(myinfo.full_name)" ng-blur="save(myinfo.full_name)" class="form-control input-sm col-sm-12 inputContent" id="name" name="name"
                                   placeholder="姓名/Name" ng-model="myinfo.full_name">
                            <!--<span class="glyphicon glyphicon-ok form-control-feedback hidden" aria-hidden="true"></span>-->
                        </div>
                    </div>
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12 " for="position">职位/Position</label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <!--<p class="form-control-static inputContentStatic" ng-click="setInput($event)" ng-bind="myinfo.position"></p>-->
                            <input type="text" ng-click="setThis(myinfo.position)" ng-blur="save(myinfo.position)" class="form-control input-sm col-sm-12 inputContent" id="position" name="position"
                                   placeholder="职位/Position" ng-model="myinfo.position">
                            <!--<span class="glyphicon glyphicon-ok form-control-feedback hidden" aria-hidden="true"></span>-->
                        </div>
                    </div>
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12 " for="address">地址/Address</label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <!--<p class="form-control-static inputContentStatic" ng-click="setInput($event)" ng-bind="myinfo.address"></p>-->
                            <input type="text" ng-click="setThis(myinfo.address)" ng-blur="save(myinfo.address)" class="form-control input-sm col-sm-12 inputContent" id="address" name="address"
                                   placeholder="地址/Address" ng-model="myinfo.address">
                            <!--<span class="glyphicon glyphicon-ok form-control-feedback hidden" aria-hidden="true"></span>-->
                        </div>
                    </div>
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12" for="mood">心情/Motto</label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <input type="text" class="form-control input-sm col-sm-6 inputContent" id="mood" name="mood"
                                   ng-click="setThis(myinfo.motto)" ng-blur="save(myinfo.motto)"
                                   placeholder="心情/Mood" ng-model="myinfo.motto">
                        </div>
                    </div>
                </div>
                <!---->
                <!--头像img-->
                <div class="imgBox">
                    <div class="imgBoxInner">
                        <!--头像上传form-->
                        <form id="imgUpload" action="" class="dropzone" method="post" enctype="multipart/form-data">
                            <div class="dz-default dz-message"></div>
                        </form>
                        <img width="100%" ng-src=" " alt="我的头像">
                    </div>
                </div>

                <!--我的陈述-->
                <div class="personalState">
                    <label>我的介绍/MyIntroduce(Markdown)</label>
                    <div class="personalState__textarea">
                    <textarea
                            ng-click="setThis(myinfo.personal_state)" ng-blur="save(myinfo.personal_state)" id="personalState__textarea"
                            ng-model="myinfo.personal_state" placeholder="请填写我的介绍...."></textarea>
                    </div>
                </div>

                <!--修改用户名密码-->
                <div class="authorizationBox">
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12" for="name">登录验证信息/Authorization</label>
                        <form class="inputBox" name="auths">
                            <div class="col-sm-12" ng-class="{true:'has-error',false:''}[auths.username.$error.required]">
                                <input type="text" class="form-control input-sm col-sm-12 inputContent"
                                       placeholder="用户名/Username" name="username" ng-model="myinfo.username" required>
                                <label>用户名/Username</label>
                            </div>
                            <div class="col-sm-12" ng-class="{true:'has-error',false:''}[auths.password.$error.required]">
                                <input type="password" class="form-control input-sm col-sm-12 inputContent"
                                       placeholder="旧密码/Old Password" name="password" ng-model="myinfo.password" required>
                                <label>旧密码/Old Password</label>
                            </div>
                            <div class="col-sm-12" ng-class="{true:'has-error',false:''}[auths.new_password.$error.required]">
                                <input type="password" class="form-control input-sm col-sm-12 inputContent"
                                       placeholder="新密码/New Password" name="new_password" ng-model="myinfo.new_password" required>
                                <label>新密码/New Password</label>
                            </div>
                            <div class="buttonBox" ng-init="textState = 'Submit'" data-toggle="modal" data-target="#logoutBox">
                                <button ng-disabled="!auths.$valid || !!submitText" class="btn btn-danger">确认</button>
                                <span class="stateText" ng-bind="textState">Submit</span>
                            </div>
                        </form>
                    </div>
                </div>

                <!--最近登录记录-->
                <div class="loginRecord">
                    <label>登录记录/LoginRecord</label>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>登录IP</th>
                            <th>登录时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="item in myinfo.login_info  | orderBy:'login_time':true| limitTo:15">
                            <td ng-bind="$index+1"></td>
                            <td ng-bind="item.login_ip"></td>
                            <td ng-bind="item.login_time | date:'yyyy/MM/dd HH:mm:ss a'">登录时间</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .myInfo {
        overflow: hidden;
        height: 100%;
        .title {
            width: 100%;
            color: #fff;
            margin-bottom: 30px;
        }
        .myInfoInner {
            display: block;
            padding-bottom: 30px;
            //height: calc(100% - 77px);
            //overflow: scroll;
            .myInfoInnerFlexBox {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .imgBox {
                    width: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .imgBoxInner {
                        width: 180px;
                        height: 180px;
                        border-radius: 50%;
                        box-shadow: 0px 3px 12px #000;
                        overflow: hidden;
                        cursor: pointer;
                        position: relative;
                        img {
                            min-width: 100%;
                            min-height: 100%;
                            width: 100%;
                            height: 100%;
                        }
                        #imgUpload {
                            position: absolute;
                            height: 100%;
                            width: 100%;
                            opacity: 1;
                            padding: 0;
                            border: 0;
                            background-color: transparent;
                        }
                        .dropzone .dz-preview {
                            width: 180px;
                            height: 180px;
                            padding: 0;
                            margin: 0;
                            .dz-image {
                                width: 180px;
                                height: 180px;
                                padding: 0;
                                margin: 0;
                                img {
                                    max-width: 100%;
                                    max-height: 100%;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }

                //输入盒子 = label+input
                .inputGroup {
                    label {
                        color: #00b2e2;
                        margin-bottom: 5px;
                    }
                    .infoDetail__inputGroup {
                        height: 34px;
                        margin-bottom: 10px;
                        .inputContent {
                            font-size: 16px;
                            height: 34px;
                            background-color: #fff;
                            color: #333;
                            margin: 0 0 0 -11px;
                            //display: none;
                            border: 1px solid $base-theme-color;
                        }
                    }
                }
                //个人基本信息
                .infoDetail {
                    width: 50%;
                    color: #fff;
                }
                //我的心情
                .myMotto {
                    width: 100%;
                    color: #fff;
                }
                .personalState {
                    width: 100%;
                    //height: 400px;
                    margin-bottom: 30px;
                    label {
                        font-size: 16px;
                        color: #00b2e2;
                        font-weight: bold;
                        margin-bottom: 10px;
                        padding: 0 15px;
                    }
                    .personalState__textarea {
                        width: 100%;
                        padding: 0 5px;
                        position: relative;
                        textarea {
                            background-color: #fff;
                            color: #333;
                            border-radius: 3px;
                            border: 1px solid $base-theme-color;
                            padding: 11px;
                            line-height: 150%;
                            font-size: 16px;
                            margin: 0;
                            width: 100%;
                            height: 300px;
                            overflow-x: hidden;
                            resize: none;
                            outline: none;
                            transition: all ease 200ms;
                        }
                    }
                }

                .authorizationBox {
                    width: 100%;
                    margin-bottom: 30px;
                    .inputBox {
                        padding-top: 10px;
                        width: 100%;
                        position: relative;
                        padding-right: 60px;
                        @include display-flex;
                        @include justify-content(center);
                        @include align-items(center);
                        div {
                            flex: 1;
                        }
                        label {
                            margin-top: 5px;
                            color: #fff;
                            margin-bottom: 5px;
                            font-size: 12px;
                            text-align: right;
                            width: 100%;
                        }
                        .buttonBox {
                            width: 60px;
                            position: absolute;
                            right: 0;
                            button {
                                width: 100%;
                                height: 30px;
                                font-size: 14px;
                                color: #fff;
                                padding: 4px 12px;

                            }
                            .stateText {
                                color: #fff;
                                margin-top: 5px;
                                margin-bottom: 5px;
                                font-size: 12px;
                                text-align: right;
                                width: 100%;
                                display: inline-block;
                                max-width: 100%;
                                font-weight: 700;
                                padding: 0;
                                border: 0;
                                vertical-align: baseline;

                            }
                        }
                    }
                }

                .loginRecord {
                    width: 100%;
                    //height: 400px;
                    //margin-bottom: 30px;
                    label {
                        font-size: 16px;
                        color: #00b2e2;
                        font-weight: bold;
                        margin-bottom: 10px;
                        padding: 0 15px;
                    }
                    table {
                        th {
                            text-align: center;
                            color: #fff;
                            font-size: 16px;
                        }
                        td {
                            font-size: 14px;
                        }
                        text-align: center;
                        color: #fff;
                    }
                    .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
                        border-top: 1px solid rgba(132, 132, 132, 0.37)
                    }
                }
            }
        }
    }

</style>
<script>
    import Vue from "vue";
    import {GetMyInfoWithOriginal} from '../api/api_myinfo'
    import copyright from '../components/copyright.vue'
    module.exports = {
        data: function () {
            return {
                myinfo: {},
            }
        },
        created: function () {
            const scope = this;
            GetMyInfoWithOriginal().then((data)=> {
                scope.myinfo = data;
            },(err)=>{
                console.log('code:'+err)
            })


        },
        destroyed: function () {
        },
        components: {
            copyright
        },
//        vuex: {
//            getters: {
//                isShowMyWords: state=>state.isShowMyWords,
//            }
//
//        }
    }
</script>