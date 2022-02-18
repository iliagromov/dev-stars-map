import { CelestialConfig } from 'd3-celestial/celestial';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DesignConfigStateInterface } from './state';

const actions: ActionTree<DesignConfigStateInterface, StateInterface> = {
  setDefaultStars({ commit }) {
    commit('setDefaultStars');
  },

  setDefaultLayoutField({ commit }) {
    commit('setDefaultLayoutField');
  },

  unsetDefaultLayoutField({ commit }) {
    commit('unsetDefaultLayoutField');
  },

  setBackgroundFilename({ commit }, payload: number) {
    commit('setBackgroundFilename', payload);
  },

  setLayoutField({ commit }, payload: object) {
    commit('setLayoutField', payload);
  },

  setLayoutFieldText({ commit }, payload: object) {
    commit('setLayoutFieldText', payload);
  },

  setLayoutFieldTextFont({ commit }, payload: object) {
    commit('setLayoutFieldTextFont', payload);
  },

  setLayoutFieldTextSize({ commit }, payload: object) {
    commit('setLayoutFieldTextSize', payload);
  },

  setLayoutFieldTextColor({ commit }, payload: object) {
    commit('setLayoutFieldTextColor', payload);
  },

  unsetBackgroundFilename({ commit }) {
    commit('unsetBackgroundFilename');
  },

  setShiftX({ commit }, payload: number) {
    commit('setShiftX', payload);
  },

  setShiftY({ commit }, payload: number) {
    commit('setShiftY', payload);
  },

  setCelestialWidth({ commit }, payload: number) {
    commit('setCelestialWidth', payload);
  },

  setCelestialProjection({ commit }, payload: CelestialConfig['projection']) {
    commit('setCelestialProjection', payload);
  },

  setCelestialTransform({ commit }, payload: CelestialConfig['transform']) {
    commit('setCelestialTransform', payload);
  },

  setCelestialZoomlevel({ commit }, payload: CelestialConfig['zoomlevel']) {
    commit('setCelestialZoomlevel', payload);
  },

  setCelestialZoomextend({ commit }, payload: CelestialConfig['zoomextend']) {
    commit('setCelestialZoomextend', payload);
  },

  setCelestialStarsShow({ commit }, payload: CelestialConfig['stars']['show']) {
    commit('setCelestialStarsShow', payload);
  },

  setCelestialStarsLimit({ commit }, payload: CelestialConfig['stars']['limit']) {
    commit('setCelestialStarsLimit', payload);
  },

  setCelestialStarsColors({ commit }, payload: CelestialConfig['stars']['colors']) {
    commit('setCelestialStarsColors', payload);
  },

  setCelestialStarsStyleFill({ commit }, payload: CelestialConfig['stars']['style']['fill']) {
    commit('setCelestialStarsStyleFill', payload);
  },

  setCelestialStarsStyleOpacity(
    { commit },
    payload: CelestialConfig['stars']['style']['opacity'],
  ) {
    commit('setCelestialStarsStyleOpacity', payload);
  },

  setCelestialStarsSize({ commit }, payload: CelestialConfig['stars']['size']) {
    commit('setCelestialStarsSize', payload);
  },

  setCelestialStarsDesignation({ commit }, payload: CelestialConfig['stars']['designation']) {
    commit('setCelestialStarsDesignation', payload);
  },

  setCelestialStarsDesignationLimit(
    { commit },
    payload: CelestialConfig['stars']['designationLimit'],
  ) {
    commit('setCelestialStarsDesignationLimit', payload);
  },

  setCelestialStarsDesignationType(
    { commit },
    payload: CelestialConfig['stars']['designationType'],
  ) {
    commit('setCelestialStarsDesignationType', payload);
  },

  setCelestialStarsDesignationStyleFontFamily({ commit, getters }, payload: string) {
    // eslint-disable-next-line
    const fontSize = getters['celestialStarsDesignationStyleFontSize'] as number;
    const font = `${fontSize}px ${payload}`;
    commit('setCelestialStarsDesignationStyleFont', font);
  },

  setCelestialStarsDesignationStyleFill(
    { commit },
    payload: CelestialConfig['stars']['designationStyle']['fill'],
  ) {
    commit('setCelestialStarsDesignationStyleFill', payload);
  },

  setCelestialStarsDesignationStyleFontSize({ commit, getters }, payload: string) {
    // eslint-disable-next-line
    const fontFamily = getters['celestialStarsDesignationStyleFontFamily'] as string;
    const font = `${payload}px ${fontFamily}`;
    commit('setCelestialStarsDesignationStyleFont', font);
  },

  setCelestialStarsDesignationStylePosition({ commit }, payload: [
    CelestialConfig['stars']['designationStyle']['align'],
    CelestialConfig['stars']['designationStyle']['baseline'],
  ]) {
    commit('setCelestialStarsDesignationStyleAlign', payload[0]);
    commit('setCelestialStarsDesignationStyleBaseline', payload[1]);
  },
};

export default actions;
