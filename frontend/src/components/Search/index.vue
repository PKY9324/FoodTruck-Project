<template>
  <div>
    <mini-search-bar/>
    <foodtruck-list/>
    <advertise/>
  </div>
</template>

<script>
import MiniSearchBar from "./MiniSearchBar";
import FoodtruckList from "./FoodtruckList";
import advertise from "./advertise";

export default {
  components: {
    "mini-search-bar": MiniSearchBar,
    "foodtruck-list": FoodtruckList,
    advertise
  }
};
</script>

<style>
html {
  overflow: auto;
}
</style>
