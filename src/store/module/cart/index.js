export default {
  state: {
    cart: [],
    api_token: null,
    accessToken: null,
    userSearch: null,
  },
  getters: {
    cart: state => state.cart,
    userSearch: state => state.userSearch,
    api_token: state => state.api_token,
    accessToken: state => state.accessToken,
    totalProduct: state =>
      state.cart.reduce((quantity, item) => {
        return (quantity += parseInt(item.quantity));
      }, 0),
    totalPrice: state => {
      let total = 0;
      if (state.cart.length > 0) {
        let day = new Date();
        day = day.toISOString().slice(0, 10);
        day = Date.parse(day);
        total = state.cart.reduce((total, item) => {
          const product = item.product;
          let date_from = product.promotion_from || undefined;
          let date_to = product.promotion_to || undefined;
          const promotion_price = parseInt(product.promotion_price);
          const sale_price = parseInt(product.sale_price);
          if (date_from && date_to) {
            date_from = Date.parse(
              date_from
                .split('/')
                .reverse()
                .join('-'),
            );
            date_to = Date.parse(
              date_to
                .split('/')
                .reverse()
                .join('-'),
            );
            if (day >= date_from && day <= date_to) {
              total += item.quantity * promotion_price;
            } else {
              total += item.quantity * sale_price;
            }
          } else {
            total += item.quantity * sale_price;
          }
          return total;
        }, 0);
      }
      return total;
    },
  },
  mutations: {
    addToCart(state, payload) {
      const locationInCart = state.cart.findIndex(p => {
        return p.product.id === payload.id;
      });
      if (locationInCart === -1) {
        state.cart.push({ product: payload, quantity: 1 });
      } else {
        state.cart[locationInCart].quantity++;
      }
      const localStor = state.cart.map(p => ({ slug: p.product.slug, quantity: p.quantity }));
      localStorage.setItem('cart', JSON.stringify(localStor));
    },
    addAllCart(state, payload) {
      state.cart.push(payload);
    },
    addCartWithQuantity(state, payload) {
      if (state.cart.length > 0) {
        const inProduct = state.cart.findIndex(p => p.product.id === payload.product.id);
        if (inProduct < 0) {
          state.cart.push(payload);
        } else {
          if (typeof state.cart[inProduct].quantity !== 'number')
            state.cart[inProduct].quantity = parseInt(state.cart[inProduct].quantity);
          state.cart[inProduct].quantity += parseInt(payload.quantity);
        }
      } else {
        state.cart.push(payload);
      }
      const localStor = state.cart.map(p => ({ id: p.product.slug, quantity: p.quantity }));
      localStorage.setItem('cart', JSON.stringify(localStor));
    },
    removeFromCart(state, payload) {
      const locationInCart = state.cart.findIndex(p => {
        return p.product.id === payload.id;
      });

      if (state.cart[locationInCart].quantity <= 1) {
        state.cart.splice(locationInCart, 1);
      } else {
        state.cart[locationInCart].quantity--;
      }
      const localStor = state.cart.map(p => ({ id: p.product.slug, quantity: p.quantity }));
      localStorage.setItem('cart', JSON.stringify(localStor));
    },
    removeProduct(state, payload) {
      state.cart = state.cart.filter(p => {
        return p.product.id !== payload.id;
      });
      if (state.cart.length > 0) {
        const localStor = state.cart.map(p => ({
          id: p.product.slug,
          quantity: p.quantity,
        }));
        localStorage.setItem('cart', JSON.stringify(localStor));
      } else {
        localStorage.removeItem('cart');
      }
    },
    removeAllCart(state) {
      state.cart = [];
      localStorage.removeItem('cart');
    },
    removeSearch(state) {
      state.userSearch = null;
    },
    setSearch(state, payload) {
      state.userSearch = payload;
    },
    apiToken(state, payload) {
      state.api_token = payload;
    },
    removeToken(state) {
      state.api_token = null;
    },
    addAccessToken(state, payload) {
      state.accessToken = payload;
    },
    removeAccessToken(state) {
      state.accessToken = null;
    },
  },
  actions: {
    addCart({ commit }, payload) {
      commit('addToCart', payload);
    },
    removeCart({ commit }, payload) {
      commit('removeFromCart', payload);
    },
    removeProduct({ commit }, payload) {
      commit('removeProduct', payload);
    },
    addAllCart({ commit }, payload) {
      commit('addAllCart', payload);
    },
    removeAllCart({ commit }) {
      commit('removeAllCart');
    },
    removeSearch({ commit }) {
      commit('removeSearch');
    },
    addCartWithQuantity({ commit }, payload) {
      commit('addCartWithQuantity', payload);
    },
    setSearch({ commit }, payload) {
      commit('setSearch', payload);
    },
    apiToken({ commit }, payload) {
      commit('apiToken', payload);
    },
    removeToken({ commit }) {
      commit('removeToken');
    },
    addAccessToken({ commit }, payload) {
      commit('addAccessToken', payload);
    },
    removeAccessToken({ commit }) {
      commit('removeAccessToken');
    },
  },
};
