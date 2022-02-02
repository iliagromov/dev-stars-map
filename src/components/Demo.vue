<template lang="pug">
.demo.bg-green-3.full-width.full-height.flex.items-center.justify-center
  iframe(
    src="/iframe/index.html"
    width="979"
    height="774"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
  )
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Demo',
});
</script>
