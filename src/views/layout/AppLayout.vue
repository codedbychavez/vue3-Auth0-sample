<script>
import Navbar from '../../components/shared/Navbar.vue';
export default {
  props: {
    navigationItems: Array,
  },
  components: { Navbar }
}
</script>

<template>
  <div>
    <Navbar :navigationItems="navigationItems" />
    <main>
        <slot />
    </main>
  </div>
</template>