<template lang="pug">
.row.q-mb-lg
  q-btn(
    color="primary"
    label="Добавить поле"
    @click="onAddLayoutField"
    )
  q-btn(
    color="red"
    label="Убрать поле"
    @click="onRemoveLayoutField"
    )
div(v-for="(field, index) in layoutFieldsText"
    :key="field.id"
    @delete="layoutFieldsText.splice(index, 1)"
    )
  q-card
    q-card-section
      .row.q-col-gutter-md.q-mb-lg
        .col-12
          .text-overline.text-uppercase.text-blue-grey-5 {{ field.innerText }}
        .col-3
          q-input(
            debounce="500"
            :model-value="field.innerText"
            label="Текст макета"
            @change="changeFieldText($event, field.id)"
          )
        .col-3
          q-select(
            :model-value="field.styles.font"
            @update:model-value="changeFieldFont($event, index)"
            :options="optionsModelTextEditorStyleFontFamily"
            label="Шрифт")
        .col-3
          q-input(
            type="number"
            label="Размер"
            :model-value="field.styles.size"
            @change="changeFieldSize($event, index)"
          )
        .col-3
          q-input(
            debounce="500"
            label="Цвет"
            :model-value="field.styles.color"
            @change="changeFieldColor($event, index)"
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
                  q-color(@change="changeFieldColor($event, index)")

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
