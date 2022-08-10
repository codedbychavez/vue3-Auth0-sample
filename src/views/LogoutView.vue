<script>
export default {
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
  methods: {
    handleLogout() {
      this.$auth0.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<template>
  <div>
    <div v-if="isAuthenticated">
      <button @click="handleLogout">Logout</button>
    </div>
    <div v-else>You are logged out.</div>
  </div>
</template>
