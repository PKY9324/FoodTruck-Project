<template>
  <div class="container__save__button">
    <button class="save__button">취소</button>
    <button class="cancle__button" @click="save">저장</button>
    {{ star }}
    {{ review }}
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["star", "review", "user"])
  },
  methods: {
    save(e) {
      const payload = {
        star: this.star,
        review: this.review,
        user: this.user
      };
      this.$store.dispatch("SubmitSaveButton", payload);
    }
  }
};
</script>

<style>
.container__save__button {
}

.save__button {
  all: unset;
  min-width: 140px;
  min-height: 50px;
  margin-right: 34px;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  font-size: 16px;
  color: #7f7f7f;
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
}

.cancle__button {
  all: unset;
  position: relative;
  min-width: 140px;
  min-height: 50px;
  border: 1px solid #ff7100;
  border-radius: 50px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  background-color: #ff7100;
  cursor: pointer;
}
</style>
