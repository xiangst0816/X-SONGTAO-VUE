/**
 * Created by xiangsongtao on 16/7/24.
 * Description: vue-router 路由控制
 * 每个vue的SPA有且只有一个路由控制,且将控制挂载到了顶级组件-->APP.vue上
 * */

//引入
import Vue from "vue";
import VueRouter from "vue-router";
//启用
Vue.use(VueRouter);

// 路由器需要一个根组件,App.vue为根组件。就是挂载路由的地方。
// var App = Vue.extend(require('./App.vue'));
var App = Vue.extend(require('./App.vue'));
// 路由配置参数
var router = new VueRouter({
    hashbang: true //hash路由
});


export default function () {


    //定义路由规则
    router.map({
        '/index': {
            name: 'index',
            component: require('./views/blog.index.vue')
        },
        '/blog': {
            name: 'blog',
            component: require('./views/blog.vue'),
            subRoutes: {
                '/art-list': {
                    name: 'artList',
                    component: require('./views/blog.articleList.vue')
                },
                '/his-list': {
                    name: 'historyList',
                    component: require('./views/blog.historyList.vue')
                }
            }
        }
    });

    //路由切换前
    router.beforeEach(({to, from, next}) => {
        let toPath = to.path
        let fromPath = from.path
        console.log('from: ' + fromPath + ' to: ' + toPath)
        if (toPath.replace(/[^/]/g, '').length > 1) {
            router.app.isIndex = false
        }
        else {
            let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
            router.app.isIndex = depath ? 0 : 1
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