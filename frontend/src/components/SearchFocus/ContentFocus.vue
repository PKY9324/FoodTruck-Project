<template>
  <div>
    <div id="content-focus" v-for="list of lists" :key="list['.key']">
      <h1>{{ list.name }} 별점</h1>
      <hr>
      <h3>{{ list.old_address }}</h3>
      <h3>{{ list.new_address }}</h3>
      <h3>{{ list.phone }}</h3>
      <hr>
      <!-- <h3>{{ this.$route.params.name }}</h3> -->
      <hr>
    </div>
  </div>
</template>

<script>
import { foodtruckRef } from "../../../config/firebaseInit.js";

export default {
  firebase: {
    lists: foodtruckRef.orderByChild("name").equalTo("삼천포사나이")
  },
  data() {
    return {
      lists: []
    };
  }
};
</script>

<style>
#content-focus {
  margin-top: 40px;
  margin-left: 60px;
  margin-right: 60px;
}
</style>
