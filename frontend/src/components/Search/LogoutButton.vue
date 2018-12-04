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
.mini-logout-button {
  all: unset;
  position: absolute;
  padding-top: 15px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  right: 3%;
  top: 0px;
  color: white;
  font-weight: 600;
  z-index: 1;
  cursor: pointer;
}
</style>
