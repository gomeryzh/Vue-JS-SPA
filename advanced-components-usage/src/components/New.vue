<template>
  <div>
    <h3>New Vue</h3>
    <button @click="counter+=1">Increment</button>
    <p>{{counter}}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("Destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>
<style scoped>
</style>
