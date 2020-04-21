import axios from 'axios';
import router from './router';

axios.interceptors.response.use(resp => {
  return resp;
}, err => {
  if (err.response && err.response.status === 401 && err.response.data.data === 'error.accessDenied') {
    router.push('/');
    window.location.reload();
  }
  else if (err.response && err.response.status === 403 && err.response.data.data === 'error.noPermission') {
    router.push('/');
  }
  return Promise.reject(err);
});