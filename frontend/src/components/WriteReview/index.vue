<template>
  <div>
    <tool-bar/>
    <div class="container__write__sub">
      <div class="container__write__top">
        <Title/>
        <score/>
      </div>
      <div class="container__write__middle">
        <Photo/>
        <write-review/>
      </div>
      <div class="container__write__bottom">
        <image-upload/>
      </div>
      <Save/>
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

<style scoped>
* {
  all: unset;
}

.container__write__sub {
}

.container__write__top {
}

.container__write__middle {
}
</style>
