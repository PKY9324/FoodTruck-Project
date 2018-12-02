<template>
    <router-link to="/auth/kakao" tag="button" class="kakao">
        <div class="kakao"></div>
    </router-link>
</template>

<script>
export default {
  name: "KakaoButton"
};
</script>

<style>
.kakao {
  all: unset;
  background-image: url("../../assets/kakaobutton.png");
  background-repeat: no-repeat;
  cursor: pointer;
  height: 50px;
  color: white;
  border-radius: 5px;
}
</style>

