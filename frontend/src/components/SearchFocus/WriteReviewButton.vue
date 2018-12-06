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
@media screen and (max-width: 360px) {
  .write__review__button {
    all: unset;
    position: absolute;
    right: 20px;
    width: 80px;
    height: 30px;
    background-color: #3498db;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: white;
    margin-left: 110px;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  .write__review__button {
    all: unset;
    position: absolute;
    right: 20px;
    width: 80px;
    height: 30px;
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
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .write__review__button {
    all: unset;
    position: absolute;
    right: 20px;
    width: 90px;
    height: 30px;
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
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .write__review__button {
    all: unset;
    position: absolute;
    right: 40px;
    width: 90px;
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
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .write__review__button {
    all: unset;
    position: absolute;
    right: 70px;
    width: 90px;
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
}

@media screen and (min-width: 1025px) {
  .write__review__button {
    all: unset;
    position: absolute;
    right: 70px;
    width: 90px;
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
}

/* .write__review__button {
  all: unset;
  position: absolute;
  right: 80px;
  width: 100px;
  height: 40px;
  background-color: #3498db;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: white ! important;
  margin-left: 110px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
} */
</style>
