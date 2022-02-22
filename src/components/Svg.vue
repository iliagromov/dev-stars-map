<!--eslint-disable max-len-->
<template lang="html" >
  <!-- <button id="count" @click="count++">{{ count }}</button> -->
   <!-- <SvgTest/> -->
  <div>empty
  </div>
  <!-- <q-icon name="svguse:images/backgrounds/1.svg" /> -->
  <img :src="imageSrc"/>
  <!-- <img svg-inline class="icon" :src="SvgTest"/> -->
  <!-- <InlineSvg src="images/backgrounds/1.svg"/> -->
  <iframe src="images/backgrounds/1.svg"></iframe>
</template>

<script lang="ts">
// import InlineSvg from 'vue-inline-svg';
/* eslint-disable no-console */
import {
  defineComponent,
} from 'vue';

// import CheckIcon from '../assets/inline/1.svg';

// eslint-disable-next-line import/no-webpack-loader-syntax
// import SvgTest from '../assets/backgrounds/1.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import * as SvgTest from '../assets/inline/1.svg';
// Composables
import useSvg from '../composables/useSvg';
import useProduct from '../composables/useProduct';

export default defineComponent({
  name: 'Layout1',
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // SimpleSVG,
    // SvgTest,
    // InlineSvg,
    // CheckIcon,
  },

  methods: {
    handleClick() {
      console.log('It works!');
    },
  },

  setup() {
    const {
      svg,
      sSvg,
    } = useSvg();

    const {
      layoutFieldsText,
    } = useProduct();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const s = SvgTest;
    console.log(s);
    return {
      layoutFieldsText,
      svg,
      sSvg,
    };
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
