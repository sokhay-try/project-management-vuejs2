import { initialProductState } from "./productState";

export default {
  ADD_PRODUCT(state, data) {
    state.products.push(data.payload);
  },

  EDIT_PRODUCT(state, data) {
    state.products = state.products.map((p) => {
      if (p.id == data.payload.id) {
        p = {
          ...p,
          ...data.payload,
        };
      }
      return p;
    });
  },

  REMOVE_PRODUCT(state, data) {
    state.products = state.products.filter((p) => {
      if (p.id != data.payload.id) {
        return p;
      }
    });
  },
  RESET_STATE(state) {
    const initial = initialProductState();
    state.products = initial.products;
  },
};
