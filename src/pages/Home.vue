<template>
  <div class="home page">
    <h1 class="test">{{ msg }}</h1>
    <h1>Total Count : {{ this.$store.state.counter.count }}</h1>
    <button
      class="p-3 bg-blue-400 mr-3"
      @click="increment"
    >+</button>
    <button
      class="p-3 bg-green-400"
      @click="decrement"
    >-</button>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  components: {},

  data() {
    return {
      msg: "Welcome to Index!!!",
    };
  },

  methods: {
    increment() {
      this.$store.commit("counter/INCREMENT");
    },
    decrement() {
      this.$store.commit("counter/DECREMENT");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
