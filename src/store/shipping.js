import Validation from "@/domain/Validation";

export default {
  state: () => ({
    fullName: {
      value: "",
      isValid: null,
      isRequired: true
    },
    phone: {
      value: "",
      isValid: null,
      isRequired: true
    },
    address: {
      value: "",
      isValid: null,
      isRequired: true
    },
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
    },
    //phone
    setPhone(state, payload) {
      state.phone.value = payload;
    },
    setIsValidPhone(state, payload) {
      state.phone.isValid = payload;
    },
    //address
    setAddress(state, payload) {
      state.address.value = payload;
    },
    setIsValidAddress(state, payload) {
      state.address.isValid = payload;
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
    },
    changePhone({ commit, state }, fullNameValue) {
      const validator = new Validation();
      const isRequired = state.fullName.isRequired;
      if (validator.isEmptyString(fullNameValue, isRequired)) {
        commit("setIsValidPhone", false);
      } else {
        commit("setIsValidPhone", true);
      }

      commit("setPhone", fullNameValue);
    },

    changeAddress({ commit, state }, value) {
      const validator = new Validation();
      const isRequired = state.address.isRequired;
      if (validator.isEmptyString(value, isRequired)) {
        commit("setIsValidAddress", false);
      } else {
        commit("setIsValidAddress", true);
      }

      commit("setAddress", value);
    }
  },
  getters: {}
};
