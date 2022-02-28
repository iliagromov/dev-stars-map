// Config
import { FONTS_LIST } from 'src/config';

// Composables
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useControlsText() {
  const {
    // layoutFieldText,
    setLayoutFieldText,
    layoutFieldTextSize,
    setLayoutFieldTextSize,
    layoutFieldTextColor,
    setLayoutFieldTextColor,
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

  /** Измение текста для текстового поля */

  /** Измение текста для текстового поля */
  // const newLayoutFieldText = layoutFieldsText.value.map((field) => field);
  // const modelLayoutFieldText = toRefs(newLayoutFieldText);

  // watch(layoutFieldText, (value: string) => {
  //   modelLayoutFieldText.forEach((item) => {
  //     item.value.innerText = value;
  //   });
  // });

  // watch(modelLayoutFieldText, setLayoutFieldText);

  const changeFieldText = async (value: string, index: number) => {
    await setLayoutFieldText({
      id: index,
      innerText: value,
    });
  };

  /** Семейство Шрифтов для текстового поля  */
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

  return {
    layoutFieldsText,
    // modelLayoutFieldText,
    changeFieldText,
    layoutFieldTextSize,
    changeFieldSize,
    layoutFieldTextColor,
    changeFieldColor,
    layoutFieldTextFont,

    optionsModelTextEditorStyleFontFamily,

    changeFieldFont,

    onAddLayoutField,
    onRemoveLayoutField,
  };
}
