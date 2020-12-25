export default {
  state: () => ({
    orderNumber: "",
    deliveryDay: "",
    loading: false,
    error: null
  }),
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setOrderNumber(state, payload) {
      state.orderNumber = payload;
    },
    setDeliveryDay(state, payload) {
      state.deliveryDay = payload;
    }
  },
  actions: {
    getReport({ commit }) {
      commit("setLoading", true);
      new Promise(resolve => {
        setTimeout(() => {
          //день доставки
          const now = new Date();
          const deliveryDay = now.setDate(now.getDate() + 3);
          const responseServer = { orderNumber: 1234568, deliveryDay };
          resolve(responseServer);
        }, 1000);
      })
        .then(response => {
          commit("setOrderNumber", response.orderNumber);
          commit("setDeliveryDay", response.deliveryDay);
        })
        .catch(error => {
          console.log(error);
          commit("setError", true);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    }
  }
};
