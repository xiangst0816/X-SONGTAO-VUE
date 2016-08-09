/**
 * Created by xiangsongtao on 16/8/8.
 * Description:统一的错误处理
 * 统一的错误处理方法: 8-数据库查找错误；9-非admin用户；10-token错误或超时（（Token 2h内有效）
 * 其余由api自己处理: 2~5-失败；
 */
import Vue from "vue";
export const doError = function (code) {
    code = parseInt(code);
    switch (code) {
        case 8:
            history.back();
            console.log('数据库查找错误');
            break;
        case 9:
            alert("您没有操作权限!")
            console.log('非admin用户');
            break;
        case 10:
            console.log('token错误或超时,再登陆');
            //清空本地数据
            Vue.$localStorage.$reset();
            //修改登录状态
            $(document).trigger("ChangeLoginStatus",false);
            location.replace('/#');
            return 10;
            break;
        default:
            return code;
            break;
    }
};