import homePage from "../pages/Home.vue";
import loginPage from "../pages/Login.vue";
import { auth } from "@/middlewares";
export const routes = [
  {
    path: "/",
    name: "index",
    component: homePage,
    meta: {
      title: `${process.env.VUE_APP_DOMAIN_TITLE} | home`,
      middleware: auth,
    },
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
    meta: { title: `${process.env.VUE_APP_DOMAIN_TITLE} | login` },
  },
];
