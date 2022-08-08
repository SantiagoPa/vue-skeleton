<template>
    <h1 class="display-5 m-2">Home</h1>
    <HomeComponent />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HomeComponent from '../components/HomeComponent.vue'

export default defineComponent({
    name: 'HomeView',
    components: {
        HomeComponent,
    }
})
</script>