<template>
    <h1 class="display-5 m-2">Counter</h1>
    <CounterComponent />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import CounterComponent from '../components/CounterComponent.vue'

export default defineComponent({
    name: 'CounterView',
    components: {
        CounterComponent,
    }
})
</script>