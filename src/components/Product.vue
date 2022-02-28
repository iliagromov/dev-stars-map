<template lang="pug">
.starmap-product
  #celestial-map.starmap-product__stars(
    :style="starsStyleObject"
  )
  .starmap-product__bg
    svg-template
</template>

<script lang="ts">
// Vendor
import {
  defineComponent,
  onMounted,
} from 'vue';
// Composables
import useProduct from 'src/composables/useProduct';
// Components
import SvgTemplate from './Svg.vue';

export default defineComponent({
  name: 'Product',
  components: {
    SvgTemplate,
  },
  setup() {
    const {
      starsStyleObject,
      initProduct,
    } = useProduct();

    onMounted(async () => {
      await initProduct();
    });

    return {
      starsStyleObject,
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
