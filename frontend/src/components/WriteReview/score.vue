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
@media screen and (max-width: 360px) {
  .container__score {
    text-align: left;
    width: 400px;
  }

  .click__score__not_clicked {
    all: unset;
    background-size: cover;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .click__score__clicked {
    box-shadow: 0 0 0 2px #3498db inset;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  .container__score {
    text-align: left;
    width: 400px;
    padding: 10px;
  }

  .click__score__not_clicked {
    all: unset;
    background-size: cover;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .click__score__clicked {
    box-shadow: 0 0 0 2px #3498db inset;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .container__score {
    text-align: left;
    width: 350px;
    padding: 10px;
    margin-left: 20px;
  }

  .click__score__not_clicked {
    all: unset;
    background-size: cover;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .click__score__clicked {
    box-shadow: 0 0 0 2px #3498db inset;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .container__score {
    text-align: left;
    width: 350px;
    padding: 10px;
    margin-left: 370px;
  }

  .click__score__not_clicked {
    all: unset;
    background-size: cover;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .click__score__clicked {
    box-shadow: 0 0 0 2px #3498db inset;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .container__score {
    text-align: right;
    width: 350px;
    padding: 10px;
    margin-left: 550px;
  }

  .click__score__not_clicked {
    all: unset;
    background-size: cover;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .click__score__clicked {
    box-shadow: 0 0 0 2px #3498db inset;
  }
}

@media screen and (min-width: 1025px) {
  .container__score {
    text-align: right;
    width: 350px;
    padding: 10px;
    margin-left: 950px;
  }

  .click__score__not_clicked {
    all: unset;
    background-size: cover;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }

  .click__score__clicked {
    box-shadow: 0 0 0 2px #3498db inset;
  }
}
/* .container__score {
  text-align: left;
  width: 400px;
  margin-left: 300px;
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
} */
</style>
