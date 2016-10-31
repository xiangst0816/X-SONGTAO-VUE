/**
 * Created by xiangsongtao on 16/7/27.
 * Description:578251be1cd6c37a04a4d50b
 */
//线上配置
let CONFIG;
if (process.env.NODE_ENV === 'development') {
// if (process.env.NODE_ENV === 'production') {
  CONFIG = {
    url: "http://xiangsongtao.com",
    MY_INFO_ID: '578251be1cd6c37a04a4d50b',
    MY: '我',
    EMAIL: '280304286@163.com'
  };
} else {
  CONFIG = {
    url: "http://127.0.0.1:8080",
    //我的信息_id
    MY_INFO_ID: '57ef5987e1bb0b0b7cbd17e8',
    //我对对评论进行回复的信息
    MY: '我',
    EMAIL: '280304286@163.com'
  };
}


// "http://xiangsongtao.com/api/user/578251be1cd6c37a04a4d50b".
//接口API根地址
const url = CONFIG.url;
//我的信息_id
const MY_INFO_ID = CONFIG.MY_INFO_ID;
//我对对评论进行回复的信息
const MY = CONFIG.MY;
const EMAIL = CONFIG.EMAIL;


module.exports = {
  /**
   * 通用状态码
   * */

  SYS_ERR: 'SYS_ERR',//api请求系统错误


  /**
   * 用户、登录相关
   * */
  MY_INFO_ID: MY_INFO_ID,
  MY: MY,
  EMAIL: EMAIL,
  //登录
  login: `${url}/api/login`,
  doLogin: `${url}/api/do_login`,
  //获取我的信息
  getMyInfo: `${url}/api/user/${MY_INFO_ID}`,
  //post 为了安全起见
  getMyInfoWithOriginal: `${url}/api/user/original/${MY_INFO_ID}`,
  postMyInfo: `${url}/api/user`,
  changePassword: `${url}/api/change_password`,
  imgUpload: `${url}/api/imgupload`,
  imgResource: `${url}/uploads/`,

  /**
   * 文章相关
   * */
  //获取最新的十条文章
  ArticleFrom: "0",
  ArticleNum: "10",
  newUpdateArticle: `${url}/api/articles/from_to`,
  //由文章id获取文章详情
  getArticleById: `${url}/api/article/id`,
  //获取文章历史记录
  getArticleHistoryWithStructure: `${url}/api/article_history`,
  //获取文章列表
  getArticleList: `${url}/api/articles`,
  //由文章id获取文章详情(原始markdown版本)
  getRawArticleById: `${url}/api/article/raw/id`,
  //新增(如果传入的_id不存在的电话)-修改文章,
  postArt: `${url}/api/article`,
  //delete 文章
  deleteArt: `${url}/api/article/id`,
  //get 获得文章最新num条+阅读最多Num条+引用次数最多的num条，用于文章详情的
  getArticleTop: `${url}/api/article_top/num`,


  /**
   * 标签相关
   * */
  //获取标签列表(带有结构的)
  getTagsListWithStructure: `${url}/api/tags_with_structure`,
  //由标签id获取文章列表
  getArticlesWithTagId: `${url}/api/article_tag/from_to/id`,
  //获取标签列表(原始)
  getTagsList: `${url}/api/tags`,
  //增加 post
  addTag: `${url}/api/tag`,
  //修改 put
  editTag: `${url}/api/tag`,
  //删除 delete
  deleteTag: `${url}/api/tag/id`,


  /**
   * 获取评论
   * */
  getArticleComments: `${url}/api/article/comments/article_id`,
  changeCommentState: `${url}/api/changeCommentState`,
  getCommentToArticleList: `${url}/api/commentToArticleList`,
  postComment: `${url}/api/comment`,
  //评论已阅读 post
  changeCommentReplyState: `${url}/api/changeCommentReplyState`,
  //评论审核状态 post
  changeCommentAuthState: `${url}/api/changeCommentAuthState`,
  //删除评论 delete
  delComment: `${url}/api/comment/id`,
  //新增评论
  // newComment: `${url}/api/comment`,

  /**
   * 获取统计
   * */
  getTotal: `${url}/api/statistic/total`,
  getChart: `${url}/api/statistic/chart`,
  getMap: `${url}/api/statistic/map`,
  sign: `${url}/api/statistic/sign`,

  /**
   * 音乐列表
   * */
  musicList: [
    {
      coverUrl: 'http://p3.music.126.net/0X1DVaNmTMH7W5l9S-XB_g==/18675204997913949.jpg?param=260y260',
      musicUrl: 'http://xiangsongtao.com/music_resource/Kozoro%20-%20Silhouette%20(Original%20Mix).mp3',
      name: 'Silhouette',
      player: 'Kozoro',
      album: 'Silhouette',
    },
    {
      coverUrl: 'http://p4.music.126.net/EvWz-TdM6MUjEDS-6pmMbA==/7700979442816625.jpg?param=260y260',
      musicUrl: 'http://xiangsongtao.com/music_resource/Kozoro%20-%20A%20Spring%20Without%20You%20(Original%20Mix).mp3',
      name: 'A Spring Without You',
      player: 'Kozoro',
      album: 'A Spring Without You',
    },
    {
      coverUrl: 'http://p3.music.126.net/6tu0HRcN9Rrb7mfLpTbkuA==/7948369559818308.jpg?param=260y260',
      musicUrl: 'http://xiangsongtao.com/music_resource/Kozoro%20-%20Remember%20Me%20(Original%20Mix).mp3',
      name: 'Remember Me',
      player: 'Kozoro',
      album: 'Remember Me',
    },
    {
      coverUrl: 'http://p3.music.126.net/U_IlMiO7pWenOk0fuDdWvA==/2542070885314968.jpg?param=260y260',
      musicUrl: 'http://xiangsongtao.com/music_resource/Explorers.mp3',
      name: 'Explorers',
      player: 'Koi.',
      album: 'Beginnings',
    },
    {
      coverUrl: 'http://p4.music.126.net/hH4UmteuzsqZHacrr3YS_g==/18358545649308968.jpg?param=260y260',
      musicUrl: 'http://xiangsongtao.com/music_resource/China-X.mp3',
      name: 'China-X',
      player: '徐梦圆',
      album: 'Change',
    },
    {
      coverUrl: 'http://p3.music.126.net/DW-fId71WHtzfDJH_X5kBg==/7777945255137045.jpg?param=260y260',
      musicUrl: 'http://xiangsongtao.com/music_resource/FarAway.mp3',
      name: 'Far Away',
      player: 'Yinyues',
      album: 'Far Away',
    },
    {
      coverUrl: 'http://p4.music.126.net/Vbf6B70-bHLgD4muejpcbQ==/5650390255232065.jpg?param=260y260',
      musicUrl: 'http://xiangsongtao.com/music_resource/The%20Deysion%20-%20Perfect%20Day%20feat.%20R.I.B.mp3',
      name: 'Perfect Day feat. R.I.B.',
      player: 'The Deysion',
      album: 'TOP25 Chill Emotion',
    }
  ],
  /**
   * 切换的背景列表
   * */
  imageList: [
    'http://xiangsongtao.com/bg_resource/1.jpg',
    'http://xiangsongtao.com/bg_resource/2.jpg',
    'http://xiangsongtao.com/bg_resource/3.jpg',
    'http://xiangsongtao.com/bg_resource/4.jpg',
    'http://xiangsongtao.com/bg_resource/5.jpg',
    'http://xiangsongtao.com/bg_resource/6.jpg',
    'http://xiangsongtao.com/bg_resource/7.jpg',
    'http://xiangsongtao.com/bg_resource/8.jpg',
    'http://xiangsongtao.com/bg_resource/9.jpg',
    'http://xiangsongtao.com/bg_resource/10.jpg',
    'http://xiangsongtao.com/bg_resource/11.jpg',
    'http://xiangsongtao.com/bg_resource/12.jpg',
  ]

};
