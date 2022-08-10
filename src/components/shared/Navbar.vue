<script>
export default {
  props: {
    navigationItems: Array,
  },
  data() {
    return {
      user: this.$auth0.user,
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>

<template>
  <div class="navbar">
    <ul class="nav-list">
      <li
        v-for="(navigationItem, index) in navigationItems"
        :key="index"
        class="nav-item"
      >
        <router-link class="a" :to="navigationItem.path" active-class="active">
          {{ navigationItem.name }}
        </router-link>
      </li>
    </ul>
    <div class="account-details">
      <span v-if="isAuthenticated"> Hi, {{ user.given_name }}! </span>
    </div>
  </div>
</template>

<style scoped>
.a {
  text-decoration-line: none;
}
.active {
  color: black;
  text-decoration-line: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 6px;
}

.navbar {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.nav-item {
  margin-right: 1rem;
  color: darkgray;
  font-weight: bold;
}

.account-details {
  margin-left: auto;
}
</style>
