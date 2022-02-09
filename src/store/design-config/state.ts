import { CelestialConfig } from 'd3-celestial/celestial';

export interface DesignConfigStateInterface {
  /** Параметры слоя фона-трафарета */
  background: {
    /** Название файла */
    filename: string;
  };

  textEditor: {
    innerText: string
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
    textEditor: {
      innerText: 'В этот день <br/> звезды решили за нас. 2',
    },
    stars: {
      shiftX: null,
      shiftY: null,
      celestial: null,
    },
  };
}

export default state;
