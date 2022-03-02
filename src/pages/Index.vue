<template lang="pug">
q-page.row
  .col-5.bg-green-2(v-show="true")
    controls
  .col-7
    transition(
      mode="out-in"
      name="fade"
    )
      preview(v-if="!showDemo")
      demo(v-else)
</template>

<script lang="ts">
// Vendor
import { defineComponent, ref } from 'vue';

// Components
import Controls from 'components/Controls.vue';
import Demo from 'components/Demo.vue';
import Preview from 'components/Preview.vue';

export default defineComponent({
  name: 'PageIndex',

  components: {
    Controls,
    Demo,
    Preview,
  },

  setup() {
    const showDemo = ref(false);

    return {
      showDemo,
    };
  },
});
</script>
