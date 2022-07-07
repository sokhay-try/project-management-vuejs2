<template>

  <div class="relative w-full">
    <!-- SIDE BAR -->
    <app-side-bar v-if="this.$store.state.auth.authenticated" />
    <!-- Main -->
    <app-main v-if="this.$store.state.auth.authenticated">
      <template v-slot:header>
        <app-header />
      </template>
      <template v-slot:content>
        <v-app>
          <div class="content-wrapper p-4">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
        </v-app>
      </template>
    </app-main>

    <!-- Not Authenticated -->
    <v-app v-if="!this.$store.state.auth.authenticated">
      <div class="content-wrapper">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </v-app>
  </div>

</template>

<script>
import AppSideBar from "./Sidebar.vue";
import AppMain from "./Main.vue";
import AppHeader from "./Header.vue";
export default {
  name: "AppLayout",
  components: {
    AppSideBar,
    AppMain,
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>
