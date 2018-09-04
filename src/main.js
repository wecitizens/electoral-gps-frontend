import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuexI18n from 'vuex-i18n';

import fr from './lang/fr-BE';
import nl from './lang/nl-BE';
import en from './lang/en-BE';

Vue.i18n.add('fr', fr);
Vue.i18n.add('nl', nl);
Vue.i18n.add('en', en);

// set the start locale to use
Vue.i18n.set('en');

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(vuexI18n.plugin, store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');