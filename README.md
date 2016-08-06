# X-SONGTAO-VUE

> A Vue.js project

## 开发进度



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
|    admin-myinfo 组件    |       08/06     |     90%    |
|    admin-articleList 组件    |     08/06       |     80%    |
|    admin-tagList 组件    |     08/06       |     80%    |
|    admin-commentList 组件    |       08/06     |     80%    |
|    admin-article-add/edit 组件    |    08/06        |     50%    |
|    联调    |             |          |
|    优化    |             |          |



## Build Setup

现在项目使用的是线上的API接口,如果在本机浏览器调试的话可能出现跨域的问题,跨域我已在服务器上处理过,但是为了解除对浏览器的限制,需要执行以下代码(Mac上),通过在终端执行此代码启动Chrome禁止跨域错误提示。亲测可行(2016/7/28).

```
open -a "Google Chrome" --args --disable-web-security --user-data-dir
```


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
