<template>
  <div>
    <tool-bar/>
    <div>
      <div>
        {{ this.$route.params.name }}
        <br>에 대한 솔직한 리뷰를 써주세요.
      </div>
      <div>1점</div>
      <div>2점</div>
      <div>3점</div>
      <div>4점</div>
      <div>5점</div>
      <div>photoUrl</div>
      <div>textarea</div>
      <div>imageUpload</div>
      <div>취소</div>
      <div>저장</div>
    </div>
  </div>
</template>

<script>
import ToolBar from "./ToolBar";

export default {
  components: {
    "tool-bar": ToolBar
  }
};
</script>

<style>
</style>
