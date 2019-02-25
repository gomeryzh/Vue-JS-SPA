<template>
  <div>
    <div id="on" @click="isOn = true" :class="{active: isOn}">On</div>
    <div id="off" @click="isOn = false" :class="{active: !isOn}">Off</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOn: true
    };
  }
};
</script>
<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  padding: 2px;
  background-color: lightgray;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}
#on:hover,
#on.active {
  background-color: lightgreen;
}
#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>
