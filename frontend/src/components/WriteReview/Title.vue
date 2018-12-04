<template>
  <div class="wrap">
    <div class="name">{{ this.$route.params.name }}</div>
    <div class="sub">에 대한 솔직한 리뷰를 써주세요.</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrap {
  display: inline-block;
  padding: 20px;
  margin-right: 400px;
}

.name {
  font-size: 26px;
  font-weight: 600;
  color: #3498db;
}

.sub {
  font-size: 20px;
  text-align: left;
}
</style>
