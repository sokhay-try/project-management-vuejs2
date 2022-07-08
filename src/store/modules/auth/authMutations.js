import { initialAuthState } from "./authState";
export default {
  LOGIN(state, data) {
    state.authenticated = true;
    state.user = data.payload;
  },
  LOGOUT(state) {
    state.authenticated = false;
  },
  RESET_STATE(state) {
    const initial = initialAuthState();
    state.authenticated = initial.authenticated;
    state.user = initial.user;
  },
};
