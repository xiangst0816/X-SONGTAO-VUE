/**
 * Created by xiangsongtao on 16/8/18.
 * Description: 上传
 * 图片上传前打压缩+方向矫正操作,传入file后接受成功或失败promise
 */

import API from "../config.js";
import Vue from "vue";
import  EXIF from "../plugin/canvasResize-master/exif.js"
window.EXIF = EXIF;
import  "../plugin/canvasResize-master/canvasResize.js"


//图片上传
export const ImageUpload = function (_file) {

    /**
     * 图片压缩+方向矫正处理
     * */
    function reOrientationAndSize(_file) {
        return new Promise(function (resolve, reject) {
            canvasResize(_file, {
                width: 710,//最大的尺寸,如果比这小是不会出现放大的情况的,文章宽度为710px
                height: 0,
                crop: false,
                quality: 80,
                //rotate: 90,
                callback: function (data, width, height) {
                    // 将图片改为二进制文件,准备上传
                    var blob = canvasResize('dataURLtoBlob', data);
                    var form = new FormData();
                    form.append('uploadImg', blob);
                    // 上传
                    resolve(form);
                }
            });
        })
    }

    /**
     * 文件上传
     * */
    function imageUpload(_form) {
        return new Promise(function (resolve, reject) {
            Vue.http.post(API.imgUpload, _form).then(function (result) {
                let response = result.data;
                console.log(response)
                if (parseInt(response.code) === 1) {
                    resolve(response.data);
                }else{
                    reject(response.code)
                }
            }, function (error) {
                reject(error)
            });
        })
    }
    
    //1. 传入filer参数
    return new Promise(function (resolve, reject) {
        // 2. 将img值进行方向矫正,裁剪压缩
        reOrientationAndSize(_file).then(function (_form) {
            // 3. 文件上传
            imageUpload(_form).then(function (_imgName) {
                resolve(_imgName);
            },function (err) {
                reject(err);
            });
        },function (err) {
            reject(err);
        });
    });
};