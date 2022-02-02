<template lang="pug">
.relative-position.bg-grey-3.full-width.full-height.flex.items-center.justify-center
  product
</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

// Components
import Product from 'components/Product.vue';

export default defineComponent({
  name: 'Preview',

  components: {
    Product,
  },
});
</script>
