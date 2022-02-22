<template lang="pug">
q-card.controls-background
  q-card-section
    .q-col-gutter-md.row.items-start
      .col-4(v-for="background in backgrounds")
        .bg-transparent-pattern.bg-transparent-pattern_small
          q-img.controls-background__item.cursor-pointer(
            :src="background.path"
            :class="{'_active': background.active}"
            @click="selectBackground(background)"
          )
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Composables
import useControlsBackground from 'src/composables/useControlsBackground';

export default defineComponent({
  name: 'ControlsBackground',

  setup() {
    const {
      backgrounds,
      selectBackground,
    } = useControlsBackground();

    return {
      backgrounds,
      selectBackground,
    };
  },
});
</script>

<style lang="scss" scoped>
.controls-background {
  &__item {
    outline: 1px solid $grey-4;
    outline-offset: 3px;
    max-width: 234px;
    max-height: 330px;

    &._active {
      outline-color: $grey-9;
      outline-offset: 2px;
    }
  }
}
</style>
