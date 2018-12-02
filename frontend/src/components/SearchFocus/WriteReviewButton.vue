<template>
  <button type="submit" @click="send()">리뷰 쓰기</button>
</template>

<script>
export default {
  methods: {
    send(value) {
      this.$router.push({
        name: "writeReview"
      });
    }
  }
};
</script>

<style>
</style>
