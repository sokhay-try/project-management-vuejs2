<template>
  <div class="main">
    <slot name="header" />
    <slot name="content" />
  </div>

</template>

<script>
export default {
  name: "Main",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  background: $color-white;
  transition: 0.5s;
}
</style>
