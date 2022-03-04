// Vendor
import { computed } from 'vue';
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useFileUpload() {
  const {
    config,
    svgBlobUrl,
  } = useStoreDesignConfig();
  const isSvgDone = computed(() => svgBlobUrl.value);
  const configJson = computed(() => `data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(config.value))}`);

  return {
    configJson,
    svgBlobUrl,
    isSvgDone,
  };
}
