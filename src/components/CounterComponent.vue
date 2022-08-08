<template>
  <div class="bg-black p-3 m-1 rounded text-light">
    <h1 class="display-5">this is about component</h1>
    <div class="d-flex flex-column">
      <span>Counter view: {{ counterStore.counter }}</span>
      <div class="my-1 mx-2">
        <button @click="counterStore.incrementBy(1)" class="btn btn-primary">
          +1
        </button>
        <button @click="counterStore.incrementBy(2)" class="btn btn-primary">
          +2
        </button>
        <button @click="counterStore.incrementBy(3)" class="btn btn-primary">
          +3
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useCounterStore } from "../store/counter";

export default defineComponent({
  name: "CounterComponent",
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
});
</script>


