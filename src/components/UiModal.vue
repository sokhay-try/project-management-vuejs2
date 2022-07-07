<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <v-card>
      <slot name="title">
        <v-card-title class="headline">Modal Title</v-card-title>
      </slot>
      <slot name="content">
        <v-card-text>
          Modal content can be form or anything
        </v-card-text>
      </slot>
      <v-card-actions>
        <v-spacer></v-spacer>
        <slot name="actions">
          <v-btn
            color="primary"
            @click="onModalSubmitFn"
          >Save</v-btn>
          <v-btn
            color=""
            @click="onModalCloseFn"
          >Close</v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
export default {
  name: "UiModal",

  mounted() {
    console.log("UiModal component is mounted");
    this.dialog = this.isShow;
  },

  data: () => ({
    dialog: false,
  }),

  props: {
    isShow: {
      default: false,
      type: Boolean,
    },
    onModalSubmit: Function,
    onModalClose: Function,
  },

  components: {},

  methods: {
    onModalSubmitFn() {
      if (this.onModalSubmit) {
        this.onModalSubmit();
      } else {
        this.dialog = false;
      }
    },
    onModalCloseFn() {
      if (this.onModalClose) {
        this.onModalClose();
      } else {
        this.dialog = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
