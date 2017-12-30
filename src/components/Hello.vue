
<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{getEnthusiasm}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';
import * as types from '../store/mutation-types';

export default Vue.extend({
    props:['name'],
    // @Prop() name: string;
    // @Prop() initialEnthusiasm: number;
    // enthusiasm = this.initialEnthusiasm;
    // increment() {
    //     this.enthusiasm++;
    // }
    // decrement() {
    //     if (this.enthusiasm > 1) {
    //         this.enthusiasm--;
    //     }
    // }
    // get exclamationMarks(): string {
    //     return Array(this.enthusiasm + 1).join('!');
    // }
    computed: {
        ...mapGetters('hello', ['getEnthusiasm'])
    },
    methods: {
        ...mapActions('hello',{
            increment: types.INC_ENTHUSIASM,
            decrement: types.DEC_ENTHUSIASM
        })
    }
});
</script>