# X-SONGTAO@VUE

> 这是一个从Angular改写到Vue版本的博客项目，博客已全部开发完毕，点击访问线上地址是[xiangsongtao.com](xiangsongtao.com "X-SONGTAO")。总体来说，使用Vue还是很愉快的，因为有Angualr的基础，所以整个过程很顺利。Vue值得拥有！

## 项目起因及简介

#### 既然改写一定是有原因的：

1. Angular版本最后上线代码有些庞大，在启用g-zip情况下，Angular版本首次加载为406.9kb、Vue版本为222.8kb。
2. Angular懒加载不够灵活，Vue使用的是webpack打包，懒加载简洁直接。
3. 很多人推荐使用，并且公司中有项目在使用Vue开发。
4. 9月3日的Ningjs大会能看尤老大，尝试一下他写的Vue如何。

> 抽时间做这个就是因为好玩，另外也希望能养成写博客总结的习惯。


#### 项目组成：

项目种子是由**vue-cli**构建的。

**主要功能**都在左边的导航条上了：主页、博客（最近10篇文章、文章库、标签库）、音乐、背景、登录（我的信息管理、标签管理、文章管理、评论管理、退出）。是的，前后台都在一个SPA上，这就体现懒加载的重要性了！访客用户名密码都是visitor。因为我的信息管理涉及到密码问题，我就不开放了。

**博客支持全屏幕自适应**，从手机（iphone5）到2K显示器。另外对触摸屏300ms的click延迟做了处理（fastclick.js）,还算满意。

**插件**列表如下：

- vue-router（路由）
- vuex（全局状态管理，熟悉到使用花了1天半的时间，现在看也挺简单的，还好有中文文档）
- vue-resource（资源访问）
- vue-moment（时间格式化）
- font-awesome
- vStorage.js（localStorage和sessionStorage管理，ps.自己实现的，查看我的github）
- bootstrap(sass版本，按需使用)
- jquery(slim版本)
- bootstrap-datetimepicker
- vue-multiselect
- dropzone.js（上传插件）
- fastclick.js
- highlight.js（代码高亮，用户后台文章编辑，是markdown左右对照实时预览的哦）
- moment-with-locales.js(只有中文)
- marked（只是markdown预览用了下）
- clipboard（复制到剪贴板，用户上传图片获得图片访问地址的）

> 需求就是我自己的想法，没有模板。



## 开发进度

因为之前Angular的项目结构及思路还是和Vue组件式开发有些区别，结构上进行了较大改变。原来我是将页面的css/js/html都放在对应页面文件夹下，现在都是放在*.vue文件中，还好没感到不适，我觉得也应该是这样。


另外之前的设计样式有些不太满意，做了修改。另外我对我选的背景图还是点个赞，我是说背景切换中的大图。


|      项目      |       完成时间   |    状态   |
| ------------- | --------------- |---------------|
|    框架搭建    |       07/25     |     已完成    |
|    nav 组件    |      07/26       |     已完成    |
|    index 组件    |       07/26      |     已完成    |
|    blog-myinfo 组件    |       07/27      |     已完成    |
|    blog-content 组件    |       07/27      |    已完成    |
|    blog-lastest 组件    |       07/28      |    已完成    |
|    vuex接入    |       07/30      |    已完成    |
|    jquery插件引入    |      08/03       |    已完成    |
|    blog-history 组件    |      07/30     |     已完成   |
|    blog-tagList 组件    |      07/30       |     已完成    |
|    blog-article 组件    |       07/30      |     已完成    |
|    blog-login 组件    |        08/05      |     已完成   |
|    admin-myinfo 组件    |       08/06     |     已完成    |
|    admin-articleList 组件    |     08/06       |     已完成    |
|    admin-tagList 组件    |     08/09       |     已完成   |
|    admin-commentList 组件    |       08/09     |     已完成    |
|    admin-article-add/edit 组件    |    08/09        |     已完成    |
|    联调    |      08/11      |     已完成     |
|    优化    |       08/11      |     已完成     |
|    背景切换功能    |       08/12      |     已完成     |
|    音乐功能    |       08/13      |     已完成     |
|    音乐进入自动播放    |       08/14      |     已完成     |

**全部改写历时21天,已全部改写完成,且已上线。呜呜，我的休息时间都这么用掉了。**







## 本地启动

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8085
npm run dev

# build for production with minification
npm run build

```

### 本地调试注意事项

现在项目使用的是线上的API接口,如果在本机浏览器调试的话可能出现跨域的问题,跨域我已在服务器上处理过,但是为了解除对浏览器的限制,需要执行以下代码(Mac上),通过在终端执行此代码启动Chrome禁止跨域错误提示。亲测可行(2016/7/28).



```
open -a "Google Chrome" --args --disable-web-security --user-data-dir
```

## 项目结构

后台使用的是Express/Mongodb/Nodejs搭建的，代码在[这个项目](https://github.com/xiangsongtao/X-SONGTAO "X-SONGTAO@Angular")中，API接口说明请参考readme。


```
|-build  				//webpack配置，注意webpack.base.conf.js此文件关于引入jQuery插件的写法
|-config  				
|-dist  				//目标文件
|-src  					//开发目录
|----App.vue  			//初始化配置（main）及组件挂载
|----config.js  		//配置文件
|----main.js  			//初始化配置（有些只能在此初始化，比如路由相关）及组件挂载
|----router.js  		//路由配置
|----api  				//http请求方法
|----assets  			//资源
|----components  		//小组件
|----plugin  			//插件（单独拎出来是因为做了定制化修改）
|----theme  			//公共样式文件，相当于主题了
|----utils  			//filter等工具组件
|----views  			//整个页面组件集合
|----vuex  				//全局状态管理（管理登录状态，可惜没用到getters.js）
|-static  				
|-test  				 
```


## 遇到的问题




