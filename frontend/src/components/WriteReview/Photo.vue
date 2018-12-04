<template>
  <div class="container__photo">
    <div
      class="image__write__photo"
      :style="`background-image: url('${user.photoUrl}?width=100&height=100')`"
    ></div>
    <div class="photo__user__name">{{ user.name }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      localUserData: ""
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  watch: {
    userGetter(promise) {
      promise.then(result => (this.localUserData = result));
    }
  }
};
</script>

<style>
.container__photo {
  display: inline-block;
  vertical-align: top;
  padding: 10px;
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
