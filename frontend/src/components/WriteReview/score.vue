<template>
  <div class="container__score">
    <span>
      <img
        src="../../assets/one.png"
        class="click__score__not_clicked"
        @click="clickScoreOne"
        :class="{ click__score__clicked: isActiveOne }"
      >
    </span>
    
    <img
      src="../../assets/two.png"
      class="click__score__not_clicked"
      @click="clickScoreTwo"
      :class="{ click__score__clicked: isActiveTwo }"
    >
    <img
      src="../../assets/three.png"
      class="click__score__not_clicked"
      @click="clickScoreThree"
      :class="{ click__score__clicked: isActiveThree }"
    >
    <img
      src="../../assets/four.png"
      class="click__score__not_clicked"
      @click="clickScoreFour"
      :class="{ click__score__clicked: isActiveFour }"
    >
    <img
      src="../../assets/five.png"
      class="click__score__not_clicked"
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
  text-align: center;
  margin-left: 430px;
  padding: 20px;
}

.click__score__not_clicked {
  all: unset;
  background-size: cover;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.click__score__clicked {
  box-shadow: 0 0 0 2px #3498db inset;
}
</style>
