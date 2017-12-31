import  Vue from 'vue';
import Vuex, {Getter} from 'vuex';
import * as hello from './modules/hello';
import * as user from './modules/user';

Vue.use(Vuex);
export interface RootState{
    hello: hello.State;
    user: user.State;
}

export const store = new Vuex.Store<RootState>({
    modules: {
        hello: hello.module,
        user: user.module
    }
});
