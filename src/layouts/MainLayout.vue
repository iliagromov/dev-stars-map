<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-header(elevated)
    q-toolbar
      q-toolbar-title PichShop StarMap
      div Quasar v{{ $q.version }}

  q-page-container
    router-view
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
