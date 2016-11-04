<template>
  <div class="commentBox" :class="{'active':!hasNickName}">
    <!--问题盒子-->
    <div class="commentBox__questionBox">
      <input ng-focus="chain.selectId=''" class="commentBox__questionBox--input" type="text" placeholder="我要说几句"
             v-model="content">
      <button v-bind:disabled="!content" class="btn commentBox__questionBox--reply" @click="submit()">
        <span>提交</span>
      </button>
    </div>
    <!--个人信息-->
    <div class="commentBox__info">
      <div class="commentBox__info--input">
        <label for="name">昵称:</label>
        <input id="name" type="text" placeholder="请输入昵称!" v-model="name" required>
      </div>
      <div class="commentBox__info--input ">
        <label for="mail">邮箱: </label>
        <input type="email" id="mail" name="mail" placeholder="example@domain.com" v-model="email" required
               pattern="\w+@[a-z0-9]+\.[a-z]+" title="example@domain.com">
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
<script type="text/javascript">

  import Vue from 'vue';
  import {Toast} from 'mint-ui';
  import  'mint-ui/lib/toast/style.css';
  import {GetArticleComments, SendComment} from "../api/api_comment"
  export default{
    data(){
      return {
        hasNickName: false,
        content: null,//评论信息
        name: null,//评论人名称
        email: null,//评论人邮箱
      }
    },
    props:{
      //文章id
      articleId: {
        type: String,
        require: true,
      },
      //前置id，如果是根评论则是文章id，如果是子评论则为父评论的id
      preId: {
        type: String,
        require: true,
      },
    },

    methods: {
      submit: function () {
        let _this = this;
        if (!_this.hasNickName) {
          if (!_this.name) {
            Toast({
              message: '请输入昵称', iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });
            return
          }
          if (!_this.email) {
            Toast({
              message: '请输入邮箱', iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });
            return
          }
          if (!/^\w+@[1-9a-z]+(\.[a-z]+){1,3}$/.test(_this.email)) {
            Toast({
              message: '邮箱格式输入错误',
              iconClass: 'fa fa-warning',
              position: 'center',
              duration: 3000
            });
            return
          }
          _this.$localStorage.$set({
            commentInfo: {
              name: _this.name,
              email: _this.email
            }
          });
          this.hasNickName = true;
        }

        let params = {
          article_id: _this.articleId,
          pre_id: _this.preId,
          next_id: [],
          name: _this.name,
          email: _this.email,
          time: new Date(),
          content: _this.content,
          state: false,
          isIReplied: false
        }

        SendComment(params).then(()=> {
          Toast({
            message: '评论成功，正在审核！',
            iconClass: 'fa fa-check',
            position: 'center',
            duration: 3000
          });
          this.toggle = !this.toggle;
          _this.content = '';
          console.log("SubmitSuccess")
        }, (error)=> {
          console.log(error)
          console.log("SubmitFailure")
        });
      }
    },
    created: function () {
      let _this = this;
      /**
       * 获取游客昵称及邮箱,并设置input显示与否
       * */
      let commentInfo = _this.$localStorage.commentInfo
      if (!!commentInfo && !!commentInfo.name && !!commentInfo.email) {
        _this.hasNickName = true;
        _this.name = commentInfo.name;
        _this.email = commentInfo.email;
      } else {
        _this.hasNickName = false;
      }
    },
    mounted: function () {

    },
  }

</script>
