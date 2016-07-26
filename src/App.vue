<!--内容区-->
<template>
    <div class="blog__content">
        <!--导航条-->
        <blog-nav></blog-nav>
        <!-- 路由外链 -->
        <router-view></router-view>
    </div>
</template>

<script>
    import blogNav from "./views/blog.nav";
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

    /*内容区*/
    .blog__content {
        width: 100%;
        height: 100%;
        background: #7c7c7c;
    }
</style>
