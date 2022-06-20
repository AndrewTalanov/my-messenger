<script>
  export default {
    data() {
      return {
        countryMenu: false,
        inputFocus: false
      }
    },
    methods: {
      isCountryChanged() {
        console.log('ok');
      },
      isInputFocus(flag) {
        return this.inputFocus = flag
      }
    },
    mounted() {
    }

  }


</script>

<template>
  <div class="verification-page" @click="isInputFocus(false)">
    <div class="container">
      <nav class="nav">
        <router-link to="/">
          <img src="../assets/arrow-left.svg" alt="back" />
        </router-link>
      </nav>

      <div class="info">
        <h2>Enter Your Phone Number</h2>
        <p>
          Please confirm your country code and enter <br />
          your phone number
        </p>
      </div>

      <div class="input-phone-number">
        <div class="country" @click="isCountryChanged">
          <img src="../assets/polsha.png" alt="country flag" />
          <p>+7</p>
        </div>
        <input type="tel" class="input" @click.stop="isInputFocus(true)" placeholder="Phone Number" />
      </div>
    </div>

    <router-link to="/verification" class="button-continue" :class="{active: inputFocus}">Continue</router-link>
  </div>
</template>

<style lang="scss" scoped>

.active {
  transform: translateY(-280px);
}

.verification-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .container {
    .info {
      margin: 30% 0 14.5%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .input-phone-number {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      height: 36px;
      .country,
      .input {
        background-color: #f7f7fc;
      }
      .country {
        padding: 6px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: 4px;
        p {
          color: #adb5bd;
        }
        img {
          width: 18px;
          height: 18px;
        }
      }
      .input {
        padding: 6px 8px;
        width: 100%;
        border: none;
        outline: none;
        box-sizing: border-box;
        color: #adb5bd;
        border-radius: 4px;
      }
    }
  }
}
</style>
