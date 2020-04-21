import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/UserModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
  },
});
