<template lang="pug">
.starmap-product
  #celestial-map.starmap-product__stars(
    :style="starsStyleObject"
  )
  .starmap-product__bg(
    :style="bgStyleObject"
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
      initProduct,
    } = useProduct();

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
}
</style>
