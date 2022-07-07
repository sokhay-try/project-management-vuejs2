<template>
  <div class="topbar shadow-sm">
    <div class="toggle">
      <v-icon large>
        mdi-menu
      </v-icon>
    </div>
    <div class="project-title">
      <label class="font-semibold">Product Management System</label>
    </div>

    <div class="user">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt=""
      >
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-title label {
  position: relative;
  width: 100%;
}

.user {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.user img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
