export const resetAllStates = async (store) => {
  await store.dispatch({
    type: "auth/resetState",
  });
  await store.dispatch({
    type: "product/resetState",
  });
};
