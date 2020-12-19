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
    additions: {
      value: "",
      isValid: null,
      isRequired: false
    },
    city: {
      value: "",
      isValid: null,
      isRequired: true
    },
    country: "",
    zip: {
      value: "",
      isValid: null,
      isRequired: true
    }
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
    },
    //Additions
    setAdditions(state, payload) {
      state.additions.value = payload;
    },
    setIsValidAdditions(state, payload) {
      state.additions.isValid = payload;
    },
    //Zip
    setZip(state, payload) {
      state.zip.value = payload;
    },
    setIsValidZip(state, payload) {
      state.zip.isValid = payload;
    },
    //City
    setCity(state, payload) {
      state.city.value = payload;
    },
    setIsValidCity(state, payload) {
      state.city.isValid = payload;
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
    changePhone({ commit, state }, phoneValue) {
      const validator = new Validation();
      const isRequired = state.phone.isRequired;
      if (validator.isEmptyString(phoneValue, isRequired)) {
        commit("setIsValidPhone", false);
      } else {
        commit("setIsValidPhone", true);
      }

      commit("setPhone", phoneValue);
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
    },
    changeAdditions({ commit, state }, value) {
      const validator = new Validation();
      const isRequired = state.additions.isRequired;
      if (validator.isEmptyString(value, isRequired)) {
        commit("setIsValidAdditions", false);
      } else {
        commit("setIsValidAdditions", true);
      }

      commit("setAdditions", value);
    },
    changeZip({ commit, state }, value) {
      const validator = new Validation();
      const isRequired = state.zip.isRequired;
      if (!validator.isOnlyNumber(value, isRequired)) {
        commit("setIsValidZip", false);
      } else {
        commit("setIsValidZip", true);
      }

      commit("setZip", value);
    },
    changeCity({ commit, state }, value) {
      const validator = new Validation();
      const isRequired = state.city.isRequired;
      if (validator.isEmptyString(value, isRequired)) {
        commit("setIsValidCity", false);
      } else {
        commit("setIsValidCity", true);
      }

      commit("setCity", value);
    }
  },
  getters: {}
};
