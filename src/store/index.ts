import  Vue from 'vue';
import Vuex from 'vuex';
import hello from './modules/hello';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        hello,
        user
    }
});
