import Vue from 'vue';
import Router from 'vue-router';
import Login from '../../components/Login';
import routerConfig from './routerConfig';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: 'dist',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        titleKey: 'login',
        isIndex: true,
      },
    },
  ],
});
routerConfig(router);


export default router;