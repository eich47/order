import Validation from "@/domain/Validation";
import { API_KEY } from "@/api";
import router from "@/router";

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
    country: {
      value: [
        { value: null, text: "Country" },
        { value: 1, text: "Germany" },
        { value: 2, text: "France" },
        { value: 3, text: "Italy" },
        { value: 4, text: "Russia" },
        { value: 5, text: "Belarus" },
        { value: 6, text: "Spain" }
      ],
      selected: null,
      isValid: null,
      isRequired: true
    },
    zip: {
      value: "",
      isValid: null,
      isRequired: true
    },
    geo: {
      success: null,
      failure: null,
      process: false
    },
    //прошли ли данные в форме проверку
    isValidAllData: true
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
    },

    //геолокация
    setGeoProcess(state, payload) {
      state.geo.process = payload;
    },
    setGeoSuccess(state, payload) {
      state.geo.success = payload;
    },
    setGeoFailure(state, payload) {
      state.geo.failure = payload;
    },
    //County
    setIsValidCountry(state, payload) {
      state.country.isValid = payload;
    },
    setCountry(state, payload) {
      state.country.value = payload;
    },
    setSelectedCounty(state, payload) {
      state.country.selected = payload;
    },
    //установить статус проверки данных
    setIsValidAllData(state, payload) {
      state.isValidAllData = payload;
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
    },
    defineLocation({ commit, state }) {
      commit("setGeoProcess", true);
      if (!navigator.geolocation) {
        console.log("geo location fail");
        commit("setGeoFailure", true);
        commit("setGeoProcess", false);
        return false;
      }

      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      })
        .then(position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const host = "https://api.positionstack.com/v1/";
          const param = `reverse?access_key=${API_KEY}&query=${latitude},${longitude}&limit=1`;
          const url = `${host}${param}`;
          return fetch(url);
        })
        .then(result => {
          if (result.status !== 200) {
            return new Error("Не удалось определить местоположение");
          }

          return result.json();
        })
        .then(json => {
          const data = json.data[0];
          const city = data.region;
          const country = data.country;
          console.log(city, country);
          const locations = state.country.value;
          const searchedLocation = locations.find(value => {
            const countryStr = value.text;
            return (
              country.toLocaleLowerCase() === countryStr.toLocaleLowerCase()
            );
          });

          if (searchedLocation !== undefined) {
            commit("setSelectedCounty", searchedLocation.value);
            commit("setIsValidCountry", true);
          } else {
            console.log("not found country in country's list");
          }

          commit("setCity", city);
          commit("setIsValidCity", true);
          commit("setGeoSuccess", true);
        })
        .catch(error => {
          console.log(error);
          commit("setGeoFailure", true);
        })
        .finally(() => {
          commit("setGeoProcess", false);
        });
    },

    changeCountry({ commit, state }, value) {
      const validator = new Validation();
      const isRequired = state.country.isRequired;
      if (validator.isSelected(value, isRequired)) {
        commit("setIsValidCountry", true);
      } else {
        commit("setIsValidCountry", false);
      }

      commit("setSelectedCounty", value);
    },

    submitShipping({ state, commit }) {
      const fieldList = [
        "fullName",
        "phone",
        "address",
        "additions",
        "city",
        "country",
        "zip"
      ];
      fieldList.map(field => {
        console.log(field);
        if (state[field].isRequired === true && state[field].isValid === null) {
          const fieldFirstUpper = field[0].toUpperCase() + field.slice(1);
          commit(`setIsValid${fieldFirstUpper}`, false);
          commit("setIsValidAllData", false);
        }
      });

      fieldList.map(field => {
        if (state[field].isValid === false) {
          commit("setIsValidAllData", false);
        }
      });
      //разблокируем кнопку, чтобы можно было на ее нажать и тем самым запустить эту функцию
      setTimeout(() => {
        commit("setIsValidAllData", true);
      }, 1000);

      if (state.isValidAllData === true) {
        router.push({ name: "billingInfo" });
      } else {
        console.log(
          `форма не отправлена: state.isValidAllData: ${state.isValidAllData}`
        );
      }
    }
  },
  getters: {}
};
