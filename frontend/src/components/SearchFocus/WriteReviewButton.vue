<template>
  <button class="write__review__button" @click="send()">리뷰 쓰기</button>
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
.write__review__button {
  all: unset;
  position: absolute;
  right: 80px;
  width: 100px;
  height: 40px;
  background-color: #3498db;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-left: 110px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
