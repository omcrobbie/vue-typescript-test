<template>
    <div>
        Name: <input type="text" v-model="name">
        <hello-decorator :name="getName" />
    </div>
</template>
<script lang="ts">
import HelloDecorator from './components/Hello.vue';
import Vuex, { mapGetters, mapMutations } from 'vuex';
import * as types from './store/mutation-types';
import Vue from 'vue';
export default Vue.extend({
    computed: {
        ...mapGetters('user', [
            'getName'
        ]),
        name: {
            get(): string {
                return this.$store.state.user.name
            },
            set(val:string) {
                this.$store.dispatch(`user/${types.SET_NAME}`, val);
            }
        }
    },
    components:{
        HelloDecorator
    }
});
</script>