'use strict';
import Vue from "vue";
import "font-awesome/css/font-awesome.min.css";

/**
 * views & components
 * */
import blogNav from "./views/nav.vue";
import App from "./App";









// import Mint from 'mint-ui';


/* eslint-disable no-new */
new Vue({
    el: 'body',
    data: {},
    methods: {},
    components: {blogNav, App}
})


// var MyComponent = Vue.extend({
//     template:'<div>A custom component!</div>',
//     replace:true
// })

// Vue.component('my-component', MyComponent)


// new Vue({
//     el: '#example',
// })