export default {
  addProduct({ commit }, payload) {
    return commit("ADD_PRODUCT", payload);
  },
  editProduct({ commit }, payload) {
    return commit("EDIT_PRODUCT", payload);
  },
  removeProduct({ commit }, payload) {
    return commit("REMOVE_PRODUCT", payload);
  },
};
