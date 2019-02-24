<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'Quote'">Quote</button>
        <hr>
        <button @click="selectedComponent = 'Author'">Author</button>
        <hr>
        <button @click="selectedComponent = 'New'">New</button>
        <hr>
        <p>{{selectedComponent}}</p>
        <keep-alive>
          <component :is="selectedComponent">Default text</component>
        </keep-alive>
        <!-- <Quote>
          <h2 slot="title">{{quoteTitle}}</h2>
          <p>What a wonderfull quote!</p>
        </Quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  data: function() {
    return {
      quoteTitle: "A Quote!",
      selectedComponent: "Quote"
    };
  },
  components: {
    Quote,
    Author,
    New
  }
};
</script>

<style>
</style>
