<template>
  <div>
    <ul class="nav nav-pills nav-fill">
      <router-link to="/" exact tag="li" active-class="active">
        <a>Home</a>
      </router-link>

      <router-link to="/user" tag="li" active-class="active">
        <a>User</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>