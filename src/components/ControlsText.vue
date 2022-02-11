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
div(v-for="field in layoutFields")
  controls-fields

</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Composables
import useControlsText from 'src/composables/useControlsText';

// Components
import ControlsFields from 'components/ControlsFields.vue';

export default defineComponent({
  name: 'ControlsText',

  components: {
    ControlsFields,
  },

  setup() {
    return {
      ...useControlsText(),
    };
  },
});
</script>
