<template lang="pug">
q-card
  q-card-section
    .row.q-col-gutter-md.q-mb-lg
      .col-12
        .text-overline.text-uppercase.text-blue-grey-5 Карта

      .col-4
        q-select(
          v-model="modelCelestialProjection"
          :options="optionsCelestialProjection"
          label="Проекция"
        )

      .col-4
        q-select(
          v-model="modelCelestialTransform"
          :options="optionsCelestialTransform"
          label="Трансформация координат"
        )

      .col-4
        q-input(
          v-model.number="modelCelestialWidth"
          debounce="500"
          label="Размер"
        )

      .col-4
        q-input(
          v-model.number="modelShiftX"
          debounce="500"
          label="Сдвиг слоя по оси X"
          type="number"
        )

      .col-4
        q-input(
          v-model.number="modelShiftY"
          debounce="500"
          label="Сдвиг слоя по оси Y"
          type="number"
        )

      .col-4
        q-input(
          v-model.number="modelCelestialZoomlevel"
          debounce="500"
          label="Масштаб"
        )

      .col-12
        .q-pt-md.flex.items-center
          .text-overline.text-uppercase.text-blue-grey-5 Звезды
          q-checkbox(v-model="modelCelestialStarsShow")
      template(v-if="modelCelestialStarsShow")
        .col-3
          q-input(
            v-model.number="modelCelestialStarsLimit"
            debounce="500"
            label="Лимит"
          )

        .col-3
          q-input(
            v-model.number="modelCelestialStarsSize"
            debounce="500"
            label="Размер"
          )

        .col-3
          q-input(
            v-model.number="modelCelestialStarsStyleOpacity"
            debounce="500"
            label="Прозрачность"
          )

        .col-3

        .col-3
          q-input(
            v-model="modelCelestialStarsStyleFill"
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
                  q-color(v-model="modelCelestialStarsStyleFill")

        .col-9.self-center
          q-checkbox(
            v-model="modelCelestialStarsColors"
            label="Использовать спектральный цвет"
          )

        .col-12
          .q-pt-md.flex.items-center
            .text-overline.text-uppercase.text-blue-grey-5 Названия звезд
            q-checkbox(v-model="modelCelestialStarsDesignation")
        template(v-if="modelCelestialStarsDesignation")
          .col-3
            q-input(
              v-model.number="modelCelestialStarsDesignationLimit"
              debounce="500"
              label="Лимит"
            )

          .col-3
            q-select(
              v-model="modelCelestialStarsDesignationType"
              :options="optionsCelestialStarsDesignationType"
              label="Тип отображаемых названий"
            )

          .col-6
            q-select(
              v-model="modelCelestialStarsDesignationStyleFontFamily"
              :options="optionsCelestialStarsDesignationStyleFontFamily"
              label="Шрифт"
            )

          .col-3
            q-input(
              v-model="modelCelestialStarsDesignationStyleFill"
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
                    q-color(v-model="modelCelestialStarsDesignationStyleFill")

          .col-3
            q-input(
              v-model.number="modelCelestialStarsDesignationStyleFontSize"
              debounce="500"
              label="Размер"
            )

          .col-6
            q-select(
              v-model="modelCelestialStarsDesignationStylePosition"
              label="Выравнивание"
              emit-value map-options
              :options="optionsCelestialStarsDesignationStylePosition"
            )
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Composables
import useControlsStars from 'src/composables/useControlsStars';

export default defineComponent({
  name: 'ControlsStars',

  setup() {
    return {
      ...useControlsStars(),
    };
  },
});
</script>
