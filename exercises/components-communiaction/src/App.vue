<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Servers from "./Servers.vue";
import ServerDetails from "./ServerDetails.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appServers: Servers,
    appServerDetails: ServerDetails
  }
};
</script>

<style>
</style>
