<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="quote"
      @click.native="deleteQuote(index)"
    >{{quote}}</app-quote>
  </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
  props: ["quotes"],
  data: function() {
    return {};
  },
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("onDeleteQuote", index);
    }
  }
};
</script>
<style scoped>
</style>
