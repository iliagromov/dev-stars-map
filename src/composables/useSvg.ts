// Vendor
import { computed } from 'vue';

export default function useSvg() {
  const sSvg = 'test';

  const svg = computed(() => sSvg);

  return {
    svg,
    sSvg,
  };
}
