<template lang="pug">
.starmap-product
  #celestial-map.starmap-product__stars(
    :style="starsStyleObject"
  )
  .starmap-product__bg(
    :style="bgStyleObject"
  )
  template(v-for="(field, index) in layoutFieldsText")
    .starmap-product__layout-field-text(
      v-html="field.innerText"
      :style="{transform: `translate3d(${fontTransformsX[index]}, ${fontTransformsY[index]}, 0px)`}"
      :style.color="fontColors[index]"
      :style.size="fontSizes[index]"
      )
  //-.starmap-product__subtitle ты - мой повод быть лучше
  //-.starmap-product__date 8 Февраля 2022
  //-.starmap-product__place Россия, Москва
  //- .starmap-product__name.name1
  //-   .starmap-product__name-value руслан
  //-   .starmap-product__name-date 11.09.1989
  //- .starmap-product__name.name2
  //-   .starmap-product__name-value людмила
  //-   .starmap-product__name-date 11.09.1989
</template>

<script lang="ts">
// Vendor
import { computed, defineComponent, onMounted } from 'vue';

// Composables
import useProduct from 'src/composables/useProduct';

export default defineComponent({
  name: 'Product',

  setup() {
    const {
      layoutFieldsText,
      layoutFieldTextSize,
      layoutFieldTextColor,
      layoutFieldTextTransformX,
      layoutFieldTextTransformY,
      backgroundPath,
      starsShiftX,
      starsShiftY,
      initProduct,
    } = useProduct();

    // const layoutFieldStyleObject = computed(() => ({
    //   color: layoutFieldTextColor.value,
    //   'font-family': layoutFieldTextFont.value,
    //   'font-size': `${layoutFieldTextSize.value}em`,
    //   transform: `translate3d(calc(0% + ${layoutFieldTextTransformX.value}px),
    // calc(0% + ${layoutFieldTextTransformY.value}px), 0)`,
    // }));
    const fontSizes = computed(() => layoutFieldTextSize.value.map((size) => ({ 'font-size': `${size.styles.size}em` })));
    const fontColors = computed(() => layoutFieldTextColor.value.map((c) => (
      `color: ${c.styles.color}`)));
    const fontTransformsX = computed(() => layoutFieldTextTransformX.value.map((t) => (
      `${t.styles.transformX}px`
    )));
    const fontTransformsY = computed(() => layoutFieldTextTransformY.value.map((t) => (
      `${t.styles.transformY}px`
    )));
    const bgStyleObject = computed(() => ({
      backgroundImage: backgroundPath.value ? `url(${backgroundPath.value})` : '',
    }));

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
    });

    return {
      layoutFieldsText,
      fontSizes,
      fontColors,
      fontTransformsX,
      fontTransformsY,
      starsStyleObject,
      bgStyleObject,
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
  }
  &__layout-field-text{
    position: relative;
    color: #000;
    width: 100%;
    font-size: 9em;
    text-align: center;
  }
}

</style>
