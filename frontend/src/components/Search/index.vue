<template>
  <div>
    <search-tool-bar/>
    <foodtruck-list/>
    <!-- <advertise/> -->
  </div>
</template>

<script>
import FoodtruckList from "./FoodtruckList";
import advertise from "./advertise";
import SearchToolBar from "./SearchToolBar";

export default {
  components: {
    "foodtruck-list": FoodtruckList,
    "search-tool-bar": SearchToolBar,
    advertise
  }
};
</script>

<style>
html {
  overflow: auto;
}
</style>
