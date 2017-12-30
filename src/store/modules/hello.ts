import * as types from '../mutation-types';
import Vuex, { Commit } from 'vuex';

interface State {
    enthusiasm: number
}
const state: State = {
    enthusiasm: 1
}
const getters = {
    getEnthusiasm: (state: State) => Array(state.enthusiasm).join('!')
}
// for aync actions
const actions = {
    [types.INC_ENTHUSIASM]: ({commit}: {commit: Commit}) => commit(types.INC_ENTHUSIASM),
    [types.DEC_ENTHUSIASM]: ({commit}: {commit: Commit}) => commit(types.DEC_ENTHUSIASM),
}
const mutations = {
    [types.INC_ENTHUSIASM] (state: State) {
        state.enthusiasm++
    },
    [types.DEC_ENTHUSIASM] (state: State) {
        state.enthusiasm--;
    }
}
export default {
    namespaced: true, getters, actions, mutations, state
};