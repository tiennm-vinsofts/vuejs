import 'modernizr';
import Vue from 'vue';
import VueI18nManager from 'vue-i18n-manager';
import { sync } from 'vuex-router-sync';

import './asset/style/screen.scss';

import './settings/settings';
import directive from './directive/directive';
import component from './component/component';
import getRouter from './router/router';
import getStore from './store/store';
import startUp from './control/startUp';
import getLocaleConfig from './config/localeConfig';
import setupInjects from './util/setupInjects';
import localeLoader from './util/localeLoader';
import App from './App';
import filter from './filter/filter';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// register filters globally
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));

// register directives globally
Object.keys(directive).forEach(key => Vue.directive(key, directive[key]));

// register components globally
Object.keys(component).forEach(key => Vue.component(key, component[key]));

setupInjects();

if (window.webpackPublicPath) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.webpackPublicPath;
}

const router = getRouter();
const store = getStore();
const localeConfig = getLocaleConfig();

if (localeConfig.localeEnabled) {
  Vue.use(VueI18nManager, {
    store,
    router: localeConfig.localeRoutingEnabled ? router : null,
    config: localeConfig.config,
    proxy: localeLoader,
  });

  Vue.initI18nManager();
}

//owlCarousel
import '../staticRoot/asset/lib/OwlCarousel/dist/owl.carousel';
// import 'owl.carousel';
import '../staticRoot/asset/lib/OwlCarousel/dist/assets/owl.carousel.css';
import '../staticRoot/asset/lib/OwlCarousel/dist/assets/owl.theme.default.min.css';
// sync router data to store
sync(store, router);

// Init new vue app
const app = new Vue({
  router,
  store,
  render: createElement => createElement(App),
});

// Mount the app after startUp
startUp(store).then(() => app.$mount('#app'));
