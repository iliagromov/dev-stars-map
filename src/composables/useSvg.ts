// Vendor
import { computed, ref, watch } from 'vue';
import axios from 'axios';
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useSvg() {
  const modelSvgIframe = ref<string>();
  const {
    backgroundFilename,
    layoutFieldsText,
    layoutFieldTextFont,
    layoutFieldTextSize,
    layoutFieldTextColor,
    setSvgBlobUrl,
  } = useStoreDesignConfig();

  const svgText = computed(() => layoutFieldsText.value.map((text) => (text.innerText)));
  const bgSrc = computed(() => (backgroundFilename.value ? backgroundFilename.value : ''));
  const fontFamily = computed(() => layoutFieldTextFont.value.map((size) => size.styles.font));
  const fontSizes = computed(() => layoutFieldTextSize.value.map((size) => (`${size.styles.size}em`)));
  const fontColors = computed(() => layoutFieldTextColor.value.map((color) => (
    `color: ${color.styles.color}`)));
  // каждый раз приходится парсить svg
  // cкачивать svg
  // перобразовать обратно в блоб
  const renderSVG = async () => {
    if (bgSrc.value) {
      const xml = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
      const response = await axios.get(bgSrc.value);
      const responseText = (response.data as string);
      const parser = new DOMParser();
      const svg = parser.parseFromString(responseText, 'image/svg+xml');
      const canvas = document.querySelector('canvas').toDataURL();
      const img = document.createElement('image');
      img.setAttribute('href', canvas);
      svg.querySelector('svg g').appendChild(img);
      svg.querySelectorAll('text').forEach((item, index:number) => {
        // fixme: layoutFieldsText.value[index]
        item.textContent = layoutFieldsText.value[index] ? layoutFieldsText.value[index].innerText : '';
        item.style.fontSize = layoutFieldsText.value[index] ? `${layoutFieldsText.value[index].styles.size}em` : '100em';
        item.style.fill = layoutFieldsText.value[index] ? layoutFieldsText.value[index].styles.color : '#000000';
        item.style.fontFamily = layoutFieldsText.value[index] ? layoutFieldsText.value[index].styles.font : 'AdventureC';
      });

      modelSvgIframe.value = svg.documentElement.outerHTML;
      const outerSVG = xml + svg.documentElement.outerHTML;
      const blob = new Blob([outerSVG], { type: 'image/svg+xml' });
      const href = window.URL.createObjectURL(blob);
      await setSvgBlobUrl(href);
    }
  };

  watch(backgroundFilename, renderSVG);
  watch(svgText, renderSVG);
  watch(fontFamily, renderSVG);
  watch(fontSizes, renderSVG);
  watch(fontColors, renderSVG);

  return {
    modelSvgIframe,
  };
}
