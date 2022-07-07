<template>
  <ui-login :onLogin="makeLogin" />

</template>

<script>
import UiLogin from "@/components/UiLogin.vue";
export default {
  name: "LoginPage",

  components: {
    UiLogin,
  },

  data() {
    return {};
  },

  methods: {
    async makeLogin(params) {
      const { username, password } = params.data;
      await this.$store.dispatch({
        type: "auth/login",
        payload: {
          username,
          password,
        },
      });
      this.$router.push({ name: "index" });
    },
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
