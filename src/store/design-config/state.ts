import { CelestialConfig } from 'd3-celestial/celestial';
import { LayoutFieldsText } from '../../types';

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

    colorScheme: object[];

    printConfig: object;
  };

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
      colorScheme: null,
      printConfig: null,
    },
    svg: {
      bloburl: null,
    },
  };
}

export default state;
