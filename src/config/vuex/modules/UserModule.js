import {USER_INFO,} from '../constants';
import {publicApi} from '../../../api/';

const state = {
  user_info: null,
};

const mutations = {
  [USER_INFO] (state, user_info) {
    if (user_info != null) {
      state.user_info = user_info;
    }
    else {
      state.user_info = null;
    }
  },
};

const actions = {
  async load_user_info ({commit}) {
    try {
      let data = await publicApi.api_user_info();
      commit(USER_INFO, data.data);
    }
    catch (e) {
      commit(USER_INFO, null);
      throw e;
    }
  },
  lear_user_info ({commit}) {
    commit(USER_INFO, null);
  },
};

const getters = {
  get_user_info: state => {
    return state.user_info == null ? null : state.user_info;
  },
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};
