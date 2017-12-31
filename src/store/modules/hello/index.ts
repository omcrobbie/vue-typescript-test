import { RootState } from '../../index';
import * as types from './types';
import Vuex, { Commit, Module, GetterTree } from 'vuex';
export interface State {
    enthusiasm: number
}
const state: State = {
    enthusiasm: 1
}
export const module: Module<State, RootState> = {
    getters: {
        [types.GET_ENTHUSIASM]: (state: State) => Array(state.enthusiasm).join('!')
    },
    actions: {
        [types.INC_ENTHUSIASM]: ({commit}: {commit: Commit}) => commit(types.INC_ENTHUSIASM),
        [types.DEC_ENTHUSIASM]: ({commit}: {commit: Commit}) => commit(types.DEC_ENTHUSIASM),
    },
    mutations: {
        [types.INC_ENTHUSIASM] (state: State) {
            state.enthusiasm++
        },
        [types.DEC_ENTHUSIASM] (state: State) {
            if (state.enthusiasm > 1) {
                state.enthusiasm--;
            }
        }
    },
    state
};