<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="navigateHome">Go Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
</style>
