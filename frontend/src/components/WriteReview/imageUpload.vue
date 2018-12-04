<template>
  <button type="file" @change="onFileSelected" class="image__upload">+</button>
</template>

<script>
export default {
  methods: {
    onFileSelected(event) {
      console.log(event);
    }
  }
};
</script>

<style>
.image__upload {
  all: unset;
  width: 89px;
  height: 89px;
  margin-right: 440px;
  margin-bottom: 30px;
  line-height: 89px;
  text-align: center;
  font-size: 50px;
  color: gray;
  border: 1px dashed #dbdbdb;
  cursor: pointer;
}
</style>
