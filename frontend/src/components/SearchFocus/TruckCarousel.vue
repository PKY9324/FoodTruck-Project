<template>
  <div id="carousel-container">
    <carousel :perPageCustom="[[360, 1],[375, 1], [768, 2], [1024, 4]]">
      <slide>
        <v-lazy-image
          class="carousel__inner__img"
          :src="urlList1"
          src-placeholder="../../../img/notfound/img_404.png"
        />
      </slide>
      <slide>
        <v-lazy-image class="carousel__inner__img" :src="urlList2"/>
      </slide>
      <slide>
        <v-lazy-image class="carousel__inner__img" :src="urlList3"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { firestorage } from "../../../config/firebaseInit.js";
import { Carousel, Slide } from "vue-carousel";
import VLazyImage from "v-lazy-image";

export default {
  data() {
    return {
      urlList1: "",
      urlList2: "",
      urlList3: ""
    };
  },
  mounted() {
    const storageImages = firestorage
      .ref("img")
      .child(this.$route.params.objectID);
    storageImages
      .child("000001.jpg")
      .getDownloadURL()
      .then(url => {
        this.urlList1 = url;
        // console.log(url);
      });

    storageImages
      .child("000002.jpg")
      .getDownloadURL()
      .then(url => {
        this.urlList2 = url;
        // console.log(url);
      });

    storageImages
      .child("000003.jpg")
      .getDownloadURL()
      .then(url => {
        this.urlList3 = url;
        // console.log(url);
      });
  },
  components: {
    Carousel,
    Slide,
    "v-lazy-image": VLazyImage
  }
};
</script>

<style>
@media screen and (max-width: 360px) {
  .VueCarousel {
    margin-top: 60px;
  }

  .VueCarousel-slide {
    position: relative;
    background: white;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 350px;
  }

  .carousel__inner__img {
    all: unset;
    width: 359px;
    height: 300px;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  .VueCarousel {
    margin-top: 60px;
  }

  .VueCarousel-slide {
    position: relative;
    background: white;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 350px;
  }

  .carousel__inner__img {
    all: unset;
    width: 374px;
    height: 300px;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .VueCarousel {
    margin-top: 60px;
  }

  .VueCarousel-slide {
    position: relative;
    background: white;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 350px;
  }

  .carousel__inner__img {
    all: unset;
    width: 413px;
    height: 350px;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .VueCarousel {
    margin-top: 60px;
  }

  .VueCarousel-slide {
    position: relative;
    background: white;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 350px;
  }

  .carousel__inner__img {
    all: unset;
    width: 380px;
    height: 350px;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .VueCarousel {
    margin-top: 60px;
  }

  .VueCarousel-slide {
    position: relative;
    background: white;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 350px;
  }

  .carousel__inner__img {
    all: unset;
    width: 470px;
    height: 350px;
  }
}

@media screen and (min-width: 1025px) {
  .VueCarousel {
    margin-top: 60px;
  }

  .VueCarousel-slide {
    position: relative;
    background: white;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 350px;
  }

  .carousel__inner__img {
    all: unset;
    width: 470px;
    height: 350px;
  }
}
/* #carousel-container {
}

.VueCarousel {
  margin-top: 60px;
}

.VueCarousel-slide {
  position: relative;
  background: white;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 350px;
}

.carousel__inner__img {
  all: unset;
  width: 475px;
  height: 350px;
} */
</style>
