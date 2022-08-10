<script>
export default {
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
  methods: {
    handleLogin() {
      this.$auth0.loginWithRedirect();
    },
  },
};
</script>

<template>
  <div>
    <div v-if="isAuthenticated">You are currently logged in.</div>
    <div v-else>
      <button @click="handleLogin">Login</button> to your account.
    </div>
  </div>
</template>
