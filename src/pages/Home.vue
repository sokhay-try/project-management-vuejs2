<template>
  <div class="home">

    <div class="w-full flex justify-center">
      <div class="w-11/12">
        <ui-search-box :onSearchText="onSearchText" />
      </div>

    </div>
    <div class="w-full flex justify-center mt-10">
      <div class="w-11/12">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6"
          >
            <v-text-field
              v-model="price"
              type="number"
              label="Price"
              outlined
              rounded
              dense
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
          >
            <v-text-field
              v-model="quantity"
              type="number"
              label="Quantity"
              outlined
              rounded
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
          >
            <v-btn
              small
              color="primary"
              dark
              @click="onFilterProduct"
            >Submit</v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="w-full flex justify-center mt-10">

      <div class="w-11/12">
        <div class="flex justify-end mb-5">
          <v-btn
            color="primary"
            dark
            @click="onAddNew"
          >Add New</v-btn>
        </div>
        <ui-table
          :headers="headers"
          :items="dataProducts"
          :itemPerPage="5"
          :onEdit="onEdit"
          :onDelete="onDelete"
        />
      </div>
    </div>
    <!-- Modal -->
    <ui-product-form-modal
      v-if="isShowModal"
      :isShowModal="isShowModal"
      :onModalSubmit="onModalSubmit"
      :onModalClose="onModalClose"
      :editId="editId"
    />

  </div>

</template>

<script>
import UiSearchBox from "@/components/UiSearchBox.vue";
import UiTable from "@/components/product/UiTable.vue";
import UiProductFormModal from "@/components/product/UiFormModal.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "IndexPage",

  components: {
    UiSearchBox,
    UiTable,
    UiProductFormModal,
  },

  data() {
    return {
      price: null,
      quantity: null,
      isShowModal: false,
      editId: "",
      headers: [
        {
          text: "Id",
          value: "index",
          sortable: false,
        },
        { text: "Image", value: "image", sortable: false },
        { text: "Name", value: "name", sortable: false },
        { text: "Description", value: "description", sortable: false },
        { text: "Price", value: "price", sortable: false },
        { text: "Quantity", value: "quantity", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],

      dataProducts: this.getAllProducts(),
    };
  },

  methods: {
    getAllProducts() {
      return this.$store.state.product.products.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
    onAddNew() {
      this.editId = "";
      this.isShowModal = true;
    },
    async onSearchText(txt) {
      this.dataProducts = this.$store.getters["product/searchProduct"](txt);
    },
    onModalClose() {
      this.isShowModal = false;
    },
    async onModalSubmit(item) {
      try {
        if (item.data.id) {
          await this.$store.dispatch({
            type: "product/editProduct",
            payload: {
              ...item.data,
            },
          });
        } else {
          await this.$store.dispatch({
            type: "product/addProduct",
            payload: {
              ...item.data,
              id: uuidv4(),
              action: true,
            },
          });
        }
        this.dataProducts = this.products;
        this.isShowModal = false;
      } catch (err) {
        console.log("error::", err);
      }
    },
    onEdit(item) {
      this.editId = item.id;
      this.isShowModal = true;
    },
    async onDelete(item) {
      await this.$store.dispatch({
        type: "product/removeProduct",
        payload: {
          id: item.id,
        },
      });
      this.dataProducts = this.products;
    },
    async onFilterProduct() {
      this.dataProducts = this.$store.getters["product/filterProduct"]({
        price: this.price,
        quantity: this.quantity,
      });
    },
  },

  computed: {
    products() {
      return this.$store.state.product.products.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
