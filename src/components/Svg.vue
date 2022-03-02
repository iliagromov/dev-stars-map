<!--eslint-disable max-len-->
<template lang="pug" >
.svg-tempalte(v-html="modelSvgIframe")
</template>

<script lang="ts">
import useSvg from 'src/composables/useSvg';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Svg',
  setup() {
    return {
      ...useSvg(),
    };
  },

});

</script>
<style scoped>
.svg-tempalte{
  width: 100%;
  height: 100%;
}
</style>
