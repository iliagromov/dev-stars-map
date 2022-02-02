// Vendor
import { ref, watch } from 'vue';
import { CelestialConfig } from 'd3-celestial/celestial';

// Config
import { FONTS_LIST } from 'src/config';

// Composables
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useProduct(/* productId */) {
  const {
    starsShiftX,
    setStarsShiftX,
    starsShiftY,
    setStarsShiftY,
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
    starsCelestialStarsDesignationFill,
    setStarsCelestialStarsDesignationFill,
    starsCelestialStarsDesignationFontFamily,
    setStarsCelestialStarsDesignationFontFamily,
    starsCelestialStarsDesignationFontSize,
    setStarsCelestialStarsDesignationFontSize,
    starsCelestialStarsDesignationFontPosition,
    setStarsCelestialStarsDesignationFontPosition,
  } = useStoreDesignConfig();

  /** Сдвиг по оси X */
  const modelShiftX = ref<number>(null);

  watch(starsShiftX, (value: number) => {
    modelShiftX.value = value;
  });

  watch(modelShiftX, setStarsShiftX);

  /** Сдвиг по оси Y */
  const modelShiftY = ref<number>(null);

  watch(starsShiftY, (value: number) => {
    modelShiftY.value = value;
  });

  watch(modelShiftY, setStarsShiftY);

  /** Размер карты */
  const modelCelestialWidth = ref<number>(null);

  watch(starsCelestialWidth, (value: number) => {
    modelCelestialWidth.value = value;
  });

  watch(modelCelestialWidth, setStarsCelestialWidth);

  /** Проекция карты */
  const modelCelestialProjection = ref<CelestialConfig['projection']>(null);
  const optionsCelestialProjection = [
    'airy', 'aitoff', 'armadillo', 'august', 'azimuthalEqualArea', 'azimuthalEquidistant',
    'baker', 'berghaus', 'boggs', 'bonne', 'bromley', 'collignon', 'craig', 'craster',
    'cylindricalEqualArea', 'cylindricalStereographic', 'eckert1', 'eckert2', 'eckert3',
    'eckert4', 'eckert5', 'eckert6', 'eisenlohr', 'equirectangular', 'fahey', 'foucaut',
    'ginzburg4', 'ginzburg5', 'ginzburg6', 'ginzburg8', 'ginzburg9', 'gringorten', 'hammer',
    'hatano', 'healpix', 'hill', 'homolosine', 'kavrayskiy7', 'lagrange', 'larrivee',
    'laskowski', 'loximuthal', 'mercator', 'miller', 'mollweide', 'mtFlatPolarParabolic',
    'mtFlatPolarQuartic', 'mtFlatPolarSinusoidal', 'naturalEarth', 'nellHammer',
    'orthographic', 'patterson', 'polyconic', 'rectangularPolyconic', 'robinson',
    'sinusoidal', 'stereographic', 'times', 'twoPointEquidistant', 'vanDerGrinten',
    'vanDerGrinten2', 'vanDerGrinten3', 'vanDerGrinten4', 'wagner4', 'wagner6', 'wagner7',
    'wiechel', 'winkel3',
  ];

  watch(starsCelestialProjection, (value: CelestialConfig['projection']) => {
    modelCelestialProjection.value = value;
  });

  watch(modelCelestialProjection, setStarsCelestialProjection);

  /** Трансформация координат */
  const modelCelestialTransform = ref<CelestialConfig['transform']>(null);
  const optionsCelestialTransform = [
    'equatorial',
    'ecliptic',
    'galactic',
    'supergalactic',
  ];

  watch(starsCelestialTransform, (value: CelestialConfig['transform']) => {
    modelCelestialTransform.value = value;
  });

  watch(modelCelestialTransform, setStarsCelestialTransform);

  /** Масштаб */
  const modelCelestialZoomlevel = ref<CelestialConfig['zoomlevel']>(null);

  watch(starsCelestialZoomlevel, (value: CelestialConfig['zoomlevel']) => {
    modelCelestialZoomlevel.value = value;
  });

  watch(modelCelestialZoomlevel, setStarsCelestialZoomlevel);

  /** Звезды (вкл/выкл) */
  const modelCelestialStarsShow = ref<CelestialConfig['stars']['show']>(null);

  watch(starsCelestialStarsShow, (value: CelestialConfig['stars']['show']) => {
    modelCelestialStarsShow.value = value;
  });

  watch(modelCelestialStarsShow, setStarsCelestialStarsShow);

  /** Звезды: Лимит */
  const modelCelestialStarsLimit = ref<CelestialConfig['stars']['limit']>(null);

  watch(starsCelestialStarsLimit, (value: CelestialConfig['stars']['limit']) => {
    modelCelestialStarsLimit.value = value;
  });

  watch(modelCelestialStarsLimit, setStarsCelestialStarsLimit);

  /** Спектральный цвет звезд (вкл/выкл) */
  const modelCelestialStarsColors = ref<CelestialConfig['stars']['colors']>(null);

  watch(starsCelestialStarsColors, (value: CelestialConfig['stars']['colors']) => {
    modelCelestialStarsColors.value = value;
  });

  watch(modelCelestialStarsColors, setStarsCelestialStarsColors);

  /** Цвет звезд */
  const modelCelestialStarsStyleFill = ref<CelestialConfig['stars']['style']['fill']>(null);

  watch(starsCelestialStarsStyleFill, (value: CelestialConfig['stars']['style']['fill']) => {
    modelCelestialStarsStyleFill.value = value;
  });

  watch(modelCelestialStarsStyleFill, setStarsCelestialStarsStyleFill);

  /** Прозрачность звезд */
  const modelCelestialStarsStyleOpacity = ref<CelestialConfig['stars']['style']['opacity']>(null);

  watch(
    starsCelestialStarsStyleOpacity,
    (value: CelestialConfig['stars']['style']['opacity']) => {
      modelCelestialStarsStyleOpacity.value = value;
    },
  );

  watch(modelCelestialStarsStyleOpacity, setStarsCelestialStarsStyleOpacity);

  /** Размер звезд */
  const modelCelestialStarsSize = ref<CelestialConfig['stars']['size']>(null);

  watch(starsCelestialStarsSize, (value: CelestialConfig['stars']['size']) => {
    modelCelestialStarsSize.value = value;
  });

  watch(modelCelestialStarsSize, setStarsCelestialStarsSize);

  /** Названия звезд (вкл/выкл) */
  const modelCelestialStarsDesignation = ref<CelestialConfig['stars']['designation']>(null);

  watch(starsCelestialStarsDesignation, (value: CelestialConfig['stars']['designation']) => {
    modelCelestialStarsDesignation.value = value;
  });

  watch(modelCelestialStarsDesignation, setStarsCelestialStarsDesignation);

  /** Лимит мин. яркости звезды */
  const modelCelestialStarsDesignationLimit = ref<CelestialConfig['stars']['designationLimit']>(null);

  watch(
    starsCelestialStarsDesignationLimit,
    (value: CelestialConfig['stars']['designationLimit']) => {
      modelCelestialStarsDesignationLimit.value = value;
    },
  );

  watch(modelCelestialStarsDesignationLimit, setStarsCelestialStarsDesignationLimit);

  /** Тип отображаемых названий */
  const modelCelestialStarsDesignationType = ref<CelestialConfig['stars']['designationType']>(null);
  const optionsCelestialStarsDesignationType = [
    'name', 'bayer', 'flam', 'var', 'gl', 'hd', 'hip', 'c', 'desig',
  ];

  watch(
    starsCelestialStarsDesignationType,
    (value: CelestialConfig['stars']['designationType']) => {
      modelCelestialStarsDesignationType.value = value;
    },
  );

  watch(modelCelestialStarsDesignationType, setStarsCelestialStarsDesignationType);

  /** Шрифт названий звезд */
  const modelCelestialStarsDesignationStyleFontFamily = ref<string>(null);
  const optionsCelestialStarsDesignationStyleFontFamily = FONTS_LIST;

  watch(
    starsCelestialStarsDesignationFontFamily,
    (value: string) => {
      modelCelestialStarsDesignationStyleFontFamily.value = value;
    },
  );

  watch(
    modelCelestialStarsDesignationStyleFontFamily,
    setStarsCelestialStarsDesignationFontFamily,
  );

  /** Цвет названий звезд */
  const modelCelestialStarsDesignationStyleFill = ref<
    CelestialConfig['stars']['designationStyle']['fill']
  >(null);

  watch(
    starsCelestialStarsDesignationFill,
    (value: CelestialConfig['stars']['designationStyle']['fill']) => {
      modelCelestialStarsDesignationStyleFill.value = value;
    },
  );

  watch(
    modelCelestialStarsDesignationStyleFill,
    setStarsCelestialStarsDesignationFill,
  );

  /** Размер названий звезд */
  const modelCelestialStarsDesignationStyleFontSize = ref<number>(null);

  watch(starsCelestialStarsDesignationFontSize, (value: number) => {
    modelCelestialStarsDesignationStyleFontSize.value = value;
  });

  watch(modelCelestialStarsDesignationStyleFontSize, setStarsCelestialStarsDesignationFontSize);

  /** Положение названий звезд */
  const modelCelestialStarsDesignationStylePosition = ref<[
    CelestialConfig['stars']['designationStyle']['align'],
    CelestialConfig['stars']['designationStyle']['baseline'],
  ]>(null);
  const optionsCelestialStarsDesignationStylePosition = [
    {
      label: 'Справа снизу',
      value: ['left', 'top'],
    },
    {
      label: 'Справа',
      value: ['left', 'middle'],
    },
    {
      label: 'Справа сверху',
      value: ['left', 'bottom'],
    },
    {
      label: 'По центру снизу',
      value: ['center', 'top'],
    },
    {
      label: 'По центру',
      value: ['center', 'middle'],
    },
    {
      label: 'По центру сверху',
      value: ['center', 'bottom'],
    },
    {
      label: 'Слева снизу',
      value: ['right', 'top'],
    },
    {
      label: 'Слева',
      value: ['right', 'middle'],
    },
    {
      label: 'Слева сверху',
      value: ['right', 'bottom'],
    },
  ];

  // eslint-disable-next-line
  watch(
    starsCelestialStarsDesignationFontPosition,
    (value: [
      CelestialConfig['stars']['designationStyle']['align'],
      CelestialConfig['stars']['designationStyle']['baseline'],
    ]) => {
      modelCelestialStarsDesignationStylePosition.value = value;
    },
  );

  watch(
    modelCelestialStarsDesignationStylePosition,
    setStarsCelestialStarsDesignationFontPosition,
  );

  return {
    modelShiftX,
    modelShiftY,
    modelCelestialWidth,
    modelCelestialProjection,
    optionsCelestialProjection,
    modelCelestialTransform,
    optionsCelestialTransform,
    modelCelestialZoomlevel,
    modelCelestialStarsShow,
    modelCelestialStarsLimit,
    modelCelestialStarsColors,
    modelCelestialStarsStyleFill,
    modelCelestialStarsStyleOpacity,
    modelCelestialStarsSize,
    modelCelestialStarsDesignation,
    modelCelestialStarsDesignationLimit,
    modelCelestialStarsDesignationType,
    optionsCelestialStarsDesignationType,
    modelCelestialStarsDesignationStyleFontFamily,
    optionsCelestialStarsDesignationStyleFontFamily,
    modelCelestialStarsDesignationStyleFill,
    modelCelestialStarsDesignationStyleFontSize,
    modelCelestialStarsDesignationStylePosition,
    optionsCelestialStarsDesignationStylePosition,
  };
}
