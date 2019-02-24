<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{userAge}}</p>
    <button @click="changeUserAge">change User Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    userAge: Number
  },
  methods: {
    changeUserAge() {
      this.userAge = 30;
      //   this.$emit("userAgeWasChanged", this.userAge);
      //   eventBus.$emit("userAgeWasChanged", this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
