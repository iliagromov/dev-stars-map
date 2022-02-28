// Vendor
import { computed, ref, watch } from 'vue';
import d3Celestial, { Celestial, CelestialConfig } from 'd3-celestial/celestial';

// Composables
import useStoreDesignConfig from 'src/composables/useStoreDesignConfig';

export default function useProduct() {
  const celestial = ref<Celestial>(new d3Celestial.Celestial());

  const {
    backgroundFilename,
    layoutFieldsText,
    layoutFieldTextFont,
    layoutFieldTextSize,
    layoutFieldTextColor,
    starsShiftX,
    starsShiftY,
    starsCelestial,
    setDefaults,
    setDefaultLayoutField,
  } = useStoreDesignConfig();

  const backgroundPath = computed(() => backgroundFilename.value);
  const svgText = computed(() => layoutFieldsText.value.map((text) => (text)));

  const initProduct = async () => {
    await setDefaults();
    await setDefaultLayoutField();
  };

  const updateCelestial = () => {
    celestial.value.display(<CelestialConfig>JSON.parse(JSON.stringify(starsCelestial.value)));
  };

  // const setSvg = async () => {
  //   // eslint-disable-next-line no-console
  //   await setDefaultLayoutField();
  // };

  // watch(backgroundFilename, setSvg);

  watch(starsCelestial, updateCelestial, { deep: true });

  return {
    svgText,
    layoutFieldsText,
    layoutFieldTextFont,
    layoutFieldTextSize,
    layoutFieldTextColor,
    backgroundPath,
    starsShiftX,
    starsShiftY,
    initProduct,
  };
}
