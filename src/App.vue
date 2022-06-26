<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {
    this.$store.commit("isHeightViewport");
  },
};
</script>

<template>
  <div class="wrapper" :style="{ height: $store.state.heightViewport }">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
h1,
h2,
h3,
a,
p {
  margin: 0;
}
h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
}
h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
}
p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
}
a {
  color: #f7f7fc;
  text-decoration: none;
}
.wrapper {
  padding: 20px 20px 40px 20px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
