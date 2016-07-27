<!--内容区-->
<template>
    <div class="app__content">
        <!--导航条-->
        <blog-nav></blog-nav>
        <!-- 路由外链 -->
        <router-view></router-view>
    </div>
</template>

<script>
    import blogNav from "./views/blog.nav";
//    import "../assets/demo-13.jpg";
    module.exports = {
        replace: false,
        data: function () {
            return {
//            authenticating: false,
//            isIndex:true
            }
        },
        components: {
            blogNav
        }
    }
</script>

<style lang="scss">
    @import "./theme/theme.scss";
    html {
        padding: 0;
        min-height:100%;
    }

    body {
        padding: 0;
        margin: 0;
        font-size:16px;
        min-width: 320px;
        min-height:100%;
        width: 100%;
        box-sizing: border-box;
        font-family: $font-family-sans-serif;
        background: url(./assets/demo-13.jpg) no-repeat center center/cover;
        background-attachment:fixed;
        //background: transparent radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
        &.isLogin {
            .admin_btn {
                display: block;
            }
        }
        .admin_btn {
            display: none;
        }
    }

    @include media(">desktop_small") {
        body {
            padding-left: 45px;
        }
    }
    /*内容区*/
    .app__content {
        width: 100%;
    }
</style>
