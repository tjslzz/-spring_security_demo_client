import BaseApi from './base_api';

const CLIENT_SERVER_URI = '/api/client';

class PublicApi extends BaseApi {

  api_user_info () {
    return this.get((`${CLIENT_SERVER_URI}/user`));
  }
}

export default PublicApi;