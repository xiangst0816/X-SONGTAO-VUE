/**
 * Created by xiangsongtao on 16/7/31.
 * Description:
 */
import CONFIG from "../config.js";
/**
 * 给图片加前缀
 * */
export const addImgPrefix = function (imgName) {
    if (!!imgName && imgName.indexOf('http') === -1) {
        //正确的时间戳
        return `${CONFIG.imgResource}${imgName}`;
    } else if (!imgName) {
        return false;
    } else {
        return imgName;
    }
}