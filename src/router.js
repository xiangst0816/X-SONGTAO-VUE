/**
 * Created by xiangsongtao on 16/7/24.
 * Description: vue-router 路由控制
 * 每个vue的SPA有且只有一个路由控制,且将控制挂载到了顶级组件-->APP.vue上
 * 官网是这么说的,但是如果挂载App.vue上,如果在某一页上刷新,则会出现加载问题,
 * 但是将路由初始化相关代码放在main.js中就没问题,没清楚为啥
 * */

//引入
import Vue from "vue";
import VueRouter from "vue-router";
//启用
Vue.use(VueRouter);

// 路由器需要一个根组件,App.vue为根组件。就是挂载路由的地方。
var App = Vue.extend(require('./App.vue'));
// 路由配置参数

var router = new VueRouter({
  hashbang: false,
  abstract: false,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: true,
});
// window.router = router;

import store from "./vuex/store"


let routes = [
  {
    path: '/',
    name: 'index',
    component: require('./views/blog.index.vue')
  },
  {
    path: '/blog',
    redirect: '/art-list?listType=latest',
    name: 'blog',
    component: require('./views/blog.vue'),
    children: [
      {
        path: '/art-list',
        name: 'artList',
        component: function (resolve) {
          require(['./views/blog.articleList.vue'], resolve)
        }
      },
      {
        path: '/his-list',
        name: 'historyList',
        component: function (resolve) {
          require(['./views/blog.historyList.vue'], resolve)
        }
      },
      {
        path: '/tag-list',
        name: 'tagList',
        redirect:'/tag-list/classify',
        component: {
          template: '<router-view></router-view>'
        },
        children: [
          {
            path: '/classify',
            name: 'tagListClassify',
            component: require('./views/blog.tagList.vue')
          },
          {
            path: '/find-by-tag-id',
            name: 'tagListFindByTagId',
            component: function (resolve) {
              require(['./views/blog.articleList.vue'], resolve)
            },
          },
        ]
      },
    ]
  },
  {
    path: '/music',
    name: 'music',
    component: require('./views/blog.music.vue')
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: function (resolve) {
      require(['./views/blog.article.vue'], resolve)
    },
  },
  {
    path: '/login',
    name: 'login',
    component: function (resolve) {
      require(['./views/blog.login.vue'], resolve)
    }
  },

  {
    path: '/admin',
    name: 'admin',
    component: function (resolve) {
      require(['./views/admin.vue'], resolve)
    },
    auth: true,
    children: [
      {
        path: '/admin-dashboard',
        name: 'admin-dashboard',
        component: function (resolve) {
          require(['./views/admin.dashboard.vue'], resolve)
        },
      },
      {
        path: '/admin-myinfo',
        name: 'admin-myinfo',
        component: function (resolve) {
          require(['./views/admin.myInfo.vue'], resolve)
        },
        auth: true,
      },
      {
        path: '/admin-tag',
        name: 'admin-tag',
        component: function (resolve) {
          require(['./views/admin.tagList.vue'], resolve)
        },
        auth: true,
      },
      {
        path: '/admin-articleManager',
        name: 'admin-articleManager',
        redirect:'/admin-articleList',
        component: {
          template: '<router-view></router-view>'
        },
        auth: true,
        children: [
          {
            path: '/admin-articleList',
            name: 'admin-articleList',
            component: function (resolve) {
              require(['./views/admin.articleList.vue'], resolve)
            },
            auth: true,
          },
          {
            path: '/admin-article/:articleId',
            name: 'admin-article',
            component: function (resolve) {
              require(['./views/admin.article.vue'], resolve)
            },
            auth: true,
          },
        ]
      },
      {
        path: '/admin-commentList',
        name: 'admin-commentList',
        component: function (resolve) {
          require(['./views/admin.commentList.vue'], resolve)
        },
        auth: true,
      },
    ]
  },


]


export default function () {

  //定义路由规则
  router.map({
    '/': {
      name: 'index',
      component: require('./views/blog.index.vue')
    },
    '/login': {
      name: 'login',
      component: function (resolve) {
        require(['./views/blog.login.vue'], resolve)
      },
    },
    '/music': {
      name: 'music',
      component: require('./views/blog.music.vue')
    },
    '/blog': {
      name: 'blog',
      component: require('./views/blog.vue'),
      subRoutes: {
        '/art-list': {
          name: 'artList',
          component: function (resolve) {
            require(['./views/blog.articleList.vue'], resolve)
          },
        },
        '/his-list': {
          name: 'historyList',
          component: require('./views/blog.historyList.vue'),
        },
        '/tag-list': {
          name: 'tagList',
          component: {
            template: '<router-view></router-view>'
          },
          subRoutes: {
            '/classify': {
              name: 'tagListClassify',
              component: require('./views/blog.tagList.vue'),
            },
            '/find-by-tag-id': {
              name: 'tagListFindByTagId',
              component: function (resolve) {
                require(['./views/blog.articleList.vue'], resolve)
              },
            },
          }
        },
      }
    },
    '/article/:articleId': {
      name: 'article',
      component: function (resolve) {
        require(['./views/blog.article.vue'], resolve)
      },
    },
    '/admin': {
      name: 'admin',
      component: function (resolve) {
        require(['./views/admin.vue'], resolve)
      },
      auth: true,
      subRoutes: {
        '/admin-dashboard': {
          name: 'admin-dashboard',
          component: function (resolve) {
            require(['./views/admin.dashboard.vue'], resolve)
          },
        },

        '/admin-myinfo': {
          name: 'admin-myinfo',
          component: function (resolve) {
            require(['./views/admin.myInfo.vue'], resolve)
          },
          auth: true,
        },
        '/admin-tag': {
          name: 'admin-tag',
          component: function (resolve) {
            require(['./views/admin.tagList.vue'], resolve)
          },
          auth: true,
        },
        '/admin-articleManager': {
          name: 'admin-articleManager',
          component: {
            template: '<router-view></router-view>'
          },
          auth: true,
          subRoutes: {
            '/admin-articleList': {
              name: 'admin-articleList',
              component: function (resolve) {
                require(['./views/admin.articleList.vue'], resolve)
              },
              auth: true,
            },
            '/admin-article/:articleId': {
              name: 'admin-article',
              component: function (resolve) {
                require(['./views/admin.article.vue'], resolve)
              },
              auth: true,
            },
          }
        },
        '/admin-commentList': {
          name: 'admin-commentList',
          component: function (resolve) {
            require(['./views/admin.commentList.vue'], resolve)
          },
          auth: true,
        },
      }
    },
  });

  //路由重定向
  router.redirect({

    '/blog': '/blog/art-list/?listType=latest',
    '/blog/tag-list': '/blog/tag-list/classify',
    '/admin/admin-articleManager': '/admin/admin-articleManager/admin-articleList',
  });


  //路由切换前
  router.beforeEach(({to, from, next}) => {
    if (to.auth && !store.state.isLogin) {
      router.go({
        name: 'login'
      })
    }
    next()
  })

  //路由切换后
  router.afterEach(function ({to}) {
    // console.log(`成功浏览到: ${to.path}`)
    // $.refreshScroller()
  });


  //在根组件上启动路由,挂载点位为body上
  router.start(App, '#app');
}
