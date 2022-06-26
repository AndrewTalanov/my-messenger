<script>
import ButtonContinue from "@/components/ButtonContinue.vue";
import NavMenu from "@/components/NavMenu.vue";
import ChangeRegion from "@/components/ChangeRegion.vue";
export default {
  components: { ButtonContinue, NavMenu, ChangeRegion },
  data() {
    return {
      countryMenu: false,
      inputFocus: false,
      numberRegion: "+7",
      btnContinue: {
        link: "/",
        content: "Continue",
      },
      navMenu: {
        link: "/",
      },
      changeRegion: [
        {
          id: 0,
          number: "+2",
          icon: "",
        },
        {
          id: 1,
          number: "+7",
          icon: "",
        },
        {
          id: 2,
          number: "+129",
          icon: "",
        },
      ],
      valueTelInput: "",
    };
  },
  methods: {
    isCountryChanged(flag) {
      return (this.countryMenu = flag);
    },
    isInputFocus(flag) {
      return (this.inputFocus = flag);
    },
    isRegion(number) {
      return (this.numberRegion = number);
    },
  },
  mounted() {},
};
</script>

<template>
  <div
    class="verification-page"
    @click="[isInputFocus(false), isCountryChanged(false)]"
  >
    <div class="container">
      <nav-menu :navMenu="navMenu"></nav-menu>

      <div class="info">
        <h2>Enter Your Phone Number</h2>
        <p>
          Please confirm your country code and enter <br />
          your phone number
          {{ valueTelInput }}
        </p>
      </div>

      <div class="input-phone-number">
        <div class="country" @click.stop="isCountryChanged(true)">
          <img src="../assets/polsha.png" alt="country flag" />
          <p>{{ numberRegion }}</p>
          <div class="country-change" v-if="countryMenu">
            <change-region
              @click.stop="[isRegion(item.number), isCountryChanged(false)]"
              :item="item"
              :key="item.id"
              v-for="item in changeRegion"
            ></change-region>
          </div>
        </div>
        <input
          type="tel"
          class="input"
          @click.stop="isInputFocus(true)"
          v-model="valueTelInput"
          placeholder="Phone Number"
        />
      </div>
    </div>
    <button-continue :btnContinue="btnContinue"></button-continue>
    <!-- <button-continue :btnContinue="btnContinue" :class="{ active: inputFocus }"></button-continue> -->
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
      .input,
      .country-change {
        background-color: #f7f7fc;
      }
      .country {
        padding: 6px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: 4px;
        position: relative;
        p {
          color: #adb5bd;
        }
        img {
          width: 18px;
          height: 18px;
        }
        .country-change {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-radius: 4px;
          .change-item {
            box-shadow: 0 0 5px rgb(196, 196, 196);
            // background-color: red;
            width: 100%;
            box-sizing: border-box;
            padding: 6px 8px;
            display: flex;
            align-items: center;
            gap: 8px;
            border-radius: 4px;
          }
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
