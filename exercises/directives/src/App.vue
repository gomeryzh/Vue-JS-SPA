<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-myCustom:click="clicked" class="btn btn-primary">Click me</button>
        <hr>
        <div
          style="width: 100px; height: 100px; background-color: aqua"
          v-myCustom:mouseenter="mouseEntered"
          v-myCustom:mouseleave="mouseLeft"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myCustom: {
      bind(el, binding) {
        // el.onclick = () => {
        //   binding.value();
        // };
        const elType = binding.arg;
        const bindingFn = binding.value;
        el.addEventListener(elType, bindingFn);
      }
    }
  },
  methods: {
    clicked() {
      alert("BTN was clicked!");
    },
    mouseEntered() {
      console.log("mouseEntered");
    },
    mouseLeft() {
      console.log("mouseLeft");
    }
  }
};
</script>

<style>
</style>
