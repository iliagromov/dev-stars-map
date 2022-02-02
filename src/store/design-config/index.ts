import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { DesignConfigStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const starmapVariant: Module<DesignConfigStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default starmapVariant;
