<template lang="pug">
.starmap-product.layout5
  #celestial-map.starmap-product__stars(
    :style="starsStyleObject"
  )
  .starmap-product__bg(
    :style="bgStyleObject"
  )
  .starmap-product__title(v-html="textLayout")
  .starmap-product__subtitle ты - мой повод быть лучше
  .starmap-product__date 8 Февраля 2022
  .starmap-product__place Россия, Москва
  .starmap-product__name
    .starmap-product__name-value руслан
    .starmap-product__name-date 11.09.1989
  .starmap-product__name
    .starmap-product__name-value людмила
    .starmap-product__name-date 11.09.1989
</template>

<script lang="ts">
// Vendor
import { computed, defineComponent, onMounted } from 'vue';

// Composables
import useProduct from 'src/composables/useProduct';

export default defineComponent({
  name: 'Product',

  setup() {
    const {
      backgroundPath,
      starsShiftX,
      starsShiftY,
      textLayout,
      initProduct,
    } = useProduct();

    const textStyleObject = computed(() => ({
      color: '#000',
    }));

    const bgStyleObject = computed(() => ({
      backgroundImage: backgroundPath.value ? `url(${backgroundPath.value})` : '',
    }));

    const starsStyleObject = computed(() => {
      const translateX = `calc(-50% + ${starsShiftX.value}px)`;
      /** Для первого макета Y75% */
      const translateY = `calc(-75% + ${starsShiftY.value}px)`;

      return {
        transform: `translate3d(${translateX}, ${translateY}, 0)`,
      };
    });

    onMounted(async () => {
      await initProduct();
    });

    return {
      starsStyleObject,
      bgStyleObject,
      textStyleObject,
      textLayout,
    };
  },
});
</script>

<style lang="scss">
.starmap-product {
  width: $paper-format-a3-width;
  height: $paper-format-a3-height;
  transform: translate(-50%, -50%) scale(.25);
  transform-origin: center;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  background: #fff;

  &__stars {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
  }

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: no-repeat center;
    background-size: cover;
  }
  &__text{
    font-size: 6.04545em;
    letter-spacing: .00182em;
  }
  &__title,
  &__subtitle,
  &__date,
  &__place,
  &__name{
    position: absolute;
    text-align: center;
    color: #000;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &__date,
  &__place{
    font-family: AffectLight,serif;
    font-size: 3.94545em;
    letter-spacing: .00036em;
    line-height: 1.25;
  }

  &__title{
    font-size: 9em;
    bottom: 23%;
  }

  &__subtitle{
    font-size: 6em;
    bottom: 18%;
  }

  &__date{
    bottom: 10%;
  }
  &__place{
    bottom: 7.5%;
  }
}
.layout2{
  .starmap-product{
    &__title{
      font-size: 8em;
      bottom: 24%;
    }
    &__subtitle{
      font-size: 4em;
      bottom: 13%;
      border-bottom:1px solid;
      width: auto;
    }
    &__date,
    &__place{
      font-size: 2.94545em;
    }
    &__date{
      bottom: 9%;
    }
    &__place{
      bottom: 7%;
    }
  }
}
.layout3{
  .starmap-product{
    &__title,
    &__subtitle,
    &__date,
    &__place{
      color: #fff
    }
    &__title{

      font-size: 7em;
      bottom: 25%;

      &::after{
        content: '';
        position: absolute;
        bottom: -70px;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        width: 500px;
        height: 2px;
        background-color: #fff;
      }
    }
  }
}
.layout4{
  .starmap-product{
    &__title,
    &__subtitle,
    &__date,
    &__place{
      color: #fff
    }
    &__title{
      top: 5%;
      bottom: auto;
      font-size: 14em;
    }
  }
}

.layout5{
  .starmap-product{
    &__title,
    &__subtitle,
    &__date,
    &__place{
      color: #fff
    }
    &__title{
      width: auto;
      top: 6%;
      bottom: auto;
    }
    &__subtitle,
    &__place{
      display: none;
    }
    &__name{
      color: #fff;
      &:first-child{
        top: 45%
      }
      &:last-child{
        top: 80%
      }
      &-value{
        font-size: 6em;
        bottom: 18%;
      }
      &-date{
        font-size: 6em;
        bottom: 18%;
      }
    }
  }
}
// FIXME:
.starmap-product{
  &__name{
      &:first-child{
        top: 45%
      }
      &:last-child{
        top: 80%
      }
  }
}
</style>
