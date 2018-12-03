<template>
  <div class="container__score">
    <img
      class="click__score__one"
      @click="clickScoreOne"
      :class="{ click__score__clicked: isActiveOne }"
    >
    <img
      class="click__score__two"
      @click="clickScoreTwo"
      :class="{ click__score__clicked: isActiveTwo }"
    >
    <img
      class="click__score__three"
      @click="clickScoreThree"
      :class="{ click__score__clicked: isActiveThree }"
    >
    <img
      class="click__score__four"
      @click="clickScoreFour"
      :class="{ click__score__clicked: isActiveFour }"
    >
    <img
      class="click__score__five"
      @click="clickScoreFive"
      :class="{ click__score__clicked: isActiveFive }"
    >
    <!-- {{ star }} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isActiveOne: false,
      isActiveTwo: false,
      isActiveThree: false,
      isActiveFour: false,
      isActiveFive: false
    };
  },
  methods: {
    clickScoreOne() {
      this.isActiveOne = true;
      this.isActiveTwo = false;
      this.isActiveThree = false;
      this.isActiveFour = false;
      this.isActiveFive = false;
      this.$store.commit("UPDATE_STAR", 1);
    },
    clickScoreTwo() {
      this.isActiveOne = false;
      this.isActiveTwo = true;
      this.isActiveThree = false;
      this.isActiveFour = false;
      this.isActiveFive = false;
      this.$store.commit("UPDATE_STAR", 2);
    },
    clickScoreThree() {
      this.isActiveOne = false;
      this.isActiveTwo = false;
      this.isActiveThree = true;
      this.isActiveFour = false;
      this.isActiveFive = false;
      this.$store.commit("UPDATE_STAR", 3);
    },
    clickScoreFour() {
      this.isActiveOne = false;
      this.isActiveTwo = false;
      this.isActiveThree = false;
      this.isActiveFour = true;
      this.isActiveFive = false;
      this.$store.commit("UPDATE_STAR", 4);
    },
    clickScoreFive() {
      this.isActiveOne = false;
      this.isActiveTwo = false;
      this.isActiveThree = false;
      this.isActiveFour = false;
      this.isActiveFive = true;
      this.$store.commit("UPDATE_STAR", 5);
    }
  }
};
</script>

<style>
.container__score {
}

.click__score__one {
  all: unset;
  background-image: url("../../assets/one.png");
  background-size: cover;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.click__score__two {
  all: unset;
  background-image: url("../../assets/two.png");
  background-size: cover;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.click__score__three {
  all: unset;
  background-image: url("../../assets/three.png");
  background-size: cover;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.click__score__four {
  all: unset;
  background-image: url("../../assets/four.png");
  background-size: cover;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.click__score__five {
  all: unset;
  background-image: url("../../assets/five.png");
  background-size: cover;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.click__score__clicked {
  border: 2px solid #3498db;
}
</style>
