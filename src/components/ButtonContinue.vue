<script>
export default {
  name: "ButtonContinue",
  props: {
    btnContinue: {
      type: Object
    }
  }
}
</script>

<template>
  <router-link :to="btnContinue.link" class="button-continue">{{btnContinue.content}}</router-link>
</template>

<style lang="scss" scoped>
.button-continue {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  box-sizing: border-box;
  width: 100%;
  background-color: #002de3;
  border-radius: 30px;
}

</style>