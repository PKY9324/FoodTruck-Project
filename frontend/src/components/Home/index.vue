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
    <div class="home__search__input__container">
      <search-input/>
    </div>
  </div>
</template>

<script>
import HomeSearchInput from "./HomeSearchInput";
import UserLogin from "./UserLogin";
import HomeLogo from "./HomeLogo";

export default {
  components: {
    "search-input": HomeSearchInput,
    "user-login": UserLogin,
    "home-logo": HomeLogo
  }
};
</script>

<style>
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
    url("../../assets/truckimage.jpg");

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: opacity 2s;
}

@media screen and (max-width: 360px) {
  .content {
    color: white;
    position: fixed;
    left: 8vw;
    top: 25%;
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  .content {
    color: white;
    position: fixed;
    left: 8vw;
    top: 30%;
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 376px) and (max-width: 420px) {
  .content {
    color: white;
    -webkit-text-fill-color: white;
    position: fixed;
    left: 14vw;
    top: 30%;
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 421px) and (max-width: 786px) {
  .content {
    color: white;
    position: fixed;
    left: 14vw;
    top: 30%;
    font-size: 2.5rem;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .content {
    color: white;
    position: fixed;
    left: 13vw;
    top: 25%;
    font-size: 2.5rem;
  }
}

@media screen and (min-width: 1025px) {
  .content {
    color: white;
    position: fixed;
    left: 24vw;
    top: 22%;
    font-size: 3rem;
  }
}
</style>
