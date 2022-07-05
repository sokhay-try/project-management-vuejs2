export default {
  namespaced: true,
  state: {
    count: 0,
  },

  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state) {
      state.count--;
    },
  },
};
