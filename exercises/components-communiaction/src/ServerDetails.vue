<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <p v-else>Server #{{server.id}} selected. Server status: {{server.status}}</p>
    <hr>
    <button @click="resetStatus">Change to Normal status</button>
  </div>
</template>

<script>
import { serverBus } from "./main.js";

export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    serverBus.$on("selectedServer", server => {
      this.server = server;
    });
  }
};
</script>

<style scoped>
</style>