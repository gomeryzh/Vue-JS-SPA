<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="selectedServer"
  >Server #{{ server.id }}</li>
</template>

<script>
import { serverBus } from "./main.js";

export default {
  props: ["server"],
  data() {
    return {};
  },
  methods: {
    selectedServer() {
      serverBus.$emit("selectedServer", this.server);
    }
  }
};
</script>

<style scoped>
</style>