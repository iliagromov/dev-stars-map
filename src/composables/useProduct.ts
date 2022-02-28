// Vendor
import { ref, watch, computed } from 'vue';
import d3Celestial, { Celestial, CelestialConfig } from 'd3-celestial/celestial';

// Composables
import useStoreDesignConfig from 'src/composables/useStoreDesignConfig';

export default function useProduct() {
  const celestial = ref<Celestial>(new d3Celestial.Celestial());

  const {
    starsShiftX,
    starsShiftY,
    starsCelestial,
    setDefaults,
    setDefaultLayoutField,
  } = useStoreDesignConfig();

  const initProduct = async () => {
    await setDefaults();
    await setDefaultLayoutField();
  };

  const starsStyleObject = computed(() => {
    const translateX = `calc(-50% + ${starsShiftX.value}px)`;
    const translateY = `calc(-75% + ${starsShiftY.value}px)`;
    return {
      transform: `translate3d(${translateX}, ${translateY}, 0)`,
    };
  });

  const updateCelestial = () => {
    celestial.value.display(<CelestialConfig>JSON.parse(JSON.stringify(starsCelestial.value)));
  };

  watch(starsCelestial, updateCelestial, { deep: true });

  return {
    starsStyleObject,
    initProduct,
  };
}
