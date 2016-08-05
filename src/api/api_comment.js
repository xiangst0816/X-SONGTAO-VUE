/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 评论相关的api
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */
import API from "../config.js"
import Vue from "vue";

export const GetArticleComments = function (articleId) {
    return new Promise(function(resolve, reject) {
        Vue.http.get(API.getArticleComments.replace('article_id', articleId)).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                resolve(result.data);
            } else {
                reject(parseInt(result.code));
            }
        }, () => {
            reject(API.SYS_ERR)
        });
    })
};
export const SendComment = function (params) {
    return new Promise(function(resolve, reject) {
        Vue.http.post(API.newComment,params).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                resolve(result.data);
            } else {
                reject(parseInt(result.code));
            }
        }, () => {
            reject(API.SYS_ERR)
        });
    });
};