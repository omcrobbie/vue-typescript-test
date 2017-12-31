import * as types from './types';
import Vuex, { Commit, Module } from 'vuex';
export interface State {
    name: string;
}
const state = {
    name: 'shiteballz'
}
export const module: Module<State, any> = {
    getters: {
        [types.GET_NAME]: (state: State) => state.name 
    },
    mutations: {
        [types.SET_NAME] (state: State, newName: string) {
            state.name = newName;
        }
    },
    actions: {
        [types.SET_NAME] ({commit}: {commit: Commit}, newName:string) {
            commit(types.SET_NAME, newName);
        }
    },
    state
}

