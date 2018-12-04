<template>
  <div id="carousel-container">
    <carousel :perPageCustom="[[768, 2], [1024, 4]]">
      <slide></slide>
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
}

.VueCarousel {
  margin-top: 60px;
}

.VueCarousel-slide {
  position: relative;
  background: white;
  border: 1px solid gray;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 350px;
}
</style>
