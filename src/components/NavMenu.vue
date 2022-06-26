<script>
export default {
  name: "NavMenu",
  props: {
    navMenu: {
      type: Object
    }
  }
};
</script>

<template>
  <nav class="nav">
    <router-link :to="navMenu.link">
      <img src="../assets/arrow-left.svg" alt="back" />
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
</style>