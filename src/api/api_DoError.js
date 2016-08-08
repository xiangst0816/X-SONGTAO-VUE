/**
 * Created by xiangsongtao on 16/8/8.
 * Description:
 */

import API from "../config.js";
import Vue from "vue";


export const DoError = function (code) {
    return new Promise(function (resolve, reject) {
        Vue.http.get(API.getArticleById.replace('id', articleId)).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                resolve(result.data);
            } else {
                reject(parseInt(result.code));
            }
        }, () => {
            reject(API.SYS_ERR);
        });
    });
};