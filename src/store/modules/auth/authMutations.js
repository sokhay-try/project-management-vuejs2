export default {
  LOGIN(state, data) {
    state.authenticated = true;
    state.user = data.payload;
  },
  LOGOUT(state) {
    state.authenticated = false;
    state.user = {
      username: "",
      password: "",
    };
  },
};
