<template>
  <ui-modal :isShow="isShowModal">
    <template v-slot:title>
      <v-card-title class="headline">{{ modalTitle }}</v-card-title>
    </template>
    <template v-slot:content>
      <v-card-text>
        <v-form
          v-model="valid"
          ref="form"
        >
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="productData.name"
                  :rules="productData.nameRules"
                  label="Product name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-textarea
                  v-model="productData.description"
                  :rules="productData.desRules"
                  required
                  label="Product description"
                  auto-grow
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Price"
                  type="number"
                  v-model="productData.price"
                  :rules="productData.priceRules"
                  prefix="$"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  label="Quantity"
                  type="number"
                  v-model="productData.quantity"
                  :rules="productData.quantityRules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-file-input
                  accept="image/*"
                  label="Upload Image"
                  v-model="productData.image"
                  :rules="productData.imageRules"
                ></v-file-input>
                <v-img
                  :src="url"
                  max-width="100"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </template>
    <template v-slot:actions>
      <v-btn
        color="primary"
        @click="onSubmitClicked"
      >Submit</v-btn>
      <v-btn @click="onCloseModalClicked">Close</v-btn>
    </template>
  </ui-modal>

</template>

<script>
import UiModal from "@/components/UiModal.vue";
export default {
  name: "UiProductFormModal",

  mounted() {
    console.log("UiProductFormModal component is mounted");
    if (this.editId) {
      const product = this.$store.getters["product/getProductById"](
        this.editId
      );
      this.productData = {
        ...this.productData,
        ...product,
      };
    }
  },

  data: () => ({
    productData: {
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      description: "",
      desRules: [(v) => !!v || "Description is required"],
      price: null,
      priceRules: [
        (v) => !!v || "Price is required",
        (v) => {
          if (v <= 0) {
            return "Price must be more than 0$";
          }
          return true;
        },
      ],
      quantity: null,
      quantityRules: [
        (v) => !!v || "Quantity is required",
        (v) => {
          if (v < 0) {
            return "Quantity must be more than 0";
          }
          return true;
        },
      ],
      image: null,
      imageRules: [(v) => !!v || "Image is required"],
    },
    valid: false,
  }),

  props: {
    isShowModal: {
      default: false,
      type: Boolean,
    },
    editId: {
      default: "",
      type: String,
    },
    onModalSubmit: Function,
    onModalClose: Function,
  },

  components: {
    UiModal,
  },

  methods: {
    onSubmitClicked() {
      const isValid = this.validate();

      if (isValid) {
        const data = {
          id: this.editId || "",
          name: this.productData.name,
          description: this.productData.description,
          price: this.productData.price,
          quantity: this.productData.quantity,
          image: this.url,
        };
        this.clearForm();
        this.onModalSubmit({ data });
      }
    },
    onCloseModalClicked() {
      this.resetValidation();
      this.clearForm();
      this.onModalClose();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    clearForm() {
      this.productData.id = "";
      this.productData.name = "";
      this.productData.description = "";
      this.productData.price = null;
      this.productData.quantity = null;
      this.productData.image = null;
      this.$refs.form.reset();
    },
    validate() {
      return this.$refs.form.validate();
    },
  },

  computed: {
    modalTitle() {
      return this.editId == "" ? "Create New Product" : "Edit Product";
    },
    url() {
      if (!this.productData.image) return;
      if (typeof this.productData.image == "string") {
        const strImg = this.productData.image;
        let metadata = {
          type: "image/png",
        };
        let file = new File([this.productData.image], "", metadata);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.productData.image = file;
        return strImg;
      }
      if (typeof this.productData.image == "object") {
        return URL.createObjectURL(this.productData.image);
      }
      return this.productData.image;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
