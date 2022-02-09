import { CelestialConfig } from 'd3-celestial/celestial';
import { MutationTree } from 'vuex';
import { FONTS_LIST } from 'src/config';
import { DesignConfigStateInterface } from './state';

const mutation: MutationTree<DesignConfigStateInterface> = {
  setDefaultStars(state) {
    state.stars = {
      shiftX: 0,
      shiftY: 0,
      celestial: {
        width: 2339,
        projection: 'mercator',
        transform: 'equatorial',
        geopos: [55.7558, 37.6173],
        zoomlevel: 1,
        zoomextend: 10,
        interactive: false,
        controls: false,
        datapath: '/vendor/d3-celestial/data/',
        stars: {
          show: true,
          limit: 5.2,
          colors: false,
          style: {
            fill: '#fff',
            opacity: 1,
          },
          designation: true,
          designationLimit: 2.5,
          designationType: 'name',
          designationStyle: {
            fill: '#fff',
            font: `60px ${FONTS_LIST[0]}`,
            align: 'left',
            baseline: 'top',
          },
          size: 8,
          exponent: 0,
          propername: false,
        },
        dsos: {
          show: false,
          namesType: 'name',
          nameStyle: {
            fill: '#cccccc',
            font: '11px Helvetica, Arial, serif',
            align: 'left',
            baseline: 'top',
          },
          nameLimit: 6,
        },
        constellations: {
          names: false,
          lineStyle: {
            stroke: '#fff',
            width: 1,
            opacity: 0.6,
          },
        },
        mw: {
          show: false,
        },
        lines: {
          graticule: {
            show: false,
          },
          equatorial: {
            show: false,
          },
          ecliptic: {
            show: false,
          },
          galactic: {
            show: false,
          },
          supergalactic: {
            show: false,
          },
        },
        background: {
          fill: 'transparent',
        },
      },
    };
  },

  setBackgroundFilename(state, payload: string) {
    state.background.filename = payload;
  },

  setTextEditor(state, payload: string) {
    state.textEditor.innerText = payload;
  },

  unsetBackgroundFilename(state) {
    state.background.filename = null;
  },

  setShiftX(state, payload: number) {
    state.stars.shiftX = payload;
  },

  setShiftY(state, payload: number) {
    state.stars.shiftY = payload;
  },

  setCelestialWidth(state, payload: number) {
    state.stars.celestial.width = payload;
  },

  setCelestialProjection(state, payload: CelestialConfig['projection']) {
    state.stars.celestial.projection = payload;
  },

  setCelestialTransform(state, payload: CelestialConfig['transform']) {
    state.stars.celestial.transform = payload;
  },

  setCelestialZoomlevel(state, payload: CelestialConfig['zoomlevel']) {
    state.stars.celestial.zoomlevel = payload;
  },

  setCelestialZoomextend(state, payload: CelestialConfig['zoomextend']) {
    state.stars.celestial.zoomextend = payload;
  },

  setCelestialStarsShow(state, payload: CelestialConfig['stars']['show']) {
    state.stars.celestial.stars.show = payload;
  },

  setCelestialStarsLimit(state, payload: CelestialConfig['stars']['limit']) {
    state.stars.celestial.stars.limit = payload;
  },

  setCelestialStarsColors(state, payload: CelestialConfig['stars']['colors']) {
    state.stars.celestial.stars.colors = payload;
  },

  setCelestialStarsStyleFill(state, payload: CelestialConfig['stars']['style']['fill']) {
    state.stars.celestial.stars.style.fill = payload;
  },

  setCelestialStarsStyleOpacity(state, payload: CelestialConfig['stars']['style']['opacity']) {
    state.stars.celestial.stars.style.opacity = payload;
  },

  setCelestialStarsSize(state, payload: CelestialConfig['stars']['size']) {
    state.stars.celestial.stars.size = payload;
  },

  setCelestialStarsDesignation(state, payload: CelestialConfig['stars']['designation']) {
    state.stars.celestial.stars.designation = payload;
  },

  setCelestialStarsDesignationLimit(
    state,
    payload: CelestialConfig['stars']['designationLimit'],
  ) {
    state.stars.celestial.stars.designationLimit = payload;
  },

  setCelestialStarsDesignationType(
    state,
    payload: CelestialConfig['stars']['designationType'],
  ) {
    state.stars.celestial.stars.designationType = payload;
  },

  setCelestialStarsDesignationStyleFont(
    state,
    payload: CelestialConfig['stars']['designationStyle']['font'],
  ) {
    state.stars.celestial.stars.designationStyle.font = payload;
  },

  setCelestialStarsDesignationStyleFill(
    state,
    payload: CelestialConfig['stars']['designationStyle']['fill'],
  ) {
    state.stars.celestial.stars.designationStyle.fill = payload;
  },

  setCelestialStarsDesignationStyleAlign(
    state,
    payload: CelestialConfig['stars']['designationStyle']['align'],
  ) {
    state.stars.celestial.stars.designationStyle.align = payload;
  },

  setCelestialStarsDesignationStyleBaseline(
    state,
    payload: CelestialConfig['stars']['designationStyle']['baseline'],
  ) {
    state.stars.celestial.stars.designationStyle.baseline = payload;
  },
};

export default mutation;
