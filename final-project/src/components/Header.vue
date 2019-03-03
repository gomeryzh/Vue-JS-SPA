<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" tag="li" activeClass="active">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" activeClass="active">
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">End day</a>
          </li>
          <li
            class="dropdown"
            :class="{open: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li href="#" @click="saveData" style="cursor: pointer">Save Data</li>
              <li href="#" @click="loadData" style="cursor: pointer">Load Data</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    ...mapGetters(["funds"])
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stocks: this.$store.getters.stocks,
        stockPortfolio: this.$store.getters.stockPortfolio
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style>
</style>
