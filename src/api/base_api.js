import axios from 'axios';

class BaseApi {
  async get (url) {
    let res = await axios.get(url);
    return res.data;
  }


  async post (url, criteria) {
    let res = await axios.post(url, criteria);
    return res.data;
  }

  // async download (url, args) {
  //   return axios.post(url, args, {
  //     responseType: 'arraybuffer',
  //   });
  // }

}

export default BaseApi;