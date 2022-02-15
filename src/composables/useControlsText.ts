// Vendor
import { ref, watch } from 'vue';

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
    layoutFieldsText,
    setDefaultLayoutField,
    unsetDefaultLayoutField,
    setLayoutField,
    setLayoutFieldTextFont,
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
  // modelTextEditorStyleFontFamily.value = layoutFieldsText.value.map((field: LayoutFieldText) => (
  //   field.styles.font
  // ));
  const optionsModelTextEditorStyleFontFamily = FONTS_LIST;

  watch(modelTextEditorStyleFontFamily, setLayoutFieldTextFont);

  const changeFieldFont = async (value: string, index: number) => {
    const obj = Object.assign(layoutFieldsText, {
      id: index,
      styles: {
        font: value,
      },
    });
    // получать предыдущий объект
    // переписывать стейт
    await setLayoutField(obj);
  };

  /** Размер шрифта для текстового поля */
  const changeFieldSize = async (value: number, index: number) => {
    const obj = {
      id: index,
      styles: {
        size: +value,
      },
    };

    await setLayoutFieldTextSize(obj);
  };
  /** Цвет текста для текстового поля */
  const changeFieldColor = async (value: string, index: number) => {
    const obj = {
      id: index,
      styles: {
        color: value,
      },
    };

    await setLayoutFieldTextColor(obj);
  };
  /** Координата transformX для текстового поля */

  const changeFieldTransformX = async (value: number, index: number) => {
    const obj = {
      id: index,
      styles: {
        transformX: +value,
      },
    };

    await setLayoutFieldTextTransformX(obj);
  };

  /** Координата transformY для текстового поля */

  const changeFieldTransformY = async (value: number, index: number) => {
    const obj = {
      id: index,
      styles: {
        transformY: +value,
      },
    };

    await setLayoutFieldTextTransformY(obj);
  };

  /** Изменение конкретного массива */

  return {
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

    modelTextEditorStyleFontFamily,
    optionsModelTextEditorStyleFontFamily,
    layoutFieldsText,

    changeFieldFont,

    onAddLayoutField,
    onRemoveLayoutField,
  };
}
