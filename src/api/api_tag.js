/**
 * Created by xiangsongtao on 16/7/30.
 * Description: 标签相关的api
 * 只由actions.js调用,返回成功的结果,否则返回空,错误由自己处理显示
 */
import API from "../config.js";
import Vue from "vue";

/**
 * 博客的标签库使用到的,带有数据结构的标签列表
 * */
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

/**
 * 后台列表展示时用的,纯列表
 * */
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

/**
 * 新增标签
 * */
export const AddTag = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.post(API.addTag,params).then((response) => {
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

/**
 * 删除标签
 * */
export const DeleteTag = function (id) {
    return new Promise(function (resolve, reject) {
        Vue.http.delete(API.deleteTag.replace('id', id)).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                resolve(result);
            } else {
                reject(parseInt(result.code));
            }
        }, () => {
            reject(API.SYS_ERR)
        });
    })
};

/**
 * 修改标签
 * */
export const EditTag = function (params) {
    return new Promise(function (resolve, reject) {
        Vue.http.put(API.editTag,params).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                resolve(result);
            } else {
                reject(parseInt(result.code));
            }
        }, () => {
            reject(API.SYS_ERR)
        });
    })
};