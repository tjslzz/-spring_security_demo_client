import _ from 'lodash';
import i18n from '../mldd';

export default router => {
  router.beforeEach((to, from, next) => {
    document.title = i18n.t(`${to.meta.titleKey}`);
    if (_.isEmpty(to.name)) {
      next("/");
    }
    else {
      next();
    }
  });
};