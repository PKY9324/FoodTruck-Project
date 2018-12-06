<template>
  <div id="review-container">
    <h3 class="review__title">리뷰</h3>
    <div v-for="description in descriptions" :key="description" v-if="description !== ''">
      <div class="conatiner__review__inner">
        <div class="review__thum">
          <div
            class="review__photo"
            :style="`background-image: url('${description.photoUrl}?${dynamicQuery}')`"
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
import _ from "lodash";

export default {
  data() {
    return {
      descriptions: {},
      dynamicQuery: ""
    };
  },
  created() {
    this.$bindAsObject(
      "descriptions",
      foodtruckRef.child(this.$route.params.objectID).child("description")
    );

    const checkUrl = _.values(this.$store.getters.user.photoUrl);
    if (checkUrl[9] === "r") {
      //facebook
      this.dynamicQuery = "width=50&height=50";
    } else if (checkUrl[9] === "h") {
      //google
      this.dynamicQuery = "sz=50";
    }
    // console.log(this.dynamicQuery);
  }
  // watch: {
  //   descriptions(val) {
  //     console.log(val);
  //   }
  // }
};
</script>

<style>
@media screen and (max-width: 360px) {
  #review-container {
    margin-left: 30px;
    margin-right: 30px;
  }

  .conatiner__review__inner:hover {
    background-color: gainsboro;
  }

  .review__title {
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
  }

  .conatiner__review__inner {
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
  }

  .review__star {
    font-size: 12px;
    margin-right: 4px;
    text-align: right;
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
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  #review-container {
    margin-left: 30px;
    margin-right: 30px;
  }

  .conatiner__review__inner:hover {
    background-color: gainsboro;
  }

  .review__title {
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
  }

  .conatiner__review__inner {
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
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
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  #review-container {
    margin-left: 30px;
    margin-right: 30px;
  }

  .conatiner__review__inner:hover {
    background-color: gainsboro;
  }

  .review__title {
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
  }

  .conatiner__review__inner {
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
  }

  .review__star {
    font-size: 12px;
    margin-right: 4px;
    text-align: right;
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
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  #review-container {
    margin-left: 30px;
    margin-right: 30px;
  }

  .conatiner__review__inner:hover {
    background-color: gainsboro;
  }

  .review__title {
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
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
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
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
    text-align: left;
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
}

@media screen and (min-width: 1025px) {
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
    text-align: left;
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
}

/* #review-container {
  margin-left: 60px;
  margin-right: 60px;
}

.conatiner__review__inner:hover {
  background-color: gainsboro;
}

.review__title {
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
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
} */
</style>
