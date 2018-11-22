<template>
  <div class="container">
    <div class="close" @click="$emit('close')">
      <font-awesome-icon :icon="closeIcon" size="2x" />
    </div>
    <div class="title-login">로그인</div>
    <div class="button-group">
      <facebook-button />
      <kakao-button />
      <google-button />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";
import KakaoButton from "./KakaoButton";

export default {
  name: "LoginModal",
  computed: {
    closeIcon() {
      return faTimes;
    }
  },
  components: {
    FontAwesomeIcon,
    "facebook-button": FacebookButton,
    "google-button": GoogleButton,
    "kakao-button": KakaoButton
  }
};
</script>

<style scoped>
.container {
  position: relative;
  padding: 0;
}

.close {
  position: absolute;
  right: 0;
  margin-right: 8px;
  margin-top: 5px;
  cursor: pointer;
}

.title-login {
  position: absolute;
  left: 35%;
  top: 40px;
  font-size: 2.5em;
  font-weight: bold;
}

.button-group {
  position: absolute;
  left: 50px;
  top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
  width: 300px;
  height: 250px;
}
</style>
