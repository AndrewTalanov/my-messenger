<script>

</script>

<template>
  <div class="start-page">
    <div class="order-0">
      <div class="img">
        <img src="../assets/start.png" alt="start-img"/>
      </div>
      <h1>Connect easily with <br> your family and friends over countries</h1>
    </div>
    <div class="order-1">
      <a href="#" class="start-page-policy">Terms & Privacy Policy</a>
      <router-link to="/verification" class="button-continue">Start Messaging</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .start-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 24% 0 0 0;
    box-sizing: border-box;
    .img {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .order-0, .order-1 {
      display: flex;
      flex-direction: column;
    }
    .order-0 {
      gap: 42px;
    }
    .order-1 {
      gap: 18px;
    }
    &-policy {
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      color: #0F1828;
    }
  }
</style>