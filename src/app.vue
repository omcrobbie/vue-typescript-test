<template>
    <div>
        Name: <input type="text" v-model="name">
        <hello-decorator :name="name" />
    </div>
</template>
<script lang="ts">
import HelloDecorator from './components/Hello.vue';
import Vuex, { mapGetters, mapMutations, Store } from 'vuex';
import * as types from './store/modules/user/types';
import Vue from 'vue';
export default Vue.extend({
    computed: {
        name: {
            get(): string {
                return this.$store.getters[types.GET_NAME];
            },
            set(val:string) {
                this.$store.dispatch(types.SET_NAME, val);
            }
        }
    },
    components:{
        HelloDecorator
    }
});
</script>