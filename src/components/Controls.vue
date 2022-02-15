<template lang="pug">
.controls
  q-list(bordered)
    q-expansion-item(
      group="controls"
      icon="image"
      label="Фоновой слой"
      default-opened
    )
      //-controls-background

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
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Components
import ControlsBackground from 'components/ControlsBackground.vue';
import ControlsStars from 'components/ControlsStars.vue';
import ControlsText from 'components/ControlsText.vue';

export default defineComponent({
  name: 'Controls',

  components: {
    ControlsBackground,
    ControlsStars,
    ControlsText,
  },
});
</script>

<style lang="scss" scoped>
.controls {
  height: 100%;
  overflow-y: auto;
}
</style>
