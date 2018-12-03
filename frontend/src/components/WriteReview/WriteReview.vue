<template>
  <div class="container__textarea">
    <textarea @input="updateMessage"/>
    {{ review }}
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
    }
  }
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
}

.container__textarea {
}
</style>
