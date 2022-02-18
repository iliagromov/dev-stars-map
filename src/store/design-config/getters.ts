import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DesignConfigStateInterface } from './state';

const getters: GetterTree<DesignConfigStateInterface, StateInterface> = {
  backgroundFilename({ background }) {
    return background.filename;
  },

  layoutFields({ layoutFieldsText }) {
    return layoutFieldsText;
  },

  layoutFieldText({ layoutFieldsText }) {
    return layoutFieldsText;
  },

  layoutFieldTextSize({ layoutFieldsText }) {
    return layoutFieldsText;
  },

  layoutFieldTextColor({ layoutFieldsText }) {
    return layoutFieldsText;
  },

  layoutFieldTextFont({ layoutFieldsText }) {
    return layoutFieldsText;
  },

  shiftX({ stars }) {
    return stars.shiftX;
  },

  shiftY({ stars }) {
    return stars.shiftY;
  },

  celestial({ stars }) {
    return stars.celestial;
  },

  celestialWidth({ stars }) {
    return stars.celestial?.width;
  },

  celestialProjection({ stars }) {
    return stars.celestial?.projection;
  },

  celestialTransform({ stars }) {
    return stars.celestial?.transform;
  },

  celestialZoomlevel({ stars }) {
    return stars.celestial?.zoomlevel;
  },

  celestialZoomextend({ stars }) {
    return stars.celestial?.zoomextend;
  },

  celestialStarsShow({ stars }) {
    return stars.celestial?.stars?.show;
  },

  celestialStarsLimit({ stars }) {
    return stars.celestial?.stars?.limit;
  },

  celestialStarsColors({ stars }) {
    return stars.celestial?.stars?.colors;
  },

  celestialStarsStyleFill({ stars }) {
    return stars.celestial?.stars?.style.fill;
  },

  celestialStarsStyleOpacity({ stars }) {
    return stars.celestial?.stars?.style.opacity;
  },

  celestialStarsSize({ stars }) {
    return stars.celestial?.stars?.size;
  },

  celestialStarsDesignation({ stars }) {
    return stars.celestial?.stars?.designation;
  },

  celestialStarsDesignationLimit({ stars }) {
    return stars.celestial?.stars?.designationLimit;
  },

  celestialStarsDesignationType({ stars }) {
    return stars.celestial?.stars?.designationType;
  },

  celestialStarsDesignationStyleFontFamily({ stars }) {
    const styleFont = stars.celestial?.stars?.designationStyle.font;

    if (!styleFont) return null;
    return styleFont.substring(styleFont?.indexOf('px') + 2).trim();
  },

  celestialStarsDesignationStyleFontSize({ stars }) {
    const styleFont = stars.celestial?.stars?.designationStyle.font;

    if (!styleFont) return null;
    return parseInt(styleFont.substring(0, styleFont?.indexOf('px')).trim(), 10);
  },

  celestialStarsDesignationStyleFill({ stars }) {
    return stars.celestial?.stars?.designationStyle.fill;
  },

  celestialStarsDesignationStylePosition({ stars }) {
    return [
      stars.celestial?.stars?.designationStyle.align,
      stars.celestial?.stars?.designationStyle.baseline,
    ];
  },
};

export default getters;
