// src/index.ts

import Vue from "vue";
import HelloDecorator from './components/Hello.vue';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-decorator :name="name" :initialEnthusiasm="5" />
    </div>`,
    data: {
        name: "World"
    },
    components: {
        HelloDecorator
    }
});