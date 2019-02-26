export const fruitMixin = {
  data() {
    return {
      fruits: ["Banana", "Apple", "Mango", "Melow"],
      filterText: ""
    };
  },
  created() {
    console.log("created");
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(fruit =>
        fruit.toLowerCase().match(this.filterText)
      );
    }
  }
};
