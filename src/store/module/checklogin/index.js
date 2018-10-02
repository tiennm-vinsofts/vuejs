export default {
  state: {
    routerLink: null,
  },
  getters: {
    routerLink: state => state.routerLink,
  },
  mutations: {
    setRouterLink(state, payload) {
      state.routerLink = payload;
    },
  },
  actions: {
    setRouterLink({ commit }, payload) {
      commit('setRouterLink', payload);
    },
  },
};
