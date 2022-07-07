export default {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id);
  },
  searchProduct: (state) => (searchTxt) => {
    if (!searchTxt) {
      return state.products;
    }
    const filtered = state.products.filter((p) => {
      return (
        p.name.toLowerCase().includes(searchTxt.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTxt.toLowerCase())
      );
    });
    return filtered;
  },
  filterProduct: (state) => (filterParam) => {
    if (!filterParam.price && !filterParam.quantity) {
      return state.products;
    }
    const { price, quantity } = filterParam;
    const filtered = state.products.filter((p) => {
      return p.price == price || p.quantity == quantity;
    });
    return filtered;
  },
};
