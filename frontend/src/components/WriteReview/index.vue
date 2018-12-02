<template>
  <div class="container__write">
    <tool-bar/>
    <div>
      <Title/>
      <div>
        <div>1점</div>
        <div>2점</div>
        <div>3점</div>
        <div>4점</div>
        <div>5점</div>

        <div>취소</div>
        <div>저장</div>
      </div>
      <Photo/>
    </div>
  </div>
</template>

<script>
import ToolBar from "./ToolBar";
import Title from "./Title";
import Photo from "./Photo";

export default {
  components: {
    "tool-bar": ToolBar,
    Title,
    Photo
  }
};
</script>

<style scoped>
.container__write {
  margin-top: 60px;
}
</style>
