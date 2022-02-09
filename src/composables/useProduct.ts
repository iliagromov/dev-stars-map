// Vendor
import { computed, ref, watch } from 'vue';
import d3Celestial, { Celestial, CelestialConfig } from 'd3-celestial/celestial';

// Composables
import useStoreDesignConfig from 'src/composables/useStoreDesignConfig';

export default function useProduct() {
  const celestial = ref<Celestial>(new d3Celestial.Celestial());

  const {
    backgroundFilename,
    textEditor,
    starsShiftX,
    starsShiftY,
    starsCelestial,
    setDefaults,
  } = useStoreDesignConfig();

  const textLayout = computed(() => textEditor.value);

  const backgroundPath = computed(() => `/images/backgrounds/${backgroundFilename.value}.svg`);

  const initProduct = async () => {
    await setDefaults();
  };

  const updateCelestial = () => {
    celestial.value.display(<CelestialConfig>JSON.parse(JSON.stringify(starsCelestial.value)));
  };

  watch(starsCelestial, updateCelestial, { deep: true });

  return {
    textLayout,
    backgroundPath,
    starsShiftX,
    starsShiftY,
    initProduct,
  };
}
