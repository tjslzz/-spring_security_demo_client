import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import zhMessage from './zh-message';
import enMessage from './en-message';
import _ from 'lodash';

Vue.use(VueI18n);
//change months wording as english version
zhLocale.el.datepicker.months = enLocale.el.datepicker.months;

const messages = {
  en: _.assignIn({}, enMessage, enLocale),
  'zh-cn': _.assignIn({}, zhMessage, zhLocale),
};

export default new VueI18n({
  locale: navigator.language != null && navigator.language.indexOf('zh') !== -1 ? 'zh-cn' : 'en',
  messages,
});