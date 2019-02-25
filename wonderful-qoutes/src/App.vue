<template>
  <div class="container">
    <app-header :quotesCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @newQuoteCreated="addNewQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @onDeleteQuote="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
export default {
  data: function() {
    return {
      quotes: ["Just qoute to see smth"],
      maxQuotes: 10
    };
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  methods: {
    addNewQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert(
          "You have reached a max count of Qoutes. Please delete first one Quote"
        );
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
