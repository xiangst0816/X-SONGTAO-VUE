<!--<template>-->
    <!--&lt;!&ndash;admin-comment-弹出层-撰写评论&ndash;&gt;-->

<!--</template>-->
<!--<style scoped lang="scss">-->
    <!--//base-->
    <!--@import "../theme/theme.scss";-->

    <!--#addComm{-->

    <!--}-->

<!--</style>-->
<!--<script>-->
    <!--export default{-->
        <!--data(){-->
            <!--return {-->
                <!--content: '',-->
                <!--submitText: '',-->
            <!--}-->
        <!--},-->
<!--//        props: [-->
<!--//            'replyBox',-->
<!--//        ],-->
        <!--methods: {-->
            <!--submit: function () {-->

                <!--if(!this.content){-->
                    <!--alert("请输入评论内容!");-->
                    <!--return;-->
                <!--}-->
<!--//                this.$dispatch('replyThisComment', {-->
<!--//                    content: this.content,-->
<!--//                    name: this.name,-->
<!--//                    email: this.email,-->
<!--//                    article_id: this.articleId,-->
<!--//                    pre_id: this.preId,-->
<!--//                })-->
            <!--}-->
        <!--},-->
        <!--ready: function () {-->

            <!--this.$on('ADMIN_ADD_COMMENT', function (msg) {-->
                <!--console.log('ADMIN_ADD_COMMENT-on')-->
            <!--})-->
        <!--},-->
        <!--events:{-->
            <!--'ADMIN_ADD_COMMENT':function (data) {-->
                <!--console.log("ADMIN_ADD_COMMENT")-->
                <!--console.log(data)-->
            <!--},-->
        <!--}-->
    <!--}-->
<!--</script>-->
