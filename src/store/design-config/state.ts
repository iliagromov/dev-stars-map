import { CelestialConfig } from 'd3-celestial/celestial';

export interface DesignConfigStateInterface {
  /** Параметры слоя фона-трафарета */
  background: {
    /** Название файла */
    filename: string;
  };

  layoutFieldsText: Array<object>,

  textEditor: {
    innerText: string;
    // FIXME: Сделать по типу CSSStyleDeclaration
    styles: {
      font: string,
      size: number,
      color: string,
      transformX: number,
      transformY: number,
    }
  }
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
    ],
    textEditor: {
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
