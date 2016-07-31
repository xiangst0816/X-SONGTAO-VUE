/**
 * Created by xiangsongtao on 16/7/30.
 * Description:
 */


import API from "../../config.js"
import Vue from "vue";
export default {
    get (cb) {
        // cb("success");
        Vue.http.get(API.getMyInfo).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                console.log('cb(result.data)');
                console.log(result.data);
                cb(result.data);
                // this.myinfo = result.data;
            } else {
                alert("请求失败!")
            }
        }, (response) => {
            console.log('GetMyInfo err')
            console.log(response)
        });
    },

    // set (products, cb, errorCb) {
    //     setTimeout(() => {
    //         // simulate random checkout failure.
    //         (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
    //             ? cb()
    //             : errorCb()
    //     }, 100)
    // }
}