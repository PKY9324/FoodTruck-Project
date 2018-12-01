<template>
  <div>
    <div class="title">{{ this.$route.params.id }}</div>
    <div class="container" v-for="list of lists" :key="list['.key']">
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '350px', height: '300px' }"
        @click="send(list.name, list['.key'])"
      >
        <div class="ftname">{{ list.name }}</div>
        <span class="ftrank">별점</span>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import { foodtruckRef } from "../../../config/firebaseInit.js";

export default {
  firebase: {
    lists: foodtruckRef.orderByChild("name")
  },
  data: () => {
    return {
      images: [""],
      index: null,
      lists: []
    };
  },
  methods: {
    send(name, key) {
      this.$router.push({
        name: "searchFocus",
        params: { name: name, key: key }
      });
      // console.log(key);
    }
  },
  components: {
    gallery: VueGallery
  }
};
</script> 

<style scoped>
a {
  all: unset;
}

.title {
  position: relative;
  top: 5rem;
  left: 2rem;
  font-size: 40px;
  font-weight: 600;
}

.image {
  position: relative;
  float: left;
  background-color: rgb(182, 182, 182);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 25px;
  cursor: pointer;
}

.container {
  margin-top: 90px;
  margin-left: 4rem;
}

.ftname {
  position: absolute;
  bottom: 20px;
  margin-left: 2rem;
  font-size: 18px;
  font-weight: 600;
}

.ftrank {
  position: absolute;
  bottom: 20px;
  right: 0;
  margin-right: 3rem;
  font-size: 18px;
  font-weight: 600;
}
</style>