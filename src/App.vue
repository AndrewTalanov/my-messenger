<template>
  <div class="wrapper" :style="{height: heightWrapper}">
    <router-view></router-view>
  </div>


    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </nav> -->
</template>

<script>
  export default {
    data() {
      return {
        heightWrapper: 100 + 'vh',
      }
    },
    methods: {
      isHeightWrapper: function() {
        return this.heightWrapper = document.documentElement.clientHeight + 'px';
      },      
    },
    mounted() {
      this.isHeightWrapper();
    }
  }

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

html, body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
  color: #F7F7FC;
  text-decoration: none;
}
.wrapper {
  padding: 20px 20px 40px 20px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
