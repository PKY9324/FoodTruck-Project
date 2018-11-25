<template>
  <div class="background">
    <div class="image"></div>
    <home-logo></home-logo>
    <user-login></user-login>
  
    <div class="content">
      <h1>우리 동네</h1>
      <h1>푸드트럭</h1>
      <h1>어디있을까?</h1>
    </div>

    <div>
      <search-input></search-input>
    </div>
  </div>
</template>

<script>
import HomeSearchInput from './HomeSearchInput'
import UserLogin from './UserLogin'
import HomeLogo from './HomeLogo'

export default {
  components: {
    'search-input': HomeSearchInput,
    'user-login': UserLogin,
    'home-logo': HomeLogo
  }
}
</script>

<style scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: -1;
}

.background > .image {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.7)
    ),
    url('../../assets/truckimage.jpg');

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: opacity 2s;
}

.content {
  color: white;
  position: fixed;
  left: 30%;
  top: 25%;
  font-size: 3vw;
}
</style>
