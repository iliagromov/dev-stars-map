<template lang="pug">
q-card
  q-card-section
    .row.q-col-gutter-md.q-mb-lg
      .col-12
        .text-overline.text-uppercase.text-blue-grey-5 Text
      .col-4
        q-input(
          v-model.text="modelTextEditor"
          debounce="500"
          label="Текст"
        )
      .col-4
        q-select(
          v-model="modelTextEditorStyleFontFamily"
          :options="optionsModelTextEditorStyleFontFamily"
          label="Шрифт"
        )
      .col-4
        q-input(
          v-model.number="modelLayoutFieldTextStyleSize"
          type="number"
          label="Размер"
        )
      .col-4
        q-input(
          v-model="modelLayoutFieldTextStyleColor"
          debounce="500"
          label="Цвет"
        )
          template(v-slot:append)
            q-icon(
              name="colorize"
              class="cursor-pointer"
            )
              q-popup-proxy(
                transition-show="scale"
                transition-hide="scale"
                cover
              )
                q-color(v-model="modelLayoutFieldTextStyleColor")

      .col-4
        q-input(
          v-model.number="modelLayoutFieldTextStyleTransformX"
          type="number"
          debounce="500"
          label="Сдвиг текста по оси X"
        )

      .col-4
        q-input(
          v-model.number="modelLayoutFieldTextStyleTransformY"
          type="number"
          debounce="500"
          label="Сдвиг текста по оси Y"
        )
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Composables
import useControlsFields from 'src/composables/useControlsFields';

export default defineComponent({
  name: 'ControlsText',

  setup() {
    return {
      ...useControlsFields(),
    };
  },
});
</script>
