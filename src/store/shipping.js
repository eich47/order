import Validation from "@/domain/Validation";

export default {
  state: () => ({
    fullName: {
      value: "",
      isValid: null,
      isRequired: true
    },
    phone: "",
    address: "",
    additions: "",
    city: "",
    country: "",
    zip: ""
  }),
  mutations: {
    setFullName(state, payload) {
      state.fullName.value = payload;
    },
    setIsValidFullName(state, payload) {
      state.fullName.isValid = payload;
    }
  },
  actions: {
    changeFullName({ commit, state }, fullNameValue) {
      const validator = new Validation();
      const isRequired = state.fullName.isRequired;
      if (validator.isEmptyString(fullNameValue, isRequired)) {
        commit("setIsValidFullName", false);
      } else {
        commit("setIsValidFullName", true);
      }

      commit("setFullName", fullNameValue);
    }
  },
  getters: {}
};
