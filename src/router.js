/**
 * Created by xiangsongtao on 16/7/24.
 * Description:
 */


/**
 * vue-router
 * */
import Vue from "vue";
import VueRouter from "vue-router";


import Index from "views/index.view.vue";


Vue.use(VueRouter);
var App = Vue.extend({})
var router = new VueRouter();
router.map({
    '/index': {
        component: Index
    }
})

router.start(App, 'body');