<template>
  <div id="carousel-container">
    <carousel :navigationEnabled="true" :perPageCustom="[[768, 2], [1024, 4]]">
      <slide>Image 1</slide>
      <slide>Image 2</slide>
      <slide>Image 3</slide>
      <slide>Image 4</slide>
      <slide>Image 5</slide>
      <slide>Image 6</slide>
      <slide>Image 7</slide>
      <slide>Image 8</slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>
#carousel-container {
  padding: 30px;
}

.VueCarousel {
  margin-top: 60px;
}

.VueCarousel-slide {
  position: relative;
  background: gray;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 350px;
}
</style>
