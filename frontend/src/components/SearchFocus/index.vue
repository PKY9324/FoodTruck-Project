<template>
  <div>
    <div>
      <search-tool-bar/>
    </div>
    <truck-carousel/>

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

import Review from "./Review";

export default {
  components: {
    "search-tool-bar": SearchToolBar,
    "truck-carousel": TruckCarousel,
    "content-focus": ContentFocus,

    review: Review
  }
};
</script>
