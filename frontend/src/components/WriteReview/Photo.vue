<template>
  <div class="container__photo">
    <div
      class="image__write__photo"
      :style="`background-image: url('${user.photoUrl}?${dynamicQuery}')`"
    ></div>
    <div class="photo__user__name">{{ user.name }}</div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      flag: null,
      dynamicQuery: ""
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    const checkUrl = _.values(this.$store.getters.user.photoUrl);
    if (checkUrl[9] === "r") {
      //facebook
      this.dynamicQuery = "width=100&height=100";
    } else if (checkUrl[9] === "h") {
      //google
      this.dynamicQuery = "sz=100";
    }
    // console.log(this.dynamicQuery);
  }
};
</script>

<style>
.container__photo {
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  margin-right: 20px;
}

.image__write__photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.photo__user__name {
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
}
</style>
