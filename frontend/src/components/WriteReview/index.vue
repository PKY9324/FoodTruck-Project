<template>
  <div class="container__write__main">
    <tool-bar/>
    <div class="container__write__sub">
      <div class="container__write__top">
        <Title/>
      </div>
      <score/>
      <div class="container__write__middle">
        <Photo/>
        <write-review/>
      </div>
      <div class="container__write__image__upload">
        <image-upload/>
      </div>
      <div class="container__write__bottom">
        <Save/>
      </div>
    </div>
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

<style>
.container__write__main {
  margin: 0 auto;
}

.container__write__sub {
}

.container__write__top {
  padding: 20px;
  margin-left: 20px;
  margin-top: 80px;
  text-align: center;
}

.container__write__middle {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.container__write__image__upload {
  text-align: center;
}

.container__write__bottom {
  text-align: center;
}
</style>
