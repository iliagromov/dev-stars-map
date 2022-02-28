<template lang="pug">
.starmap-product
  #celestial-map.starmap-product__stars(
    :style="starsStyleObject"
  )
  .starmap-product__bg(v-html="modelSvgIframe")
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
  ref,
  watch,
} from 'vue';
// Composables
import useProduct from 'src/composables/useProduct';
// Components
import Svg from './Svg.vue';

export default defineComponent({
  name: 'Product',
  components: {
    Svg,
  },
  setup() {
    const modelSvgIframe = ref<string>();
    const {
      // layoutFieldText,
      layoutFieldsText,
      layoutFieldTextSize,
      layoutFieldTextColor,
      backgroundPath,
      starsShiftX,
      starsShiftY,
      initProduct,
    } = useProduct();

    const svgText = computed(() => layoutFieldsText.value.map((text) => (text.innerText)));
    const fontSizes = computed(() => layoutFieldTextSize.value.map((size) => (`${size.styles.size}em`)));

    const fontColors = computed(() => layoutFieldTextColor.value.map((c) => (
      `color: ${c.styles.color}`)));

    const bgStyleObject = computed(() => ({
      backgroundImage: backgroundPath.value ? `url(${backgroundPath.value})` : '',
    }));

    const bgSrc = computed(() => (backgroundPath.value ? backgroundPath.value : ''));
    const starsStyleObject = computed(() => {
      const translateX = `calc(-50% + ${starsShiftX.value}px)`;
      /** Для первого макета Y75% */
      const translateY = `calc(-75% + ${starsShiftY.value}px)`;

      return {
        transform: `translate3d(${translateX}, ${translateY}, 0)`,
      };
    });

    // каждый раз приходится парсить svg
    // можно сделать компьютед?
    // каждый раз запрашиваю bg и деалю парсиннг, может хранить svg в store?
    // шрифт в свг обновляется не сразу,..
    const renderSVG = async () => {
      const response = await fetch(bgSrc.value);
      const responseText = await response.text();
      const parser = new DOMParser();
      const svg = parser.parseFromString(responseText, 'image/svg+xml');

      svg.querySelectorAll('text').forEach((item, index:number) => {
        // fixme: layoutFieldsText.value[index]
        item.textContent = layoutFieldsText.value[index] ? layoutFieldsText.value[index].innerText : '';
        item.style.fontSize = layoutFieldsText.value[index] ? `${layoutFieldsText.value[index].styles.size}em` : '100em';
        item.style.fill = layoutFieldsText.value[index] ? layoutFieldsText.value[index].styles.color : '#000000';
        item.style.fontFamily = layoutFieldsText.value[index] ? layoutFieldsText.value[index].styles.font : 'AdventureC';
      });

      modelSvgIframe.value = svg.documentElement.outerHTML;
    };

    // watch изменения текста, шрифта, размера
    watch(backgroundPath, renderSVG);
    // watch(layoutFieldText, renderSVG);
    watch(svgText, renderSVG);
    watch(fontSizes, renderSVG);
    watch(fontColors, renderSVG);

    onMounted(async () => {
      await initProduct();
    });

    return {
      layoutFieldsText,
      fontSizes,
      fontColors,
      starsStyleObject,
      bgStyleObject,
      modelSvgIframe,
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
