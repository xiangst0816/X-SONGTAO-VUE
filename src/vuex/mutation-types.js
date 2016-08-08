/**
 * Created by xiangsongtao on 16/7/30.
 * Description: Mutation事件名称集合
 */
//全局
export const SET_SHOWMYWORD_STATUS = 'SET_SHOWMYWORD_STATUS';//控制是否显示我的个人称述
export const SET_SOCIALIMG = 'SET_SOCIALIMG';//设置我的社交弹出组件的img
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';//设置是否登录
export const SET_SHOW_BIGADMIN_STATUS = 'SET_SHOW_BIGADMIN_STATUS';//设置是否展开大号的admin页面,用于文章编辑预览,受体为admin.vue


/**
 * 前端页面
 * */
//-------------------------我的信息---------------------------
export const GET_MYINFO = 'GET_MYINFO';//获取我的个人信息


//-------------------------文章---------------------------
export const GET_ARTICLELIST = 'GET_ARTICLELIST';//获取文章列表
export const GET_HISTORYLIST = 'GET_HISTORYLIST';//获取文章历史记录列表
export const CLEAR_ARTICLE = 'CLEAR_ARTICLE';//获取文章历史记录列表
export const GET_ARTICLE = 'GET_ARTICLE';//根据文章id获取文章详情(前台)


//-------------------------标签---------------------------
export const GET_TAGSWITHSTRUCTURE = 'GET_TAGSWITHSTRUCTURE';//获取具有结构的标签列表


//-------------------------评论---------------------------
export const GET_ARTICLECOMMENTS = 'GET_ARTICLECOMMENTS';//根据文章id获取该文章的评论列表
export const SEND_COMMENT = 'SEND_COMMENT';//发表评论



/**
 * 后台管理
 * */