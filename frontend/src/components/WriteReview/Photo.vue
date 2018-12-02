<template>
  <div class="container__photo">
    <div
      class="mage__write__photo"
      :style="`background-image: url('${user.photoUrl}?width=100&height=100')`"
    ></div>
    <div>{{ user.name }}</div>
    <textarea/>
    <div>imageUpload</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"])
  }
};
</script>

<style>
.image__write__photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.container__photo {
  display: inline-block;
}

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
</style>
