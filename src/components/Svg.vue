<!--eslint-disable max-len-->
<template lang="html" >
  <iframe :src="srcBg"></iframe>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Svg',
  props: {
    srcBg: String,
  },

});

</script>
<style scoped>
    @font-face {
      font-family:"Century Gothic";
      font-variant:normal;
      font-style:normal;
      font-weight:normal;
      src:url("#FontID1") format(svg)
      }
    @font-face {
      font-family:"AdventureC";
      font-variant:normal;
      font-weight:normal;
      src:url("#FontID0") format(svg)
    }
    #vueSvg{
      width: 100%;
      height: 100%;
    }
    .fil0 {fill:#FEFEFE}
    .fil4 {fill:#727271}
    .fil3 {fill:#434242}
    .fil1 {fill:#E6CEC8}
    .fil2 {fill:#898989;fill-rule:nonzero}
    .fnt2 {font-weight:normal;font-size:635px;font-family:'Century Gothic'}
    .fnt1 {font-weight:normal;font-size:987.78px;font-family:'Century Gothic'}
    .fnt0 {font-weight:normal;}
</style>
