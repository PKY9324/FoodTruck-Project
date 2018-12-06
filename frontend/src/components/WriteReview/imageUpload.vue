<template>
  <div>
    <label for="files" class="image__upload" v-if="!uploadEnd && !uploading">+</label>
    <input
      id="files"
      type="file"
      name="file"
      ref="uploadInput"
      accept="image/*"
      :multiple="false"
      @change="detectFiles($event)"
    >
    <img class="image__uploaded" @click="deleteImage" v-if="uploadEnd" :src="downloadURL">
  </div>
</template>

<script>
import { firestorage } from "../../../config/firebaseInit.js";

export default {
  data() {
    return {
      progressUpload: 0,
      fileName: "",
      uploadTask: "",
      uploading: false,
      uploadEnd: false,
      downloadURL: ""
    };
  },
  methods: {
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x]);
      });
    },
    upload(file) {
      this.fileName = file.name;
      this.uploading = true;
      this.uploadTask = firestorage.ref("images/" + file.name).put(file);
    },
    deleteImage() {
      firestorage
        .ref("images/" + this.fileName)
        .delete()
        .then(() => {
          this.uploading = false;
          this.uploadEnd = false;
          this.downloadURL = "";
        })
        .catch(error => {
          console.error(`file delete error occured: ${error}`);
        });
    }
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on(
        "state_changed",
        sp => {
          this.progressUpload = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.uploadEnd = true;
            this.downloadURL = downloadURL;
            this.$emit("downloadURL", downloadURL);
          });
        }
      );
    }
  }
};
</script>

<style>
.image__upload {
  all: unset;
  padding: 15px 30px;
  margin-right: 430px;
  line-height: 89px;
  text-align: center;
  font-size: 50px;
  color: gray;
  border: 1px dashed #dbdbdb;
  cursor: pointer;
}

.image__uploaded {
  all: unset;
  width: 89px;
  height: 89px;
  margin-right: 430px;
  line-height: 89px;
  text-align: center;
  color: gray;
  z-index: -1;
  cursor: pointer;
}

#files {
  display: none;
}
</style>
