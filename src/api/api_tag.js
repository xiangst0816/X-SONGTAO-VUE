/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 标签相关的api
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */
import API from "../config.js";
import Vue from "vue";

export const GetTagsListWithStructure = function () {
    return new Promise(function (resolve, reject) {
        Vue.http.get(API.getTagsListWithStructure).then((response) => {
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

export const GetTagsList = function () {
    return new Promise(function (resolve, reject) {
        Vue.http.get(API.getTagsList).then((response) => {
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