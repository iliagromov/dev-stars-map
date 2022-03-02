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
        innerText: 'В этот день звезды решили за нас',
        styles: {
          font: 'AdventureC',
          size: 120,
          color: '#000000',
        },
      },
      {
        id: 1,
        innerText: 'ты - мой повод быть лучше',
        styles: {
          font: 'Century Gothic',
          size: 80,
          color: '#000000',
        },
      },
      {
        id: 2,
        innerText: '3 января 2021',
        styles: {
          font: 'Century Gothic',
          size: 60,
          color: '#000000',
        },
      },
      {
        id: 3,
        innerText: 'россия, москва',
        styles: {
          font: 'Century Gothic',
          size: 60,
          color: '#000000',
        },
      },
    ],
    stars: {
      shiftX: null,
      shiftY: null,
      celestial: null,
    },
  };
}

export default state;
