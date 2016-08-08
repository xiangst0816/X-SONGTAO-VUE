/**
 * Created by xiangsongtao on 16/8/8.
 * Description:
 */

import API from "../config.js";
import Vue from "vue";


export const DoError = function (code) {
    switch(parseInt(code)){

    }


    // code：1-成功；2~5-失败；8-数据库查找错误；9-非admin用户；10-token错误或超时（（Token 2h内有效）;


    return new Promise(function (resolve, reject) {
       if(code){

       }
    });
};