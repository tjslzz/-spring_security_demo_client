import axios from 'axios';
import router from './router';

axios.interceptors.response.use(resp => {
  return resp;
}, err => {
  if (err.response && err.response.status === 401) {
    router.push('/');
    window.location.reload();
  }
  else if (err.response && err.response.status === 403) {
    router.push('/');
  }
  return Promise.reject(err);
});

axios.defaults.withCredentials=true;