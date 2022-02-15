import { CelestialConfig } from 'd3-celestial/celestial';
import { LayoutFieldsText, LayoutFieldText } from '../../types';

export interface DesignConfigStateInterface {
  /** Параметры слоя фона-трафарета */
  background: {
    /** Название файла */
    filename: string;
  };

  layoutFieldsText: LayoutFieldsText,

  textEditor: LayoutFieldText,
  /** Параметры слоя с картой звездного неба */
  stars: {
    /** Сдвиг слоя с картой по оси X */
    shiftX: number;

    /** Сдвиг слоя с картой по оси Y */
    shiftY: number;

    /** Конфигурация карты звездного неба */
    celestial: Partial<CelestialConfig>;
  };
}

function state(): DesignConfigStateInterface {
  return {
    background: {
      filename: null,
    },
    layoutFieldsText: [
      {
        id: 0,
        innerText: 'test',
        styles: {
          font: 'AdventureC',
          size: 5,
          color: '#000',
          transformX: 0,
          transformY: 0,
        },
      },
    ],
    textEditor: {
      id: 0,
      innerText: 'В этот день звезды решили за нас',
      styles: {
        font: null,
        size: null,
        color: null,
        transformX: null,
        transformY: null,
      },
    },
    stars: {
      shiftX: null,
      shiftY: null,
      celestial: null,
    },
  };
}

export default state;
