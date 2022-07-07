import Vue from "vue";

import AppLayout from "./layout/index.vue";
import router from "./router";
import store from "./store";

import { vuetify } from "./plugins";

import "./assets/css/tailwind.css";
import "./scss/style.scss";

Vue.config.productionTip = false;

new Vue({
  name: "Root",
  router,
  store,
  vuetify,
  render: (h) => h(AppLayout),
}).$mount("#app");
