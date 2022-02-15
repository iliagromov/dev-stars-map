// Vendor
import { ref } from 'vue';

// Config
import { FONTS_LIST } from 'src/config';
import { LayoutFieldsText } from 'src/types';

// Composables
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useControlsText() {
  const {
    layoutFieldText,
    setLayoutFieldText,
    layoutFieldTextSize,
    setLayoutFieldTextSize,
    layoutFieldTextColor,
    setLayoutFieldTextColor,
    layoutFieldTextTransformX,
    setLayoutFieldTextTransformX,
    layoutFieldTextTransformY,
    setLayoutFieldTextTransformY,
    layoutFieldTextFont,
    setLayoutFieldTextFont,
    layoutFieldsText,
    setDefaultLayoutField,
    unsetDefaultLayoutField,
  } = useStoreDesignConfig();

  /** Добавить новое поле */
  const onAddLayoutField = async () => {
    await setDefaultLayoutField();
  };

  /** Убрать поле */
  const onRemoveLayoutField = async () => {
    await unsetDefaultLayoutField();
  };

  /** Измение основного массива */

  const changeFieldText = async (value: string, index: number) => {
    await setLayoutFieldText({
      id: index,
      innerText: value,
    });
  };

  /** Семейство Шрифтов для текстового поля  */
  const modelTextEditorStyleFontFamily = ref<LayoutFieldsText>(null);
  modelTextEditorStyleFontFamily.value = layoutFieldsText.value.map((field) => field);

  const optionsModelTextEditorStyleFontFamily = FONTS_LIST;

  const changeFieldFont = async (value: string, index: number) => {
    await setLayoutFieldTextFont({
      id: index,
      styles: {
        font: value,
      },
    });
  };

  /** Размер шрифта для текстового поля */
  const changeFieldSize = async (value: number, index: number) => {
    await setLayoutFieldTextSize({
      id: index,
      styles: {
        size: +value,
      },
    });
  };
  /** Цвет текста для текстового поля */
  const changeFieldColor = async (value: string, index: number) => {
    await setLayoutFieldTextColor({
      id: index,
      styles: {
        color: value,
      },
    });
  };
  /** Координата transformX для текстового поля */

  const changeFieldTransformX = async (value: number, index: number) => {
    await setLayoutFieldTextTransformX({
      id: index,
      styles: {
        transformX: +value,
      },
    });
  };

  /** Координата transformY для текстового поля */

  const changeFieldTransformY = async (value: number, index: number) => {
    await setLayoutFieldTextTransformY({
      id: index,
      styles: {
        transformY: +value,
      },
    });
  };

  return {
    layoutFieldsText,
    layoutFieldText,
    changeFieldText,
    layoutFieldTextSize,
    changeFieldSize,
    layoutFieldTextColor,
    changeFieldColor,
    layoutFieldTextTransformX,
    changeFieldTransformX,
    layoutFieldTextTransformY,
    changeFieldTransformY,
    layoutFieldTextFont,

    modelTextEditorStyleFontFamily,
    optionsModelTextEditorStyleFontFamily,

    changeFieldFont,

    onAddLayoutField,
    onRemoveLayoutField,
  };
}
