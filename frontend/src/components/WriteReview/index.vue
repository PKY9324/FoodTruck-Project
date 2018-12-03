<template>
  <div class="container__write">
    <tool-bar/>
    <Title/>
    <score/>
    <Photo/>
    <write-review/>
    <image-upload/>
    <Save/>
  </div>
</template>

<script>
import ToolBar from "./ToolBar";
import Title from "./Title";
import Photo from "./Photo";
import score from "./score";
import Save from "./Save";
import imageUpload from "./imageUpload";
import WriteReview from "./WriteReview";

export default {
  components: {
    "tool-bar": ToolBar,
    "image-upload": imageUpload,
    "write-review": WriteReview,
    Title,
    Photo,
    score,
    Save
  }
};
</script>

<style scoped>
.container__write {
  margin-top: 60px;
}
</style>
