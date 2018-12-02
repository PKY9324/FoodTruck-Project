<template>
  <div>
    <div class="name">{{ this.$route.params.name }}</div>
    <div class="sub">에 대한 솔직한 리뷰를 써주세요.</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.name {
  font-size: 26px;
  font-weight: 600;
  color: #3498db;
}

.sub {
  font-size: 20px;
}
</style>
