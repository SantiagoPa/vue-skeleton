<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<template>
  <div class="d-flex flex-column">
    <div>
      <router-link to="/">Go to Home</router-link> |
      <router-link to="/counter">Go to About</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
