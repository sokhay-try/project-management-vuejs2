export default {
  login({ commit }, payload) {
    return commit("LOGIN", payload);
  },
  logout({ commit }) {
    return commit("LOGOUT");
  },
  resetState({ commit }) {
    return commit("RESET_STATE");
  },
};
