<template>
  <div id="review-container">
    <h3 class="review__title">리뷰</h3>
    <div v-for="description in descriptions" :key="description" v-if="description !== ''">
      <div class="conatiner__review__inner">
        <div class="review__thum">
          <div
            class="review__photo"
            :style="`background-image: url('${description.photoUrl}?width=50&height=50')`"
          ></div>
          <p>{{ description.name }}</p>
          <p class="review__star">{{ description.star }}점</p>
        </div>
        <span class="review__desp">{{ description.desp }}</span>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { foodtruckRef } from "../../../config/firebaseInit.js";

export default {
  data() {
    return {
      descriptions: {}
    };
  },
  created() {
    this.$bindAsObject(
      "descriptions",
      foodtruckRef.child(this.$route.params.objectID).child("description")
    );
  }
  // watch: {
  //   descriptions(val) {
  //     console.log(val);
  //   }
  // }
};
</script>

<style>
#review-container {
  margin-left: 60px;
  margin-right: 60px;
}

.conatiner__review__inner:hover {
  background-color: gainsboro;
}

.review__title {
  margin-top: 20px;
  margin-left: 20px;
}

.conatiner__review__inner {
  display: flex;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
}

.review__star {
  font-size: 12px;
  margin-right: 4px;
  text-align: right;
}

.review__thum {
}

.review__photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.review__desp {
  display: inline;
  margin-left: 30px;
  left: 8.5rem;
  white-space: pre-line;
  word-wrap: break-word;
  overflow: auto;
}
</style>
