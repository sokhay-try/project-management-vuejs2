<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="itemPerPage"
      class="elevation-1"
    >

      <template v-slot:item="{ item }">
        <tr
          :class="{activeRow: item.quantity < 10}"
          :key="item.id"
        >
          <td>{{ item.index }}</td>
          <td>
            <v-img
              max-width="100"
              :src="item.image"
            ></v-img>
          </td>
          <td>{{item.name}}</td>
          <td>{{item.description}}</td>
          <td>{{item.price}}</td>
          <td><span :class="item.quantity == 0 ? 'text-red-500' : '' ">{{item.quantity == 0 ? 'Out of stock' : item.quantity }}</span></td>
          <td>
            <v-icon
              v-if="item.action"
              small
              class="mr-2 cursor-pointer"
              @click="onEditClicked(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              v-if="item.action"
              small
              class="cursor-pointer"
              @click="onDeleteClicked(item)"
            >
              mdi-delete
            </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>

    <ui-confirm-dialog
      v-if="isShowModalConfirm"
      :title="'Are you sure want to delete?'"
      :onModalSubmit="onApproveDelete"
      :onModalClose="onRejectDelete"
      :isShowModal="isShowModalConfirm"
    />
  </div>
</template>

<script>
import UiConfirmDialog from "@/components/UiConfirmDialog.vue";
export default {
  name: "UiTable",
  components: {
    UiConfirmDialog,
  },
  data() {
    return {
      isShowModalConfirm: false,
      deleteItem: null,
    };
  },
  props: {
    items: {
      default: () => [],
      type: Array,
    },
    headers: {
      default: () => [],
      type: Array,
    },
    itemPerPage: {
      default: 10,
      type: Number,
    },
    onEdit: Function,
    onDelete: Function,
  },
  methods: {
    onEditClicked(item) {
      this.onEdit(item);
    },
    onDeleteClicked(item) {
      this.isShowModalConfirm = true;
      this.deleteItem = item;
    },
    onApproveDelete() {
      this.onDelete(this.deleteItem);
      this.deleteItem = null;
      this.isShowModalConfirm = false;
    },
    onRejectDelete() {
      this.isShowModalConfirm = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.activeRow {
  background: $color-gray;
}
</style>
