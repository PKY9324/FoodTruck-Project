<template>
  <div>
    <button class="logout-button" @click.prevent="onLogout">로그아웃</button>
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
.logout-button {
  all: unset;
  position: absolute;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
  right: 0px;
  top: 0px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  z-index: 1;
  cursor: pointer;
}
</style>
