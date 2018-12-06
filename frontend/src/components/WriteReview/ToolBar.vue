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
@media screen and (max-width: 375px) {
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-left: 130px;
    color: white !important;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-left: 150px;
    color: white !important;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-left: 320px;
    color: white !important;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-left: 410px;
    color: white !important;
  }
}
@media screen and (min-width: 1025px) {
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-left: 900px;
    color: white !important;
  }
}
</style>
