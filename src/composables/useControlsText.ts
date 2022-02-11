// Vendor
import { ref, watch } from 'vue';

// Config

// Composables
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useControlsText() {
  const {
    layoutFields,
    setDefaultLayoutField,
    unsetDefaultLayoutField,
  } = useStoreDesignConfig();

  const modelAddLayoutField = ref();

  watch(layoutFields, (value: object[]) => {
    modelAddLayoutField.value = value;
  });

  /** Добавить новое поле */
  const onAddLayoutField = async () => {
    await setDefaultLayoutField();
  };

  /** Убрать поле */
  const onRemoveLayoutField = async () => {
    await unsetDefaultLayoutField();
  };

  return {
    layoutFields,
    modelAddLayoutField,
    onAddLayoutField,
    onRemoveLayoutField,
  };
}
