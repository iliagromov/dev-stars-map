import { CelestialConfig } from 'd3-celestial/celestial';
import { COLORS_SCHEME } from 'src/config';
import { LayoutFieldsText, ColorsScheme } from '../../types';

export interface DesignConfigStateInterface {
  /** Параметры слоя фона-трафарета */
  background: {
    /** Название файла */
    filename: string;
  };

  layoutFieldsText: LayoutFieldsText,

  /** Параметры слоя с картой звездного неба */
  stars: {
    /** Сдвиг слоя с картой по оси X */
    shiftX: number;

    /** Сдвиг слоя с картой по оси Y */
    shiftY: number;

    /** Конфигурация карты звездного неба */
    celestial: Partial<CelestialConfig>;

    printConfig: object;
  };
  colorsScheme: ColorsScheme,
  activeColorScheme: number,

  svg: {
    /** Blob URL готового svg файла */
    bloburl: string;
  };
}

function state(): DesignConfigStateInterface {
  return {
    background: {
      filename: null,
    },
    layoutFieldsText: [],
    stars: {
      shiftX: null,
      shiftY: null,
      celestial: null,
      printConfig: null,
    },
    colorsScheme: COLORS_SCHEME,
    activeColorScheme: 0,
    svg: {
      bloburl: null,
    },
  };
}

export default state;
