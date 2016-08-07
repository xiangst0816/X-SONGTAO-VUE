<template>
    <!--admin-comment-弹出层-撰写评论-->
    <div class="modal fade comment--replyBox" id="addComm" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title"><i class="fa fa-comments"></i> 进行评论/ADDCOMMENT</h4>
                </div>
                <div class="modal-body comment--replyBox-body">
                    <div class="comment--replyBox--textarea">
                        <label for="comment--replyBox--textarea">回复 <span>{{replyBox.name}}</span>: </label>
                        <textarea v-model="content" rows="6" id="comment--replyBox--textarea" class="form-control" placeholder="请输入评论内容..."></textarea>
                    </div>

                    <!--<h3 class="text-center deleteConfirmText">确认删除此评论?</h3>-->
                </div>
                <div class="modal-footer">
                    <span class="submitText">{{submitText}}</span>
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button ng-disabled="!!submitText" type="button" data-dismiss="modal" ng-click="confirmAddComment(replyBox)" class="btn btn-success">
                        评论
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    #addComm{

    }

</style>
<script>
    export default{
        data(){
            return {
                content: '',
                submitText: '',
            }
        },
//        props: [
//            'replyBox',
//        ],
        methods: {
            submit: function () {

                if(!this.content){
                    alert("请输入评论内容!");
                    return;
                }
//                this.$dispatch('replyThisComment', {
//                    content: this.content,
//                    name: this.name,
//                    email: this.email,
//                    article_id: this.articleId,
//                    pre_id: this.preId,
//                })
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
