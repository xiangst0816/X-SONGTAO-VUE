/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 评论相关的api
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */
import CONFIG from "../../config.js"
import Vue from "vue";
export default {
    getArticleComments (articleId,cb) {
        // cb("success");
        Vue.http.get(CONFIG.getArticleComments.replace('article_id', articleId)).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                cb(result.data);
            } else {
                alert("请求失败!")
            }
        }, (response) => {
            console.log('GetMyInfo err')
            console.log(response)
        });
    }
}