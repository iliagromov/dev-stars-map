<template lang="pug">
.q-pa-md
  .q-gutter-sm.row.items-start
    .col-12
      file-upload(
        v-model="files"
        ref="upload"
        post-action="/post.method"
        put-action="/put.method"
        @input-file="inputFile"
        @input-filter="inputFilter"
      )
        q-btn(color="primary" label="Загрузить файл")
    .col-4(v-for="file in files" :key="file.id")
      img.controls-file-upload__item(v-if="file.thumb"
        :src="file.thumb")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileUpload from 'vue-upload-component';
import useControlsFileUpload from 'src/composables/useControlsFileUpload';

export default defineComponent({
  name: 'ControlsFileUpload',
  components: {
    FileUpload,
  },
  setup() {
    return {
      ...useControlsFileUpload(),
    };
  },

});

</script>

<style>
.controls-file-upload__item{
  max-width: 100%;
}
</style>
