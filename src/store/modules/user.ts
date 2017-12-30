import * as types from '../mutation-types';
import { Commit } from 'vuex';
interface State {
    name: string;
}
const state = {
    name: 'shiteballz'
}
export default {
    namespaced: true,
    getters: {
        getName: (state:State) => state.name
    },
    mutations: {
        [types.SET_NAME] (state: State, newName: string) {
            state.name = newName;
        }
    },
    actions: {
        [types.SET_NAME]: ({commit}: {commit: Commit}, newName:string)  => commit(types.SET_NAME, newName)
    },
    state
}
