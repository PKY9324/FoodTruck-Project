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
@media screen and (max-width: 375px) {
  .wrap {
    display: inline-block;
    width: 340px;
    text-align: left;
  }

  .name {
    font-size: 26px;
    font-weight: 600;
    color: #3498db;
  }

  .sub {
    font-size: 20px;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .wrap {
    display: inline-block;
    width: 350px;
    padding: 20px;
    text-align: left;
  }

  .name {
    font-size: 26px;
    font-weight: 600;
    color: #3498db;
  }

  .sub {
    font-size: 20px;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .wrap {
    display: inline-block;
    width: 350px;
    padding: 20px;
    text-align: left;
  }

  .name {
    font-size: 26px;
    font-weight: 600;
    color: #3498db;
  }

  .sub {
    font-size: 20px;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .wrap {
    display: inline-block;
    width: 350px;
    padding: 20px;
    text-align: left;
  }

  .name {
    font-size: 26px;
    font-weight: 600;
    color: #3498db;
  }

  .sub {
    font-size: 20px;
  }
}
@media screen and (min-width: 1025px) {
  .wrap {
    display: inline-block;
    width: 350px;
    padding: 20px;
    text-align: left;
  }

  .name {
    font-size: 26px;
    font-weight: 600;
    color: #3498db;
  }

  .sub {
    font-size: 20px;
  }
}
</style>
