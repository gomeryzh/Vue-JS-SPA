export const lengthMixin = {
  computed: {
    textLength() {
      return this.secondText + "(" + this.secondText.length + ")";
    }
  }
};
