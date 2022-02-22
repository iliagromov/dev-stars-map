<template lang="pug">
.starmap-product
  #celestial-map.starmap-product__stars(
    :style="starsStyleObject"
  )
  .starmap-product__bg
    //- iframe(:src="bgSrc")
    iframe(id="vueSvg" class="starmap-product__bg-iframe" src="images/backgrounds/layout_1.svg")
  template(v-for="(field, index) in layoutFieldsText")
    .starmap-product__layout-field-text(
      v-html="field.innerText"
      :style.color="fontColors[index]"
      :style.size="fontSizes[index]"
      )
</template>

<script lang="ts">
/* eslint-disable no-console */
// Vendor
import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
} from 'vue';
// Composables
import useProduct from 'src/composables/useProduct';
// Components
// import Svg1 from './Svg.vue';

export default defineComponent({
  name: 'Product',
  components: {
  },
  setup() {
    const {
      layoutFieldsText,
      layoutFieldTextSize,
      layoutFieldTextColor,
      backgroundPath,
      starsShiftX,
      starsShiftY,
      initProduct,
    } = useProduct();

    const fontSizes = computed(() => layoutFieldTextSize.value.map((size) => ({ 'font-size': `${size.styles.size}em` })));

    const fontColors = computed(() => layoutFieldTextColor.value.map((c) => (
      `color: ${c.styles.color}`)));

    const bgStyleObject = computed(() => ({
      backgroundImage: backgroundPath.value ? `url(${backgroundPath.value})` : '',
    }));

    const bgSrc = computed(() => (backgroundPath.value ? backgroundPath.value : ''));

    const svgPath = computed(() => backgroundPath.value);

    const starsStyleObject = computed(() => {
      const translateX = `calc(-50% + ${starsShiftX.value}px)`;
      /** Для первого макета Y75% */
      const translateY = `calc(-75% + ${starsShiftY.value}px)`;

      return {
        transform: `translate3d(${translateX}, ${translateY}, 0)`,
      };
    });

    onMounted(async () => {
      await initProduct();

      // const svg = document.querySelector('iframe').contentDocument.querySelector('svg');
      // svg.style.width = '100%';
      // svg.style.height = '100%';
    });

    // const layoutTexts = computed(() => layoutFieldsText.value.map((i) => i.innerText));

    onUpdated(() => {
      // FIXME: хардкожу svg в iframe потому что vue-svg-loader выдает ошибку см. issues: https://github.com/visualfanatic/vue-svg-loader/issues/177
      // const iframeWindow = document.querySelector("#vueSvg-iframe").contentWindow;
      // const config = {
      //   text: this.text
      // };
      // iframeWindow.setConfig(config);
      // this.html = iframeWindow.getHtml(`window.baseConfig = ${JSON.stringify(config)};`);

      // eslint-ignore
      const svgIframe = document.querySelector('iframe');
      const texts = svgIframe.contentDocument.querySelectorAll('text');
      texts.forEach((item, index:number) => {
        item.innerHTML = layoutFieldsText.value[index] ? layoutFieldsText.value[index].innerText : '';
      });
    });

    return {
      layoutFieldsText,
      fontSizes,
      fontColors,
      starsStyleObject,
      svgPath,
      bgStyleObject,
      bgSrc,
    };
  },
});
</script>

<style lang="scss">
.starmap-product {
  width: $paper-format-a3-width;
  height: $paper-format-a3-height;
  transform: translate(-50%, -50%) scale(.25);
  transform-origin: center;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  background: #fff;

  &__stars {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
  }

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: no-repeat center;
    background-size: cover;
    &-iframe{
      width: 100%;
      height: 100%;
      svg{
        width: 100%;
        height: 100%;
      }

    }
  }
  &__layout-field-text{
    position: relative;
    color: #000;
    width: 100%;
    font-size: 9em;
    text-align: center;
    opacity: 0;
  }
}

</style>
