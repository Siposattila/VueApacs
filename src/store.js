import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null,
    isLoggedIn: false
  },
  mutations: {
    USER_LOGIN(state, user) {
      state.isLoggedIn = true;
      state.userData = user;
    }
  },
  actions: {
    login({ commit }, user) {
      commit("USER_LOGIN", user)
    }
  },
  getters: {
    getUser(state) {
      return state.userData;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
})
