<template>
  <div>
    <button class="mini-logout-button" @click.prevent="onLogout">로그아웃</button>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
@media screen and (max-width: 375px) {
  .mini-logout-button {
    all: unset;
    position: absolute;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    right: 0;
    top: 0px;
    color: white !important;
    font-weight: 600;
    z-index: 1;
    cursor: pointer;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .mini-logout-button {
    all: unset;
    position: absolute;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    right: 0;
    top: 0px;
    color: white !important;
    font-weight: 600;
    z-index: 1;
    cursor: pointer;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .mini-logout-button {
    all: unset;
    position: absolute;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 10px;
    right: 0;
    top: 0px;
    color: white !important;
    font-weight: 600;
    z-index: 1;
    cursor: pointer;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .mini-logout-button {
    all: unset;
    position: absolute;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 10px;
    right: 0;
    top: 0px;
    color: white !important;
    font-weight: 600;
    z-index: 1;
    cursor: pointer;
  }
}

@media screen and (min-width: 1025px) {
  .mini-logout-button {
    all: unset;
    position: absolute;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 10px;
    right: 0;
    top: 0px;
    color: white !important;
    font-weight: 600;
    z-index: 1;
    cursor: pointer;
  }
}

/* .mini-logout-button {
  all: unset;
  position: absolute;
  padding-top: 15px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  right: 3%;
  top: 0px;
  color: white ! important;
  font-weight: 600;
  z-index: 1;
  cursor: pointer;
} */
</style>
