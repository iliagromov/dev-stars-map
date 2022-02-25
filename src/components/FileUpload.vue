<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm row items-start">
      <div >
        <ul>
          <li v-for="file in files" :key="file.id">
            {{file.name}} - Error: {{file.error}},
            Success: {{file.success}}</li>
        </ul>
        <file-upload
          v-model="files"
          ref="upload"
          post-action="/post.method"
          put-action="/put.method"
          @input-file="inputFile"
          @input-filter="inputFilter"
        >
        Upload file
        </file-upload>
        <button type="button"
        class="btn btn-success"
        v-if="!upload || !upload.active"
        @click.prevent="upload.active = true">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          Start Upload
        </button>
        <button type="button"
        class="btn btn-danger"
        v-else @click.prevent="upload.active = false">
          <i class="fa fa-stop" aria-hidden="true"></i>
          Stop Upload
        </button>
      </div>
      <div class="image-preview" v-for="file in files" :key="file.id">
        <img v-if="file.thumb"  :src="file.thumb" >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileUpload from 'vue-upload-component';
import useFileUpload from 'src/composables/useFileUpload';

export default defineComponent({
  name: 'FileUploadC',
  components: {
    'file-upload': FileUpload,
  },
  setup() {
    const {
      files,
      upload,
      imageData,
      inputFile,
      inputFilter,
    } = useFileUpload();

    return {
      files,
      upload,
      imageData,
      inputFile,
      inputFilter,
    };
  },

});

</script>

<style>
.example-drag label.btn {
  margin-bottom: 0;
  margin-right: 1rem;
}

.example-drag .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: .6;
  text-align: center;
  background: #000;
}

.example-drag .drop-active h3 {
  margin: -.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
.image-preview img{
  width: 100%;
  height: 100%;
  max-width: 234px;
  max-height: 330px;

}
</style>
