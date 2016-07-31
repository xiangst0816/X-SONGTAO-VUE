/**
 * Created by xiangsongtao on 16/7/30.
 * Description:
 */
import CONFIG from "../../config.js"
import Vue from "vue";
export default {
    getTagsListWithStructure (cb) {
        // cb("success");
        Vue.http.get(CONFIG.getTagsListWithStructure).then((response) => {
            // success callback
            let result = response.data;
            if (parseInt(result.code) === 1) {
                cb(result.data);
                // this.myinfo = result.data;
            } else {
                alert("请求失败!")
            }
        }, (response) => {
            console.log('GetMyInfo err')
            console.log(response)
        });
    }
}