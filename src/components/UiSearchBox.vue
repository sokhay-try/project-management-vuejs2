<template>
  <div class="ui-searchbox">
    <label>
      <input
        type="text"
        v-model="searchText"
        placeholder="Search..."
        @input="debounceInput"
      />
      <div class="icon">
        <v-icon small>
          mdi-magnify
        </v-icon>
      </div>
    </label>
  </div>

</template>

<script>
import { debounce } from "lodash";
export default {
  name: "UiSearchBox",
  data() {
    return {
      searchText: "",
    };
  },
  props: {
    onSearchText: Function,
  },

  components: {},

  methods: {
    debounceInput: debounce(function (e) {
      this.onSearchText(e.target.value);
    }, 1000),
  },
};
</script>

<style lang="scss" scoped>
.ui-searchbox {
  position: relative;
  // width: 400px;
  // margin: 0 10px;
}

.ui-searchbox label {
  position: relative;
  width: 100%;
}

.ui-searchbox label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  font-size: 15px;
  outline: none;
  border: 1px solid $color-black2;
}

.ui-searchbox label .icon {
  position: absolute;
  top: 0;
  left: 10px;
}
</style>
