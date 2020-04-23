import Vue from 'vue';
import Router from 'vue-router';
import Login from '../../components/Login';
import publicPage from './pageConfigs/public';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: 'dist',
  routes: [
    {
      path: '/',
      name: Login.name,
      component: Login,
    },
    ...publicPage,
  ],
});

export default router;