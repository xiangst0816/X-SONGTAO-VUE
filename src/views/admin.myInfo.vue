/**
* Created by xiangsongtao on 16/7/24.
* Description: 后台 - 我的信息修改
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
                        <label class="col-sm-12">
                            昵称/Nickname
                            <i v-if="checkThis==='full_name'&&!!isSuccess" class="fa fa-check-circle"></i>
                        </label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <input type="text" @click="setThis(myinfo.full_name,'full_name')" v-on:blur="save(myinfo.full_name)" class="form-control input-sm col-sm-12 inputContent" id="name"
                                   name="name" placeholder="姓名/Name" v-model="myinfo.full_name">
                        </div>
                    </div>
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12">
                            职位/Position
                            <i v-if="checkThis==='position'&&!!isSuccess" class="fa fa-check-circle"></i>
                        </label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <input type="text" @click="setThis(myinfo.position,'position')" v-on:blur="save(myinfo.position)" class="form-control input-sm col-sm-12 inputContent" id="position" name="position" placeholder="职位/Position" v-model="myinfo.position">
                        </div>
                    </div>
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12">
                            地址/Address
                            <i v-if="checkThis==='address'&&!!isSuccess" class="fa fa-check-circle"></i>
                        </label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <input type="text" @click="setThis(myinfo.address,'address')" v-on:blur="save(myinfo.address)" class="form-control input-sm col-sm-12 inputContent" id="address" name="address" placeholder="地址/Address" v-model="myinfo.address">
                        </div>
                    </div>
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12">
                            心情/Motto
                            <i v-if="checkThis==='motto'&&!!isSuccess" class="fa fa-check-circle"></i>
                        </label>
                        <div class="col-sm-12 infoDetail__inputGroup">
                            <input type="text" class="form-control input-sm col-sm-6 inputContent" id="mood" name="mood"
                                   @click="setThis(myinfo.motto,'motto')" v-on:blur="save(myinfo.motto)"
                                   placeholder="心情/Mood" v-model="myinfo.motto">
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
                        <img class="img-circle headerImg" :src="myinfo.img_url | addImgPrefix">
                    </div>
                </div>

                <!--我的陈述-->
                <div class="personalState">
                    <label>
                        我的介绍/MyIntroduce(Markdown)
                        <i v-if="checkThis==='personal_state'&&!!isSuccess" class="fa fa-check-circle"></i></label>
                    <div class="personalState__textarea">
                    <textarea
                            @click="setThis(myinfo.personal_state,'personal_state')" v-on:blur="save(myinfo.personal_state)" id="personalState__textarea"
                            v-model="myinfo.personal_state" placeholder="请填写我的介绍...."></textarea>
                    </div>
                </div>
                <!--修改用户名密码-->
                <div class="authorizationBox">
                    <div class="inputGroup clearfix">
                        <label class="col-sm-12" for="new_password">登录验证信息/Authorization</label>
                        <form class="inputBox">
                            <div class="col-sm-12" :class="{'has-error':!myinfo.username}">
                                <input type="text" class="form-control input-sm col-sm-12 inputContent"
                                       placeholder="用户名/Username" name="username" v-model="myinfo.username" required>
                                <label>用户名/Username</label>
                            </div>
                            <div class="col-sm-12" :class="{'has-error':!myinfo.password}">
                                <input type="password" class="form-control input-sm col-sm-12 inputContent"
                                       placeholder="旧密码/Old Password" name="password" v-model="myinfo.password" required>
                                <label>旧密码/Old Password</label>
                            </div>
                            <div class="col-sm-12" :class="{'has-error':!myinfo.new_password}">
                                <input type="password" class="form-control input-sm col-sm-12 inputContent" id="new_password"
                                       placeholder="新密码/New Password" name="new_password" v-model="myinfo.new_password" required>
                                <label>新密码/New Password</label>
                            </div>
                            <div class="buttonBox" data-toggle="modal" data-target="#logoutBox">
                                <button v-bind:disabled="!myinfo.username||!myinfo.password||!myinfo.new_password" class="btn btn-danger" @click.prevent="changeAuthorizationInfo()">确认</button>
                                <span class="stateText">{{textState}}</span>
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
                        <tr v-for="item in myinfo.login_info | orderBy 'login_time' -1 | limitBy 15">
                            <td>{{$index+1}}</td>
                            <td>{{item.login_ip}}</td>
                            <td>{{item.login_time | moment "YYYY/MM/DD HH:mm:ss dddd"}}</td>
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

                        .headerImg {
                            min-width: 100%;
                            min-height: 100%;
                            width: 100%;
                            height: 100%;
                            /*position: relative;*/
                            /*z-index: 999;*/
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
                        .dz-default {
                            display: none;
                        }
                        .dz-preview {
                            display: none !important;
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
                    label {
                        font-size: 16px;
                    }
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
                    .inputGroup {
                        label {
                            font-size: 16px;
                        }
                    }
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
    import {
            GetMyInfoWithOriginal,
            PostMyInfo,
    } from '../api/api_myinfo'

    import API from '../config'
    import Dropzone from '../plugin/dropzone'

    import {ChangePassword} from '../api/api_auth'
    import copyright from '../components/copyright.vue'
    import {addImgPrefix} from "../utils/filters.js";
    import {setLoginState} from '../vuex/actions'
    module.exports = {
        data: function () {
            return {
                myinfo: {},
                changedValue: '',
                textState: 'Submit',
                checkThis: '',
                isSuccess: false,
            }
        },
        methods: {
            setThis: function (value, key) {
                this.checkThis = key;
                this.changedValue = value;
            },
            save: function (value) {
                const scope = this;
                if (this.changedValue !== value) {
                    let params = {
                        _id: scope.myinfo._id,
                        full_name: scope.myinfo.full_name,
                        position: scope.myinfo.position,
                        address: scope.myinfo.address,
                        motto: scope.myinfo.motto,
                        personal_state: scope.myinfo.personal_state,
                        img_url: scope.myinfo.img_url
                    };
                    PostMyInfo(params).then((data)=> {
                        scope.isSuccess = true;
                        setTimeout(function () {
                            scope.isSuccess = false;
                        },500);
                    })
                }
            },
            //修改登录信息
            changeAuthorizationInfo: function () {
                const scope = this;
                if (!scope.myinfo.username) {
                    alert('用户名无效');
                    return false;
                }
                if (!scope.myinfo.password) {
                    alert('旧密码无效');
                    return false;
                }
                if (!scope.myinfo.new_password) {
                    alert('新密码无效');
                    return false;
                }

                let params = {
                    _id: scope.myinfo._id,
                    username: scope.myinfo.username,
                    password: scope.myinfo.password,
                    new_password: scope.myinfo.new_password,
                };
                ChangePassword(params).then((data)=> {
                    scope.textState = '成功!';
                    //密码修改成功,需要提示用户重新登录,自动退出!
                    alert("给出提示,xxs后请从新登陆")
                    setTimeout(function () {
                        scope.$localStorage.$reset();
                        scope.setLoginState(false);//设置全局登录状态
                        scope.$router.go({
                            name: 'login'
                        });//跳转

                    }, 1200, true);
                }, ()=> {
                    scope.textState = '失败!';
                })
            },
        },
        created: function () {
            const scope = this;
            /**
             * 获取原始个人信息
             * */
            GetMyInfoWithOriginal().then((data)=> {
                scope.myinfo = data;
            },(code)=>{
                console.log("code:"+code)
            })

        },
        ready: function () {
            const scope = this;


            /**
             * imgUpload 配置
             * */
            let config = {
                url: API.imgUpload,
                maxFilesize: 1000,
                paramName: "uploadImg",
                maxThumbnailFilesize: 10,
                parallelUploads: 1,
                //自动上传
                autoProcessQueue: true,
                previewsContainer: false,
            };
            let dropzone = new Dropzone('#imgUpload', config);
            dropzone.on('success', function (file, response) {
                if (parseInt(response.code) === 1) {
                    scope.myinfo.img_url = response.data;
                    scope.changedValue = false;
                    scope.save(true);
                }
            });
        },
        destroyed: function () {
        },
        components: {
            copyright
        },
        vuex: {
            getters: {
//                isShowMyWords: state=>state.isShowMyWords,
            },
            actions: {
                // 注意在这里你需要 `getMyInfo` 函数本身而不是它的执行结果 'getMyInfo()'
                setLoginState,//设置登录否
            }

        }
    }
</script>