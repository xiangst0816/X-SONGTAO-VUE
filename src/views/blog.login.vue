/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/

<!--内容区-->
<template>
    <div class="login container-fulid  animated fadeIn">
        <div class="login-content">
            <div class="login-content-inner clearfix">
                <h1><span class="blue">X</span>-SONGTAO</h1>
                <h4><span class="blue">后台</span>管理</h4>
                <div class="divider"></div>
                <div class="form-horizontal" v-on:keydown.enter="loginBtn()">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input autofocus v-on:keydown="errText=''" class="form-control" id="username" type="text" name="username" v-model="username" placeholder="用户名">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input v-on:keydown="errText=''" class="form-control" id="password" type="password" name="password" v-model="password" placeholder="密码">
                        </div>
                    </div>
                    <div class="btnGroup">
                        <span class="errText">{{errText}}</span>
                        <button @click="loginBtn()" class="btn btn-x-songtao">登陆</button>
                    </div>
                </div>
            </div>
        </div>
        <section class="index-copyright">
            <copyright></copyright>
        </section>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";
    //登录页面
    .login {
        position: absolute;
        height: 100%;
        width: 100%;
        .login-content {
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            height: 100%;
            background: transparent radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
            left: 0;
            top: 0;
            width: 100%;
            .blue {
                color: $base-theme-color;
            }
            .login-content-inner {
                width: 300px;
                text-align: right;
                box-sizing: content-box;
                padding: 30px;
                margin-bottom: 110px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 5px;
                h1, h4 {
                    color: #fff;
                }
                .divider {
                    width: 30px;
                    height: 3px;
                    background-color: #49c8fb;
                    float: right;
                    margin: 0px auto 15px;
                }

                .btnGroup {
                    .errText {
                        color: $base-red-color;
                        margin-right: 10px;

                    }
                    //登录按钮
                    .btn-x-songtao {
                        width: 100px;
                        background-color: $base-theme-color;
                        transition: all ease 300ms;
                        color: #fff;
                        &:hover {
                            color: #fff;
                            background-color: #49c8fb;
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
    }

</style>
<script>
    import Vue from "vue";
    import API from "../config.js"
    import {Login} from "../api/api_auth";
    import {setLoginState} from '../vuex/actions'
    import copyright from '../components/copyright.vue'
    module.exports = {
        data: function () {
            return {
                username: '',
                password: '',
                errText: '',
            }
        },
        methods: {
            loginBtn: function () {
                const scope = this;

                if (!scope.username) {
                    scope.errText = "请输入用户名!";
                    return;
                }
                if (!scope.password) {
                    scope.errText = "请输入密码!";
                    return;
                }


                Login({
                    username: scope.username,
                    password: scope.password,
                }).then(function (response) {
                    //权限信息
                    scope.$localStorage.$set('authorization', {
                        token: response.token,
                        time: new Date().getTime()
                    });
                    //我进行评论的信息
                    if (scope.username.indexOf("visitor") !== -1) {
                        scope.$localStorage.$set('commentInfo', {
                            "name": "Visitor",
                            "email": "visitor@email.com"
                        });
                    } else {
                        scope.$localStorage.$set('commentInfo', {
                            "name": API.MY,
                            "email": API.EMAIL
                        });
                    }
                    // 设置请求的token
                    Vue.http.headers.common['authorization'] = "token " + response.token;


                    console.log('login-success')

                    //开启tooltip
//                        $rootScope.tooltip();
                    scope.setLoginState(true);//设置全局登录状态
                    scope.$router.go({//跳转
                        name: 'index'
                    });

                }, (err)=> {
                    switch (parseInt(err)) {
                        case 2:
                            scope.errText = "用户名或密码错误,请再检查!";
                            break;
                        default:
                            scope.errText = "系统错误!";
                            break;
                    }
                    console.log('err:' + err)
                })
            }
        },
        ready: function () {
        },
        destroyed: function () {
        },
        components: {
            copyright
        },
        vuex: {
            getters: {
                isLogin: state=>state.isLogin,
            },
            actions: {
                // 注意在这里你需要 `getMyInfo` 函数本身而不是它的执行结果 'getMyInfo()'
                setLoginState,//设置登录否
            }
        }
    }
</script>
