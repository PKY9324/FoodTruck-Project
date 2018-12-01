<template>
  <div>
    <div>
      <search-tool-bar/>
    </div>
    <truck-carousel/>
    <write-review-button/>
    <div>
      <content-focus/>
    </div>
    <div>
      <review/>
    </div>
  </div>
</template>

<script>
import SearchToolBar from "../Search/SearchToolBar";
import TruckCarousel from "./TruckCarousel";
import ContentFocus from "./ContentFocus";
import WriteReviewButton from "./WriteReviewButton";
import Review from "./Review";

export default {
  components: {
    "search-tool-bar": SearchToolBar,
    "truck-carousel": TruckCarousel,
    "content-focus": ContentFocus,
    "write-review-button": WriteReviewButton,
    review: Review
  }
};
</script>
