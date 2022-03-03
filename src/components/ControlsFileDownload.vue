<template lang="pug">
.row.q-mb-lg
  q-btn(
    color="primary"
    label="Cкачать SVG"
    :href="svgBlobUrl"
    download="layout.svg"
    :disable="isSvgDone"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useControlsFileDownload from 'src/composables/useControlsFileDownload';

export default defineComponent({
  name: 'ControlsFileDowload',
  setup() {
    return {
      ...useControlsFileDownload(),
    };
  },

});

</script>

<style>
.controls-file-upload__item{
  max-width: 100%;
}
</style>
