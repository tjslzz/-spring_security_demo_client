import BaseApi from './base_api';

const AUTH_SERVER_URI = 'auth.server.com:8001';
const CLIENT_SERVER_URI = 'client.server.com:8003';

class PublicApi extends BaseApi {

  api_user_info () {
    return this.get((`${CLIENT_SERVER_URI}/user/me`));
  }

  api_login (data) {
    return this.post(`${AUTH_SERVER_URI}/login`, data);
  }
}

export default PublicApi;