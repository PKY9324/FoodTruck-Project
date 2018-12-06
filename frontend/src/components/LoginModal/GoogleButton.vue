<template>
  <button class="google" @click.prevent="onSigninGoogle">
    <span>
      <font-awesome-icon :icon="googleIcon" size="2x"/>
    </span>
    <span>구글로 로그인</span>
    <span></span>
  </button>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";

export default {
  name: "GoogleButton",
  methods: {
    onSigninGoogle() {
      this.$store.dispatch("signUserInGoogle");
    }
  },
  computed: {
    googleIcon() {
      return faGoogle;
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
.google {
  all: unset;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #cf4332;
  height: 50px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
</style>
