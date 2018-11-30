<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
}

/* 스크롤바 없애기 */
html {
  all: unset;
  overflow: hidden;
  height: 100%;
}
</style>
