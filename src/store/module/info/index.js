export default {
  state: {
    info: null,
  },
  getters: {
    info: state => state.info,
  },
  mutations: {
    setInfo(state, payload) {
      console.log('ddddddđ',payload)
      state.info = payload;
    },
  },
  actions: {
    setInfo({ commit }, payload) {
      commit('setInfo', payload);
    },
  },
};
