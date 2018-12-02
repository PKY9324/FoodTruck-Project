<template>
  <div>
    <toolbar :value="true" :height="50" :color="'#3498DB'">
      <span class="title">FoodTrucks</span>
    </toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  left: 49%;
  transform: translateX(-50%);
  color: white;
}
</style>
