import homePage from "../pages/Home.vue";
import { DOMAIN_TITLE } from "../../.env";

export const routes = [
  {
    path: "/",
    name: "index",
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home` },
  },
];
