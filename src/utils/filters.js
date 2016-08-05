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

/**
 * 将月转化为因为首字母大写简写的形式
 * 1 -> JUN
 * */
export const num2MMM = function (value) {
    switch (parseInt(value)) {
        case 1:
            return "Jan";
            break;
        case 2:
            return "Feb";
            break;
        case 3:
            return "Mar";
            break;
        case 4:
            return "Apr";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "Jun";
            break;
        case 7:
            return "Jul";
            break;
        case 8:
            return "Aug";
            break;
        case 9:
            return "Sept";
            break;
        case 10:
            return "Oct";
            break;
        case 11:
            return "Nov";
            break;
        case 12:
            return "Dec";
            break;
    }
}


