<script>
export default {
  name: "ChangeRegion",
  props: {
    item: {
      type: Object
    }
  }
};
</script>

<template>
  <div class="change-item">
    <img src="../assets/polsha.png" alt="country flag" />
    <p>{{item.number}}</p>
  </div>
</template>

<style lang="scss" scoped>
</style>