import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/config/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null, //用户信息
    login: true //是否登录
  },
  mutations: {
    getUserInfo(state, info) {
      if (state.userInfo && state.userInfo.username !== info.username) {
        return;
      }
      if (!state.login) {
        return;
      }
      if (!info.message) {
        state.userInfo = {
          ...info
        };
      } else {
        state.userInfo = null;
      }
    }
  },
  actions: {
    //获取用户信息
    getUserInfo(context) {
      api
        .getUser()
        .then(res => {
          context.commit("getUserInfo", res);
        })
        .catch(err => {
          console.log("获取用户信息异常", err);
        });
    }
  }
});
