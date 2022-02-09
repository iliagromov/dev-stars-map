// Vendor
import { ref, watch } from 'vue';

// Composables
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useControlsText() {
  const modelTextEditor = ref<string>(null);

  const {
    textEditor,
    setTextEditor,
  } = useStoreDesignConfig();

  watch(textEditor, (value: string) => {
    modelTextEditor.value = value;
  });

  watch(modelTextEditor, setTextEditor);

  return { modelTextEditor };
}
