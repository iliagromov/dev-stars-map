// Vendor
import { computed } from 'vue';
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useFileUpload() {
  const {
    svgBlobUrl,
  } = useStoreDesignConfig();
  const isSvgDone = computed(() => svgBlobUrl.value);
  return {
    svgBlobUrl,
    isSvgDone,
  };
}
