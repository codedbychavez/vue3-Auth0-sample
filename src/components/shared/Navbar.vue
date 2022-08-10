<script>
export default {
  props: {
    navigationItems: Array,
  }
}
</script>

<template>
  <ul class="nav-list">
    <li v-for="(navigationItem, index) in navigationItems" :key="index" class="nav-item">
      <router-link :to="navigationItem.path">
        {{ navigationItem.name }}
      </router-link>
    </li>
  </ul>
</template>

<style>
.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: underline;
  color: cornflowerblue;
}
</style>