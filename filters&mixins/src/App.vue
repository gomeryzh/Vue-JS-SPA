<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUpperCase | toLowerCase}}</p>
        <button @click="addNewProduct">Add product</button>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./FruitMixin.js";
export default {
  data() {
    return {
      text: "Hello there!"
    };
  },
  methods: {
    addNewProduct() {
      this.fruits.push("Berry");
    }
  },
  mixins: [fruitMixin],
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
};
</script>

<style>
</style>