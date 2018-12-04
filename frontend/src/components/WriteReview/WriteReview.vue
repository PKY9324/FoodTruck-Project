<template>
  <div class="container__textarea">
    <textarea @input="updateMessage" @keyup.enter="updateEnter" minlength="10" wrap="hard"/>
    <!-- {{ review }} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["review"])
  },
  methods: {
    updateMessage(e) {
      this.$store.commit("UPDATE_FORM", e.target.value);
    },
    updateEnter(e) {
      this.$store.commit("UPDATE_FORM", "\n");
    }
  }
  // watch: {
  //   review(val) {
  //     console.log(val);
  //   }
  // }
};
</script>

<style>
textarea {
  all: unset;
  width: 678px;
  display: block;
  height: 150px;
  padding: 12px 15px 30px 15px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 16px;
  color: #000000;
  resize: none;
  overflow-wrap: break-word;
}

.container__textarea {
}
</style>
