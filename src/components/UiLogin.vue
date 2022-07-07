<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    min-width="360px"
  >
    <div>
      <v-tabs
        v-model="tab"
        show-arrows
        background-color="deep-purple accent-4"
        icons-and-text
        dark
        grow
      >
        <v-tab
          v-for="i in tabs"
          :key="i.name"
        >
          <v-icon large>{{ i.icon }}</v-icon>
          <div class="caption py-1">{{ i.name }}</div>
        </v-tab>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form
                ref="loginForm"
                v-model="valid"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginUsername"
                      :rules="loginUsernameRules"
                      label="Username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginPassword"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                    xsm="12"
                  >
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="3"
                    xsm="12"
                    align-end
                  >
                    <v-btn
                      x-large
                      block
                      :disabled="!valid"
                      color="success"
                      @click="validate"
                    > Login </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "UiLogin",

  mounted() {
    console.log("UiLogin component is mounted");
  },

  data: () => ({
    show1: false,
    dialog: true,
    tab: 0,
    tabs: [{ name: "Login", icon: "mdi-account" }],
    valid: true,
    loginPassword: "",
    loginUsername: "",
    loginUsernameRules: [
      (v) => !!v || "Required",
      (v) => {
        if (v.length < 2) {
          return "Username should be more than 1 characters";
        }
        return true;
      },
    ],
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),

  props: {
    onLogin: Function,
  },

  components: {},

  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        const data = {
          username: this.loginUsername,
          password: this.loginPassword,
        };
        this.onLogin({ data });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },

  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

