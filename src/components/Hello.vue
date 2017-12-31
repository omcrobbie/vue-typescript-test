
<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{enthusiasm}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import * as types from '../store/modules/hello/types';

export default Vue.extend({
    props:['name'],
    computed: {
        ...mapGetters({
            enthusiasm: types.GET_ENTHUSIASM
        })
    },
    methods: {
        ...mapActions({
            increment: types.INC_ENTHUSIASM, 
            decrement: types.DEC_ENTHUSIASM
        })
    }
});
</script>