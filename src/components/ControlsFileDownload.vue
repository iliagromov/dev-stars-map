<template lang="pug">
.q-gutter-sm.row.items-start
  .q-pa-md
    .row
      .q-pa-xs
        q-btn(
          color="primary"
          label="Cкачать SVG"
          :href="svgBlobUrl"
          download="layout.svg"
          :disable="isSvgDone"
          )
      .q-pa-xs
        q-btn(
          color="primary"
          label="Cкачать JSON"
          :href="configJson"
          download="config.json"
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
