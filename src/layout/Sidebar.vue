<template>
  <div class="navigation">
    <ul>
      <li>
        <a href="#">
          <span class="icon">
            <v-icon large>
              mdi-apple
            </v-icon>
          </span>
          <span class="title capitalize">Welcome {{ currentUserLogin }}</span>
        </a>
      </li>
      <li
        v-for="menu in menus"
        v-bind:key='menu.id'
        v-bind:class="{ active: (menu.routeName === currentRouteName) }"
      >

        <router-link
          :to="{ name: menu.routeName }"
          v-if="menu.routeName != 'login' "
        >
          <span class="icon">
            <v-icon large>
              {{ menu.icon }}
            </v-icon>
          </span>
          <span class="title">{{ menu.title }}</span>
        </router-link>
        <a
          v-if="menu.routeName == 'login'"
          @click="onLogout"
        >
          <span class="icon">
            <v-icon large>
              {{ menu.icon }}
            </v-icon>
          </span>
          <span class="title">{{ menu.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { resetAllStates } from "@/store/resetAllState";
export default {
  name: "SideBar",
  components: {},
  data() {
    return {
      activeId: 1,
      menus: [
        {
          id: 1,
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          routeName: "index",
        },
        {
          id: 2,
          icon: "mdi-logout",
          title: "Sign Out",
          routeName: "login",
        },
      ],
    };
  },
  methods: {
    selectMenu: function (id) {
      this.activeId = id;
    },
    async onLogout() {
      this.$router.push({ name: "login" });
      await this.$store.dispatch({
        type: "auth/logout",
      });
      await resetAllStates(this.$store);
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    currentUserLogin() {
      return this.$store.state.auth.user.username;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  width: 300px;
  height: 100%;
  background: #2a2185;
  border-left: 10px solid $color-blue;
  transition: 0.5s;
  overflow: hidden;
}
.navigation.active {
  width: 80px;
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.navigation ul li:hover {
  cursor: pointer;
}

.navigation ul li.active {
  background-color: $color-white;
}

.navigation ul li:nth-child(1) {
  margin-bottom: 40px;
  pointer-events: none;
}

.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: $color-white;
}

.navigation ul li.active a {
  color: $color-blue !important;
}

.navigation ul li.active a {
  .icon {
    .v-icon {
      color: $color-blue;
    }
  }
}

.icon {
  .v-icon {
    color: $color-white;
  }
}

.navigation ul li a .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
}

.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}

/* --------- curve outside ---------- */
.navigation ul li.active a::before {
  content: "";
  position: absolute;
  right: 0;
  top: -50px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 35px 35px 0 10px $color-white;
  pointer-events: none;
}
</style>
