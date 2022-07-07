export default {
  login({ commit }, payload) {
    return commit("LOGIN", payload);
  },
  logout({ commit }) {
    return commit("LOGOUT");
  },
};
