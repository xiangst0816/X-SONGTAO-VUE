<template>
    <div class="commentBox" :class="{'active':!hasNickName}">
        <!--问题盒子-->
        <div class="commentBox__questionBox">
            <input ng-focus="chain.selectId=''" class="commentBox__questionBox--input" type="text" placeholder="我要说几句" v-model="content">

            <button class="btn commentBox__questionBox--reply" @click="submit()">
                <span>提交</span>
            </button>
        </div>
        <!--个人信息-->
        <div class="commentBox__info">
            <div class="commentBox__info--input">
                <label>昵称:</label>
                <input type="text" placeholder="请输入昵称!" v-model="name">
            </div>
            <div class="commentBox__info--input ">
                <label>邮箱: </label>
                <input type="text" placeholder="请输入邮箱!" v-model="email">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .commentBox {
        width: 100%;
        box-sizing: border-box;
        position: relative;
        height: 50px;
        transition: all ease 200ms;
        z-index: 1;
        margin: 0;
        /*padding: 0 35px;*/
        .commentBox__questionBox {
            position: relative;
            height: 50px;
            z-index: 10;
            .commentBox__questionBox--input {
                width: 100%;
                border-radius: 5px;
                border: 1px solid $base-theme-color;
                height: 100%;
                padding-left: 20px;
                padding-right: 78px;
                &::-webkit-input-placeholder {
                    color: #a8a8a8;
                }
            }
            .commentBox__questionBox--reply {

                position: absolute;
                right: 0;
                top: 0;
                height: 50px;
                box-sizing: border-box;
                border-bottom-right-radius: 5px;
                border-top-right-radius: 5px;

                background: $base-theme-color;
                color: #fff;
                //height: 100%;
                padding: 0 18px;
                @include display-flex;
                @include justify-content(center);
                @include align-items(center);
                font-size: 14px;

                transition: all ease 200ms;
                &:active,
                &.activated {
                    background: darken($base-theme-color, 10%);
                }
            }
        }
        .commentBox__info {
            @include display-flex;
            @include justify-content(center);
            @include align-items(center);
            height: 50px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
            transition: all ease 200ms;
            opacity: 0;
            margin: 5px 0;
            .commentBox__info--input {
                /*flex: 1;*/
                @include display-flex;
                @include justify-content(center);
                @include align-items(center);
                margin: 0 10px;
                color: #eee;

                label {
                    margin-right: 10px;

                }
                input {
                    border-radius: 5px;
                    border: 1px solid $base-theme-color;
                    height: 32px;
                    width: 220px;
                    color: #464642;
                    padding: 0 10px;
                    font-size: 14px;
                    &::-webkit-input-placeholder {
                        color: #a8a8a8;
                    }
                }

            }

        }
        &.active {
            height: 100px;
            .commentBox__info {
                transform: translateY(50px);
                opacity: 1;
            }
        }
    }

</style>
<script>
    export default{
        data(){
            return {
                content: '',
                name: '',
                email: '',
            }
        },
        props: [
            'hasNickName',
            'articleId',
            'preId',
        ],
        methods: {
            submit: function () {

                if(!this.content){
                    alert("请输入评论内容!");
                    return;
                }
                this.$dispatch('replyThisComment', {
                    content: this.content,
                    name: this.name,
                    email: this.email,
                    article_id: this.articleId,
                    pre_id: this.preId,
                })
            }
        },
        ready: function () {

        },
        events:{
            'Submitting':function () {
                console.log("Submitting")
            },
            'SubmitSuccess':function () {
                this.content='';
                console.log("SubmitSuccess")
            },
            'SubmitFailure':function () {
                console.log("SubmitFailure")
            },
        }
    }
</script>
