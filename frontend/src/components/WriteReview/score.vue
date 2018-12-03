<template>
  <div>
    <div v-for="(image, index) in images" :key="index">
      <button @click="clickScore"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      images: [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 }
      ]
    };
  },
  methods: {
    clickScore() {
      this.isActive = true;
    }
  }
};
</script>

<style>
.click__score__one {
  all: unset;
  background-image: url("../../assets/one.png");
  background-size: cover;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.click__score__clicked {
  border: 2px solid #3498db;
}
</style>
