<!--eslint-disable max-len -->
<template lang="pug">
iframe(
  src="/iframe/index.html"
  width="979"
  height="774"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
)
form.starchart.js--starchart
  .starchart__product-layer-box
    //- Абсолютно спозиционированный, скейлящийся бэкграунд слой с продуктом
    .starchart__product-layer
      //- Продукт
      .starchart-product
        #celestial-map.starchart-product__map-box.js--starchart__product-map-box
        .starchart-product__title.js--starchart__product-title
        .starchart-product__subtitle.js--starchart__product-subtitle
        .starchart-product__icon.e-icon-heart
        .starchart-product__date.js--starchart__product-date
        .starchart-product__place.js--starchart__product-place

  .starchart__controls-box
      //- Элементы управления настройкой продукта
      .starchart-controls.js--e-accordion(
          data-e-accordion=JSON.stringify({
              activeItemExtraClass: 'starchart-controls__section_active',
          })
      )
          h1.starchart-controls__title Карта звездного неба
          p.starchart-controls__desc Создай свою карту звездного неба для самого яркого момента в жизни!

          //- Секции
          .starchart-controls__sections
              //- Секция "Событие"
              .starchart-controls__section.js--e-accordion__item.js--e-accordion__item_active
                  //- Секция "Событие". Тоглер
                  button.starchart-controls__section-title.js--e-accordion__item-btn(type="button")
                      span.starchart-controls__section-title-wrapper
                          span.starchart-controls__section-title-icon.e-icon-arrow
                          span.starchart-controls__section-title-text Событие

                  //- Секция "Событие". Контент
                  .starchart-controls__section-content.js--e-accordion__item-content
                      h4.starchart-controls__section-content-title.
                          Выберите место и дату особенного события, запечатлев именно Ваши звезды

                      //- Выбор места
                      .starchart-controls__field.starchart-controls__field_place
                        input.js--starchart__control-place-text(type="hidden" name="place_text")

                      //- Выбор даты
                      .starchart-controls__field.starchart-controls__field_date

                      //- Не устанавливать дату на карту
                      .starchart-controls__field.starchart-controls__field_no-date

              //- Секция "Текст"
              .starchart-controls__section.js--e-accordion__item
                  //- Секция "Текст". Тоглер
                  button.starchart-controls__section-title.js--e-accordion__item-btn(type="button")
                      span.starchart-controls__section-title-wrapper
                          span.starchart-controls__section-title-icon.e-icon-arrow
                          span.starchart-controls__section-title-text Текст

                  //- Секция "Текст". Контент
                  .starchart-controls__section-content.js--e-accordion__item-content
                      h4.starchart-controls__section-content-title Персонализируй свою карту Звездного неба

                      //- Заголовок
                      .starchart-controls__field.starchart-controls__field_title

                      //- Подзаголовок
                      .starchart-controls__field.starchart-controls__field_subtitle

              //- Секция "Дизайн"
              .starchart-controls__section.js--e-accordion__item
                  //- Секция "Дизайн". Тоглер
                  button.starchart-controls__section-title.js--e-accordion__item-btn(type="button")
                      span.starchart-controls__section-title-wrapper
                          span.starchart-controls__section-title-icon.e-icon-arrow
                          span.starchart-controls__section-title-text Дизайн

                  //- Секция "Дизайн". Контент
                  .starchart-controls__section-content.js--e-accordion__item-content
                      //- Цвет
                      .starchart-controls__field.starchart-controls__field_color

                      //- Формат
                      .starchart-controls__field.starchart-controls__field_format

                      //- Рамка
                      .starchart-controls__field.starchart-controls__field_border

          .starchart-controls__price

          .starchart-controls__submit-box

</template>

<script lang="ts">
// Vendor
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Demo',
});
</script>

<style lang="scss" scoped>

// Starchart
.starchart {
  display: flex;
  align-items: flex-start;
  height: 774px;
  position: relative;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;

  &__product-layer-box {
    position: absolute;
    z-index: 1;
  }

  &__product-layer {
    width: 1802px;
    height: 1423px;
    position: relative;
    background: url('/images/bg.jpg');
    transform: scale(0.548) translate3d(-12.5%, -17%, 0);
    transform-origin: 15% 20%;
  }

  &__controls-box {
    width: 422px;
    position: absolute;
    z-index: 2;
    top: 38px;
    right: 22px;
  }
}

// Starchart Product
.starchart-product {
  // Множитель перевода px в em
  $em-delimiter: 550;
  box-sizing: border-box;
  width: 704px;
  height: 988px;
  position: absolute;
  top: 120px;
  left: 134px;
  background: #f8f8f8;
  color: #000;
  font-size: 16px;
  text-align: center;
  box-shadow: 10px 10px 12px rgba(0, 0, 0, .75);

  // Рамка
  &::after {
    content: "";
    display: block;
    width: 723px;
    height: 1005px;
    position: absolute;
    top: -8px;
    left: -11px;
    background: no-repeat center transparent;
  }

  &__map-box#celestial-map {
    display: block;
    width: 550px !important;
    height: 550px !important;
    margin: 98px 0 0 75px;
    position: relative;
    border-radius: 50%;

    canvas {
      width: 100% !important;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__title {
    margin-top: 136px;
    position: relative;
    left: -2px;
    font-family: 'CentSchbkCyrillBTBold', serif;
    // font-size: em(575, $em-delimiter);
    // letter-spacing: em(1, $em-delimiter);
  }

  &__subtitle {
    margin-top: 7px;
    position: relative;
    left: -3px;
    font-family: 'CandaraLightItalic', serif;
    // font-size: em(442.5, $em-delimiter);
    // letter-spacing: em(3, $em-delimiter);
  }

  &__icon {
    margin: 45px 0 37px;
    position: relative;
    left: -1px;
    // font-size: em(410, $em-delimiter);
  }

  &__date {
    position: relative;
    left: -1px;
    font-family: 'AffectLight', serif;
    // font-size: em(465, $em-delimiter);
    // letter-spacing: em(.2, $em-delimiter);
    line-height: 1.25;
  }

  &__place {
    position: relative;
    left: -1px;
    font-family: 'AffectLight', serif;
    // font-size: em(465, $em-delimiter);
    // letter-spacing: em(.2, $em-delimiter);
    line-height: 1.25;
  }
}

// Starchart Controls
.starchart-controls {
  padding: 22px;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, .15);

  &__title {
    margin-bottom: 26px;
    color: #000;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  &__desc {
    // color: $color-black;
    font-size: 14px;
    letter-spacing: .02em;
    text-transform: uppercase;
  }

  &__section {
    // border-bottom: 1px solid $color-gray-1;

    // Разворот иконки в тоглере активной секции
    &_active {
      .starchart-controls__section-title-icon {
        transform-origin: center;
        transform: rotate(90deg);
      }
    }
  }

  &__section-title {
    display: block;
    width: 100%;
    padding: 22px 0;
    border: 0 none;
    background: transparent;
    -webkit-appearance: none;
  }

  &__section-title-wrapper {
    display: flex;
    align-items: center;
  }

  &__section-title-icon {
    // color: $color-primary-3;
    font-size: 19px;
  }

  &__section-title-text {
    padding-left: 13px;
    // color: $color-black;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .02em;
    text-transform: uppercase;
  }

  &__section-content-title {
    // @include typo-h3;
    margin: 0 0 15px;
    // color: $color-gray-2;
  }

  &__field {
    margin: 0 0 17px;

    &_color {
      .e-field__control {
        display: flex;
        justify-content: space-around;
      }
    }

    &_format {
      .e-field__control {
        display: flex;
      }

      .e-radio-btn {
        width: 50%;

        &:nth-child(1) {
          padding-right: 10px;
        }

        &:nth-child(2) {
          padding-left: 10px;
        }
      }
    }
  }

  &__price {
    padding: 20px 0;
    text-align: center;
  }

  // Применение transition для иконки в тоглере секции только после инициализации аккордеона.
  // Необходимо чтобы иконка не вертелась при загрузке страницы
  &.js--e-accordion_initialized {
    .starchart-controls__section-title-icon {
      transition: transform 500ms;
    }
  }
}

// Starchart JS
// Применение transition только после инициализации.
// Необходимо чтобы слой с продуктом не "плавал" при загрузке страницы
.starchart.starchart_initialized {
  .starchart__product-layer {
    transition: transform 500ms ease-in-out;
  }
}

// Приближение продукта при активной 2-ой секции ("Текст")
.starchart.starchart_product-zoom {
  .starchart__product-layer {
    transform: scale(1) translate3d(-12.5%, -42%, 0);
  }
}

// Скрыть дату на картине
.starchart.starchart_product-no-date {
  .starchart-product__date {
    display: none;
  }
}

// Скрыть заголовок на картине
.starchart_product-no-title {
  .starchart-product__title {
    color: transparent;
  }
}

// Скрыть подзаголовок на картине
.starchart_product-no-subtitle {
  .starchart-product__subtitle {
    color: transparent;
  }
}

// Скрыть рамку
.starchart[data-starchart-product-border="no-border"] {
  .starchart-product {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .2);

    &::after {
      display: none;
    }
  }
}

// Белая рамка
.starchart[data-starchart-product-border="border-w"] {
  .starchart-product {
    &::after {
      background-image: url('/images/border-w.png');
    }
  }
}

// Черная рамка
.starchart[data-starchart-product-border="border-b"] {
  .starchart-product {
    &::after {
      background-image: url('/images/border-b.png');
    }
  }
}

// Цвет: черный
.starchart[data-starchart-product-color="1"] {
  .starchart-product {
    &__map-box {
      background: linear-gradient(180deg, #000000 0%, #2d2d2d 100%);
    }

    &__icon {
      color: #f54646;
    }
  }
}

// Цвет: синий
.starchart[data-starchart-product-color="2"] {
  .starchart-product {
    &__map-box {
      background: linear-gradient(180deg, #1d2e66 0%, #3a55ac 100%);
    }

    &__icon {
      color: #231f20;
    }
  }
}

// Цвет: белый
.starchart[data-starchart-product-color="3"] {
  .starchart-product {
    &__map-box {
      background: #f8f8f8;
    }

    &__icon {
      color: #f54646;
    }
  }
}

// Цвет: фиолетовый
.starchart[data-starchart-product-color="4"] {
  .starchart-product {
    &__map-box {
      background: linear-gradient(139.4deg, #6b3986 17.78%, #d38eb5 84.01%);
    }

    &__icon {
      color: #231f20;
    }
  }
}

// Submit
.starchart_submit {
  pointer-events: none;
}

</style>
