export default {
  state: {
    user: null,
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit('setUser', payload);
    },
    removeUser({ commit }) {
      commit('removeUser');
    },
  },
};
