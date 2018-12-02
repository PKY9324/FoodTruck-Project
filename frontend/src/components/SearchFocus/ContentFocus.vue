<template>
  <div>
    <div id="content-focus">
      <h1>{{ listObject[this.$route.params.objectID].name }}</h1>
      <hr>
      <div v-if="listObject[this.$route.params.objectID].old_address !== 0">
        <h3>지번 주소</h3>
        <h3>{{ listObject[this.$route.params.objectID].old_address }}</h3>
      </div>
      <div v-if="listObject[this.$route.params.objectID].new_address !== 0">
        <h3>도로명 주소</h3>
        <h3>{{ listObject[this.$route.params.objectID].new_address }}</h3>
      </div>
      <div v-if="listObject[this.$route.params.objectID].phone">
        <h3>전화번호</h3>
        <h3>{{ listObject[this.$route.params.objectID].phone }}</h3>
      </div>

      <hr>
    </div>
  </div>
</template>

<script>
import { foodtruckRef } from "../../../config/firebaseInit.js";

export default {
  data() {
    return {
      listObject: {}
    };
  },
  created() {
    this.$bindAsObject(
      "listObject",
      foodtruckRef.orderByChild("name").equalTo(this.$route.params.name)
    );
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
