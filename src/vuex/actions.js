/**
 * Created by xiangsongtao on 16/7/30.
 * Description: action 是一种专门用来被 component 调用的函数。
 */


import * as types from "./mutation-types";

//-------------------------全局---------------------------
/**
 * 更改我的称述显示状态
 * */
export const setMyWordStatus = function ({dispatch}) {
    dispatch(types.SET_SHOWMYWORD_STATUS)
};
/**
 * 更改社交的二维码图片
 * */
export const setSocialImgUrl = function ({dispatch}, url) {
    dispatch(types.SET_SOCIALIMG, url)
};
/**
 * 设置是否登录
 * */
export const setLoginState = function ({dispatch}, status) {
    dispatch(types.SET_LOGIN_STATUS, status)
};
/**
 * 更改后台管理页面是否展开显示
 * */
export const setShowBigAdminStatus = function ({dispatch},status) {
    dispatch(types.SET_SHOW_BIGADMIN_STATUS,status)
};

//-------------------------Music---------------------------
/**
 * 更改播放状态
 * */
export const setPlayingStatus = function ({dispatch},status) {
    dispatch(types.SET_PLAYING_STATUS,status)
};
/**
 * 设置当前音乐的持续时间
 * */
export const setMusicDuration = function ({dispatch},duration) {
    dispatch(types.SET_MUSIC_DURATION,duration)
};
/**
 * 设置当前音乐的进行时间
 * */
export const setMusicRightNow = function ({dispatch},rightNow) {
    dispatch(types.SET_MUSIC_RIGHTNOW,rightNow)
};
/**
 * 设置当前音乐的信息
 * */
export const setCurrentMusic = function ({dispatch},currentMusicInfo) {
    dispatch(types.SET_CURRENT_MUSIC,currentMusicInfo)
};
/**
 * 设置当前音乐的加载状态
 * */
export const setLoadingStatus = function ({dispatch},status) {
    dispatch(types.SET_LOADING_STATUS,status)
};
/**
 * 设置是否能自动播放
 * */
export const setCanAutoPlay = function ({dispatch},status) {
    dispatch(types.SET_CAN_AUTOPLAY,status)
};
