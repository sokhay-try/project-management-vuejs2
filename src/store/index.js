import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import modules from "./modules";

Vue.use(Vuex);

const dataState = createPersistedState({
  key: "vuex",
  paths: [modules],
  reducer(val) {
    if (val.auth.authenticated === false) {
      // return empty state when user logged out
      return {};
    }
    return val;
  },
});

export default new Vuex.Store({
  modules,
  plugins: [dataState],
  strict: process.env.NODE_ENV === "development",
});
