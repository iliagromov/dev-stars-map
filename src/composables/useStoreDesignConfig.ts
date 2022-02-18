// Vendor
import { computed } from 'vue';
import { CelestialConfig } from 'd3-celestial/celestial';

// Store
import { useStore } from 'src/store';

export default function useStoreDesignConfig() {
  const store = useStore();

  /** Установка значений карты по-умолчанию */
  const setDefaults = async () => {
    await store.dispatch('designConfig/setDefaultStars');
  };

  /** Выбранный файл фона */
  const backgroundFilename = computed(
    () => store.state.designConfig.background.filename,
  );

  /** Установка выбранного файла фона */
  const setBackgroundFilename = async (value: string) => {
    await store.dispatch('designConfig/setBackgroundFilename', value);
  };

  /** Сброс файла фона */
  const unsetBackgroundFilename = async () => {
    await store.dispatch('designConfig/unsetBackgroundFilename');
  };

  /** Установка поля текста по-умолчанию */
  const setDefaultLayoutField = async () => {
    await store.dispatch('designConfig/setDefaultLayoutField');
  };

  /** Удаление последнего текстового поля */
  const unsetDefaultLayoutField = async () => {
    await store.dispatch('designConfig/unsetDefaultLayoutField');
  };

  /** Текстовые поля для макета */
  const layoutFieldsText = computed(
    () => store.state.designConfig.layoutFieldsText,
  );

  /** Установка текстового поля для макета */
  const setLayoutField = async (value: object) => {
    await store.dispatch('designConfig/setLayoutField', value);
  };

  /** Текст по-умолчанию для макета */
  const layoutFieldText = computed(
    // () => store.state.designConfig.textEditor.innerText,
    () => store.state.designConfig.layoutFieldsText[0].innerText,
  );

  /** Установка текста для макета */
  const setLayoutFieldText = async (value: object) => {
    await store.dispatch('designConfig/setLayoutFieldText', value);
  };

  /** Текстовое поле: Названия: Стили: Шрифт */
  const layoutFieldTextFont = computed(
    () => store.state.designConfig.layoutFieldsText,
  );

  /** Установка семейства шрифта для Текстового поля */
  const setLayoutFieldTextFont = async (
    value: object,
  ) => {
    await store.dispatch('designConfig/setLayoutFieldTextFont', value);
  };

  /** Текстовое поле: Названия: Стили: Размер */
  const layoutFieldTextSize = computed(
    () => store.state.designConfig.layoutFieldsText,
  );

  /** Установка размера шрифта для Текстового поля */
  const setLayoutFieldTextSize = async (
    value: object,
  ) => {
    await store.dispatch('designConfig/setLayoutFieldTextSize', value);
  };

  /** Текстовое поле: Названия: Стили: Цвет */
  const layoutFieldTextColor = computed(
    () => store.state.designConfig.layoutFieldsText,
  );

  /** Установка цвета шрифта для Текстового поля */
  const setLayoutFieldTextColor = async (
    value: object,
  ) => {
    await store.dispatch('designConfig/setLayoutFieldTextColor', value);
  };

  /** Сдвиг слоя со звездами по оси X */
  const starsShiftX = computed(
    () => store.state.designConfig.stars.shiftX,
  );

  /** Установка сдвига слоя со звездами по оси X */
  const setStarsShiftX = async (value: number) => {
    await store.dispatch('designConfig/setShiftX', value);
  };

  /** Сдвиг слоя со звездами по оси Y */
  const starsShiftY = computed(
    () => store.state.designConfig.stars.shiftY,
  );

  /** Установка сдвига слоя со звездами по оси Y */
  const setStarsShiftY = async (value: number) => {
    await store.dispatch('designConfig/setShiftY', value);
  };

  /** Объект параметров Celestial */
  const starsCelestial = computed(
    () => store.state.designConfig.stars.celestial,
  );

  /** Размер карты */
  const starsCelestialWidth = computed(
    () => store.state.designConfig.stars.celestial?.width,
  );

  /** Установка размера карты */
  const setStarsCelestialWidth = async (value: number) => {
    await store.dispatch('designConfig/setCelestialWidth', value);
  };

  /** Проекция карты */
  const starsCelestialProjection = computed(
    () => store.state.designConfig.stars.celestial?.projection,
  );

  /** Установка проекции карты */
  const setStarsCelestialProjection = async (value: CelestialConfig['projection']) => {
    await store.dispatch('designConfig/setCelestialProjection', value);
  };

  /** Трансформация координат */
  const starsCelestialTransform = computed(
    () => store.state.designConfig.stars.celestial?.transform,
  );

  /** Установка трансформации координат */
  const setStarsCelestialTransform = async (value: CelestialConfig['transform']) => {
    await store.dispatch('designConfig/setCelestialTransform', value);
  };

  /** Масштаб */
  const starsCelestialZoomlevel = computed(
    () => store.state.designConfig.stars.celestial?.zoomlevel,
  );

  /** Установка масштаба */
  const setStarsCelestialZoomlevel = async (value: CelestialConfig['zoomlevel']) => {
    await store.dispatch('designConfig/setCelestialZoomlevel', value);
  };

  /** Звезды */
  const starsCelestialStarsShow = computed(
    () => store.state.designConfig.stars.celestial?.stars.show,
  );

  /** Вкл/выкл звезд */
  const setStarsCelestialStarsShow = async (value: CelestialConfig['stars']['show']) => {
    await store.dispatch('designConfig/setCelestialStarsShow', value);
  };

  /** Звезды: Лимит */
  const starsCelestialStarsLimit = computed(
    () => store.state.designConfig.stars.celestial?.stars.limit,
  );

  /** Установка лимита для звезд */
  const setStarsCelestialStarsLimit = async (value: CelestialConfig['stars']['limit']) => {
    await store.dispatch('designConfig/setCelestialStarsLimit', value);
  };

  /** Размер звезд */
  const starsCelestialStarsSize = computed(
    () => store.state.designConfig.stars.celestial?.stars.size,
  );

  /** Установка размера звезд */
  const setStarsCelestialStarsSize = async (value: CelestialConfig['stars']['size']) => {
    await store.dispatch('designConfig/setCelestialStarsSize', value);
  };

  /** Звезды: Использовать спектральный цвет */
  const starsCelestialStarsColors = computed(
    () => store.state.designConfig.stars.celestial?.stars.colors,
  );

  /** Вкл/выкл спектрального цвета звезд */
  const setStarsCelestialStarsColors = async (value: CelestialConfig['stars']['colors']) => {
    await store.dispatch('designConfig/setCelestialStarsColors', value);
  };

  /** Звезды: Стили */
  const starsCelestialStarsStyle = computed(
    () => store.state.designConfig.stars.celestial?.stars.style,
  );

  /** Звезды: Стиль звезд: Заливка (цвет) */
  const starsCelestialStarsStyleFill = computed(
    () => store.state.designConfig.stars.celestial?.stars.style.fill,
  );

  /** Установка цвета звезд */
  const setStarsCelestialStarsStyleFill = async (
    value: CelestialConfig['stars']['style']['fill'],
  ) => {
    await store.dispatch('designConfig/setCelestialStarsStyleFill', value);
  };

  /** Звезды: Стиль звезд: Прозрачность */
  const starsCelestialStarsStyleOpacity = computed(
    () => store.state.designConfig.stars.celestial?.stars.style.opacity,
  );

  /** Установка цвета звезд */
  const setStarsCelestialStarsStyleOpacity = async (
    value: CelestialConfig['stars']['style']['opacity'],
  ) => {
    await store.dispatch('designConfig/setCelestialStarsStyleOpacity', value);
  };

  /** Звезды: Названия */
  const starsCelestialStarsDesignation = computed(
    () => store.state.designConfig.stars.celestial?.stars.designation,
  );

  /** Вкл/выкл названий звезд */
  const setStarsCelestialStarsDesignation = async (
    value: CelestialConfig['stars']['designation'],
  ) => {
    await store.dispatch('designConfig/setCelestialStarsDesignation', value);
  };

  /** Звезды: Названия: Лимит */
  const starsCelestialStarsDesignationLimit = computed(
    () => store.state.designConfig.stars.celestial?.stars.designationLimit,
  );

  /** Установка лимита для названий звезд */
  const setStarsCelestialStarsDesignationLimit = async (
    value: CelestialConfig['stars']['designationLimit'],
  ) => {
    await store.dispatch('designConfig/setCelestialStarsDesignationLimit', value);
  };

  /** Звезды: Названия: Тип названий */
  const starsCelestialStarsDesignationType = computed(
    () => store.state.designConfig.stars.celestial?.stars.designationType,
  );

  /** Установка типа для названий звезд */
  const setStarsCelestialStarsDesignationType = async (
    value: CelestialConfig['stars']['designationType'],
  ) => {
    await store.dispatch('designConfig/setCelestialStarsDesignationType', value);
  };

  /** Звезды: Названия: Стили */
  const starsCelestialStarsDesignationStyle = computed(
    () => store.state.designConfig.stars.celestial?.stars.designationStyle,
  );

  /** Звезды: Названия: Стили: Цвет */
  const starsCelestialStarsDesignationFill = computed(
    () => store.state.designConfig.stars.celestial?.stars.designationStyle.fill,
  );

  /** Установка цвета названий звезд */
  const setStarsCelestialStarsDesignationFill = async (
    value: CelestialConfig['stars']['designationStyle']['fill'],
  ) => {
    await store.dispatch('designConfig/setCelestialStarsDesignationStyleFill', value);
  };

  /** Звезды: Названия: Стили: Шрифт */
  const starsCelestialStarsDesignationFont = computed(
    () => store.state.designConfig.stars.celestial?.stars.designationStyle.font,
  );

  /** Звезды: Названия: Стили: Шрифт: Семейство */
  const starsCelestialStarsDesignationFontFamily = computed(
    () => {
      const styleFont = store.state.designConfig.stars.celestial?.stars.designationStyle.font;

      if (!styleFont) return null;
      return styleFont.substring(styleFont?.indexOf('px') + 2).trim();
    },
  );

  /** Установка семейства шрифта для названий звезд */
  const setStarsCelestialStarsDesignationFontFamily = async (
    value: string,
  ) => {
    await store.dispatch('designConfig/setCelestialStarsDesignationStyleFontFamily', value);
  };

  /** Звезды: Названия: Стили: Шрифт: Размер */
  const starsCelestialStarsDesignationFontSize = computed(
    () => {
      const styleFont = store.state.designConfig.stars.celestial?.stars.designationStyle.font;

      if (!styleFont) return null;
      return parseInt(styleFont.substring(0, styleFont?.indexOf('px')).trim(), 10);
    },
  );

  /** Установка семейства шрифта для названий звезд */
  const setStarsCelestialStarsDesignationFontSize = async (
    value: number,
  ) => {
    await store.dispatch('designConfig/setCelestialStarsDesignationStyleFontSize', value);
  };

  /** Звезды: Названия: Стили: Расположение */
  const starsCelestialStarsDesignationFontPosition = computed<[
    CelestialConfig['stars']['designationStyle']['align'],
    CelestialConfig['stars']['designationStyle']['baseline'],
  ]>(
    () => [
      store.state.designConfig.stars.celestial?.stars.designationStyle.align,
      store.state.designConfig.stars.celestial?.stars.designationStyle.baseline,
    ],
  );

  /** Установка расположения звезд */
  const setStarsCelestialStarsDesignationFontPosition = async (
    value: [
      CelestialConfig['stars']['designationStyle']['align'],
      CelestialConfig['stars']['designationStyle']['baseline'],
    ],
  ) => {
    await store.dispatch('designConfig/setCelestialStarsDesignationStylePosition', value);
  };

  return {
    setDefaults,
    setDefaultLayoutField,
    unsetDefaultLayoutField,
    backgroundFilename,
    setBackgroundFilename,
    unsetBackgroundFilename,

    layoutFieldsText,
    setLayoutField,

    layoutFieldText,
    setLayoutFieldText,
    layoutFieldTextFont,
    setLayoutFieldTextFont,
    layoutFieldTextSize,
    setLayoutFieldTextSize,
    layoutFieldTextColor,
    setLayoutFieldTextColor,

    starsShiftX,
    setStarsShiftX,
    starsShiftY,
    setStarsShiftY,
    starsCelestial,
    starsCelestialWidth,
    setStarsCelestialWidth,
    starsCelestialProjection,
    setStarsCelestialProjection,
    starsCelestialTransform,
    setStarsCelestialTransform,
    starsCelestialZoomlevel,
    setStarsCelestialZoomlevel,
    starsCelestialStarsShow,
    setStarsCelestialStarsShow,
    starsCelestialStarsLimit,
    setStarsCelestialStarsLimit,
    starsCelestialStarsSize,
    setStarsCelestialStarsSize,
    starsCelestialStarsColors,
    setStarsCelestialStarsColors,
    starsCelestialStarsStyle,
    starsCelestialStarsStyleFill,
    setStarsCelestialStarsStyleFill,
    starsCelestialStarsStyleOpacity,
    setStarsCelestialStarsStyleOpacity,
    starsCelestialStarsDesignation,
    setStarsCelestialStarsDesignation,
    starsCelestialStarsDesignationLimit,
    setStarsCelestialStarsDesignationLimit,
    starsCelestialStarsDesignationType,
    setStarsCelestialStarsDesignationType,
    starsCelestialStarsDesignationStyle,
    starsCelestialStarsDesignationFill,
    setStarsCelestialStarsDesignationFill,
    starsCelestialStarsDesignationFont,
    starsCelestialStarsDesignationFontFamily,
    setStarsCelestialStarsDesignationFontFamily,
    starsCelestialStarsDesignationFontSize,
    setStarsCelestialStarsDesignationFontSize,
    starsCelestialStarsDesignationFontPosition,
    setStarsCelestialStarsDesignationFontPosition,
  };
}
