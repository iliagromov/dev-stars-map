// Vendor
import { computed, ref, watch } from 'vue';
import useStoreDesignConfig from './useStoreDesignConfig';

export default function useSvg() {
  const modelSvgIframe = ref<string>();
  const {
    // layoutFieldText,
    backgroundFilename,
    layoutFieldsText,
    layoutFieldTextSize,
    layoutFieldTextColor,
  } = useStoreDesignConfig();

  const svgText = computed(() => layoutFieldsText.value.map((text) => (text.innerText)));
  const bgSrc = computed(() => (backgroundFilename.value ? backgroundFilename.value : ''));
  const fontSizes = computed(() => layoutFieldTextSize.value.map((size) => (`${size.styles.size}em`)));
  const fontColors = computed(() => layoutFieldTextColor.value.map((color) => (
    `color: ${color.styles.color}`)));
  // каждый раз приходится парсить svg
  // можно сделать компьютед?
  // каждый раз запрашиваю bg и деалю парсиннг, может хранить svg в store?
  // шрифт в свг обновляется не сразу,..
  const renderSVG = async () => {
    const response = await fetch(bgSrc.value);
    const responseText = await response.text();
    const parser = new DOMParser();
    const svg = parser.parseFromString(responseText, 'image/svg+xml');

    svg.querySelectorAll('text').forEach((item, index:number) => {
      // fixme: layoutFieldsText.value[index]
      item.textContent = layoutFieldsText.value[index] ? layoutFieldsText.value[index].innerText : '';
      item.style.fontSize = layoutFieldsText.value[index] ? `${layoutFieldsText.value[index].styles.size}em` : '100em';
      item.style.fill = layoutFieldsText.value[index] ? layoutFieldsText.value[index].styles.color : '#000000';
      item.style.fontFamily = layoutFieldsText.value[index] ? layoutFieldsText.value[index].styles.font : 'AdventureC';
    });

    modelSvgIframe.value = svg.documentElement.outerHTML;
  };

  // watch изменения текста, шрифта, размера
  watch(backgroundFilename, renderSVG);
  // watch(layoutFieldText, renderSVG);
  watch(svgText, renderSVG);
  watch(fontSizes, renderSVG);
  watch(fontColors, renderSVG);

  return {
    modelSvgIframe,
  };
}
