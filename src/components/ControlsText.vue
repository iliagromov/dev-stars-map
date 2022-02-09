<template lang="pug">
q-card
  q-card-section
    .row.q-col-gutter-md.q-mb-lg
      .col-12
        .text-overline.text-uppercase.text-blue-grey-5 Text
    q-editor(
      v-model="modelTextEditor"
    )
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Composables
import useControlsText from 'src/composables/useControlsText';

export default defineComponent({
  name: 'ControlsText',

  setup() {
    return {
      ...useControlsText(),
    };
  },
});
</script>
