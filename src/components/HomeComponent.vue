<template>
  <div class="bg-black
   p-3 m-1 rounded text-light">
    <h1 class="display-5">this is Home component</h1>
    <div class="d-flex flex-column">
      <span>counter: {{ counterStore.counter }}</span>
      <span>number of changes: {{ counterStore.numberOfChanges }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useCounterStore } from "../store/counter";

export default defineComponent({
  name: "HomeComponent",
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
});
</script>