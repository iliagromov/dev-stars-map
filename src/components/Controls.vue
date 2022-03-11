<template lang="pug">
.controls
  q-list(bordered)
    q-expansion-item(
      group="controls"
      icon="cloud_upload"
      label="Загрузить Фоновый слой"
    )
      controls-file-upload

    q-separator
    q-expansion-item(
      group="controls"
      icon="image"
      label="Фоновый слой"
    )
      controls-background

    q-separator
    q-expansion-item(
      group="controls"
      icon="mdi-text"
      label="Текст"
    )
      controls-text

    q-separator
    q-expansion-item(
      group="controls"
      icon="mdi-star"
      label="Карта звездного неба"
    )
      controls-stars

    q-separator
    q-expansion-item(
      group="controls"
      icon="file_download"
      label="Скачать результат"
    )
      controls-file-download
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Components
import ControlsBackground from 'components/ControlsBackground.vue';
import ControlsStars from 'components/ControlsStars.vue';
import ControlsText from 'components/ControlsText.vue';
import ControlsFileUpload from 'src/components/ControlsFileUpload.vue';
import ControlsFileDownload from 'src/components/ControlsFileDownload.vue';

export default defineComponent({
  name: 'Controls',

  components: {
    ControlsBackground,
    ControlsStars,
    ControlsText,
    ControlsFileUpload,
    ControlsFileDownload,
  },
});
</script>

<style lang="scss" scoped>
.controls {
  height: 100%;
  overflow-y: auto;
}
</style>
