<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Counter is: {{ stringCouner }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["doubleCounter", "stringCouner"]) }
};
</script>