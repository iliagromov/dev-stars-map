<template lang="pug">
.starmap-product
  #celestial-map.starmap-product__stars(
    :style="starsStyleObject"
  )
  .starmap-product__bg(
    :style="bgStyleObject"
  )
  .starmap-product__text(
    :style="textStyleObject"
    v-html="textLayout"
  )
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
      backgroundPath,
      starsShiftX,
      starsShiftY,
      textLayout,
      initProduct,
    } = useProduct();

    const textStyleObject = computed(() => ({
      color: '#000',
    }));

    const bgStyleObject = computed(() => ({
      backgroundImage: backgroundPath.value ? `url(${backgroundPath.value})` : '',
    }));

    const starsStyleObject = computed(() => {
      const translateX = `calc(-50% + ${starsShiftX.value}px)`;
      const translateY = `calc(-50% + ${starsShiftY.value}px)`;

      return {
        transform: `translate3d(${translateX}, ${translateY}, 0)`,
      };
    });

    onMounted(async () => {
      await initProduct();
    });

    return {
      starsStyleObject,
      bgStyleObject,
      textStyleObject,
      textLayout,
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
  &__text{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 6.04545em;
    letter-spacing: .00182em;
  }

}
</style>
