/**
 * Created by xiangsongtao on 16/8/8.
 * Description:统一的错误处理
 * 统一的错误处理方法: 8-数据库查找错误；9-非admin用户；10-token错误或超时（（Token 2h内有效）
 * 其余由api自己处理: 2~5-失败；
 */
import Vue from "vue";

let vm = new Vue();
export const doError = function (code) {
    code = parseInt(code);
    switch (code) {

        case 8:

            history.back();

            console.log('数据库查找错误');
            break;
        case 9:
            history.back();
            console.log('非admin用户');
            break;
        case 10:
            console.log('token错误或超时,再登陆');
            vm.$storage.doLogout()
            Vue.$localStorage.$reset();
            console.log(vm)
            location.replace('/#')
            break;
        default:
            return code;
            break;
    }
};