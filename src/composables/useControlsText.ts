// Vendor
import { ref, watch } from 'vue';

// Config
import { FONTS_LIST } from 'src/config';

// Composables
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useControlsText() {
  const {
    textEditor,
    setTextEditor,
    layoutFieldTextFont,
    setLayoutFieldTextFont,
    layoutFieldTextSize,
    setLayoutFieldTextSize,
    layoutFieldTextColor,
    setLayoutFieldTextColor,
    layoutFieldTextTransformX,
    setLayoutFieldTextTransformX,
    layoutFieldTextTransformY,
    setLayoutFieldTextTransformY,
  } = useStoreDesignConfig();

  /** Текстове поле для макета */
  const modelTextEditor = ref<string>(null);

  watch(textEditor, (value: string) => {
    modelTextEditor.value = value;
  });

  watch(modelTextEditor, setTextEditor);

  /** Семейство Шрифтов для текстового поля  */
  const modelTextEditorStyleFontFamily = ref<string>(null);
  const optionsModelTextEditorStyleFontFamily = FONTS_LIST;

  watch(
    layoutFieldTextFont,
    (value: string) => {
      modelTextEditorStyleFontFamily.value = value;
    },
  );

  watch(
    modelTextEditorStyleFontFamily,
    setLayoutFieldTextFont,
  );

  /** Размер шрифта для текстового поля */
  const modelLayoutFieldTextStyleSize = ref<number>(null);

  watch(
    layoutFieldTextSize,
    (value: number) => {
      modelLayoutFieldTextStyleSize.value = value;
    },
  );

  watch(
    modelLayoutFieldTextStyleSize,
    setLayoutFieldTextSize,
  );

  /** Цвет текста для текстового поля */
  const modelLayoutFieldTextStyleColor = ref<string>(null);

  watch(
    layoutFieldTextColor,
    (value: string) => {
      modelLayoutFieldTextStyleColor.value = value;
    },
  );

  watch(
    modelLayoutFieldTextStyleColor,
    setLayoutFieldTextColor,
  );

  /** Координата transformX для текстового поля */
  const modelLayoutFieldTextStyleTransformX = ref<number>(null);

  watch(
    layoutFieldTextTransformX,
    (value: number) => {
      modelLayoutFieldTextStyleTransformX.value = value;
    },
  );

  watch(
    modelLayoutFieldTextStyleTransformX,
    setLayoutFieldTextTransformX,
  );
  /** Координата transformY для текстового поля */
  const modelLayoutFieldTextStyleTransformY = ref<number>(null);

  watch(
    layoutFieldTextTransformY,
    (value: number) => {
      modelLayoutFieldTextStyleTransformY.value = value;
    },
  );

  watch(
    modelLayoutFieldTextStyleTransformY,
    setLayoutFieldTextTransformY,
  );

  return {
    modelTextEditor,
    modelTextEditorStyleFontFamily,
    modelLayoutFieldTextStyleSize,
    modelLayoutFieldTextStyleColor,
    modelLayoutFieldTextStyleTransformX,
    modelLayoutFieldTextStyleTransformY,
    optionsModelTextEditorStyleFontFamily,
  };
}
