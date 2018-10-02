import Vue from 'vue';
import axios from 'axios';
import DeviceStateTracker from 'seng-device-state-tracker';
import VueExposePlugin from '../util/VueExposePlugin';
import { URLNames, PropertyNames, VariableNames } from '../data/enum/configNames';
import RouteNames from '../data/enum/RouteNames';
import RoutePaths from '../data/enum/RoutePaths';
import { createPath } from '../util/routeUtils';
import Params from '../data/enum/Params';
import { getValue } from '../util/injector';
import { CONFIG_MANAGER, GATEWAY } from '../data/Injectables';
import localeLoader from '../util/localeLoader';
import { mediaQueries, deviceState } from '../data/mediaQueries.json';
import api from '../data';
import _API, { URL_IMAGE } from '../data/enum/API';
import $ from 'jquery';
import {
  formatCurency,
  formatDate,
  parseProduct,
  parseListProduct,
  parseSource,
  truncateString,
  removeUrl,
  validateEmail,
} from '../util';
const initPlugins = () => {
  const configManager = getValue(CONFIG_MANAGER);

  // expose objects to the Vue prototype for easy access in your vue templates and components
  Vue.use(VueExposePlugin, {
    $config: configManager,
    $gateway: getValue(GATEWAY),
    formatCurency,
    $http: axios,
    $api: api,
    $versionRoot: configManager.getVariable(VariableNames.VERSIONED_STATIC_ROOT),
    $staticRoot: configManager.getVariable(VariableNames.STATIC_ROOT),
    URLNames,
    $,
    _API,
    URL_IMAGE,
    PropertyNames,
    VariableNames,
    RouteNames,
    RoutePaths,
    Params,
    createPath,
    $deviceStateTracker: new DeviceStateTracker({
      mediaQueries,
      deviceState,
      showStateIndicator: process.env.NODE_ENV !== 'production',
    }),
    DeviceState: deviceState,
    
    formatDate,
    parseProduct,
    parseListProduct,
    parseSource,
    truncateString,
    removeUrl,
    validateEmail,
  });
};

const waitForLocale = store =>
  new Promise(resolve => {
    if (localeLoader.isLoaded(store.getters.currentLanguage.code)) {
      resolve();
    } else {
      localeLoader.setLoadCallback(locale => {
        if (locale === store.getters.currentLanguage.code) {
          resolve();
        }
      });
    }
  });

const startUp = store => {
  // Initialise plugins
  initPlugins();

  const configManager = getValue(CONFIG_MANAGER);

  // Add async methods to the Promise.all array
  return Promise.all([
    configManager.getVariable(VariableNames.LOCALE_ENABLED)
      ? waitForLocale(store)
      : Promise.resolve(),
  ]);
};

export default startUp;
