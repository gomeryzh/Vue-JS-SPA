<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name is {{switchedName()}}</p>
    <p>User Age: {{userAge}}</p>
    <button @click="changeNameBack">change Name Back</button>
    <button @click="resetFn()">change Name Back</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    userName: {
      type: String,
      default: "UserName"
    },
    userAge: Number,
    resetFn: Function
  },
  methods: {
    switchedName() {
      return this.userName
        .split("")
        .reverse()
        .join("");
    },
    changeNameBack() {
      this.userName = "Vova";
      //   this.$emit("nameWasReset", this.userName);
      eventBus.$emit("nameWasReset", this.userName);
    }
  },
  created() {
    eventBus.$on("ageWasChanged", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
