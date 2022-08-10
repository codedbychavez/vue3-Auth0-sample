<script>
import AppLayout from './views/layout/AppLayout.vue';

export default {
  data() {
    return {
      navigationItems: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Protected',
          path: '/protected'
        },
        {
          name: 'Student',
          path: '/student'
        }
      ]
    }
  },
  components: {
    AppLayout,
  }
}
</script>

<template>
  <AppLayout :navigationItems="navigationItems">
    <router-view>
    </router-view>
  </AppLayout>
</template>