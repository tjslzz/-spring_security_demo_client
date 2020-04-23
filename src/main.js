import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import i18n from './config/mldd';
import router from './config/router';
import store from './config/vuex';
import 'element-ui/lib/theme-chalk/index.css';

require('./config/axiosConfig');

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
