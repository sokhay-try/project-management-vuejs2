<template>
  <ui-modal :isShow="isShowModal">
    <template v-slot:title>
      <v-card-title class="headline">{{ title }}</v-card-title>
    </template>
    <template v-slot:content>
      <span></span>
    </template>
    <template v-slot:actions>
      <v-btn
        color="primary"
        @click="onSubmitClicked"
      >Delete</v-btn>
      <v-btn @click="onCloseModalClicked">Cancel</v-btn>
    </template>
  </ui-modal>

</template>

<script>
import UiModal from "@/components/UiModal.vue";
export default {
  name: "UiConfirmDialog",

  mounted() {
    console.log("UiConfirmDialog component is mounted");
  },

  data: () => ({}),

  props: {
    title: {
      default: "Confirm Dialog Title",
      type: String,
    },
    isShowModal: {
      default: false,
      type: Boolean,
    },
    onModalSubmit: Function,
    onModalClose: Function,
  },

  components: {
    UiModal,
  },

  methods: {
    onSubmitClicked() {
      this.onModalSubmit();
    },
    onCloseModalClicked() {
      this.onModalClose();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
