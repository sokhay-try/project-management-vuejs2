import authStore from "@/store";
export default function auth({ next, router }) {
  if (!authStore.state.auth.authenticated) {
    return router.push({ name: `login` });
  }
  return next();
}
