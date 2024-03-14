import { check } from '@/request/http';
import { gotoLogin } from '@/utils/nav';

/** @type {import('vuex').Module} */
const UserStore = {
  state: {
    user: {},
  },
  actions: {
    async getUser({commit}) {
      const resp = await check()
      if(resp.result === 0) {
        commit('setUser', resp.user)
        return resp.user
      }
      else {
        gotoLogin(encodeURIComponent(location.href))
      }
    }
  },
  mutations:{
    setUser(state,user) {
      state.user = user
    }
  },
  namespaced: true,
};
export default UserStore;
