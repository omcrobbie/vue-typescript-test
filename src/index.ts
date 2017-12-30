// src/index.ts

import Vue from "vue";
import HelloDecorator from './components/Hello.vue';
import store from './store';
import app from './app.vue';


new Vue({
    el: "#app",
    store,
    render: h => h(app)
});