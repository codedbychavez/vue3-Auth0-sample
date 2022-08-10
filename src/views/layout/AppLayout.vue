<script>
import Navbar from "../../components/shared/Navbar.vue";
export default {
  props: {
    navigationItems: Array,
  },
  components: { Navbar },
};
</script>

<template>
  <div class="app-layout">
    <Navbar :navigationItems="navigationItems" />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  padding: 1rem;
}
</style>
