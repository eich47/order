import Validation from "@/domain/Validation";
import router from "@/router";
export default {
  state: () => ({
    cardNumber: {
      value: "",
      isValid: null,
      isRequired: true
    },
    isValidAllData: true
  }),
  mutations: {
    setIsValidAllData(state, payload) {
      state.isValidAllData = payload;
    },
    setCardNumber(state, payload) {
      state.cardNumber.value = payload;
    },
    setCardNumberIsValid(state, payload) {
      state.cardNumber.isValid = payload;
    }
  },
  actions: {
    changeCardNumber({ state, commit }, value) {
      const validator = new Validation();
      //удалим пробелы перед валидацией
      const clearedValue = value.replaceAll(/ /g, "");

      if (validator.isOnlyNumber(clearedValue, state.cardNumber.isRequired)) {
        commit("setCardNumberIsValid", true);
      } else {
        commit("setCardNumberIsValid", false);
      }
      //добавим пробелы после каждой четвертой цифры
      const editValue = value.replaceAll(/ /g, "");
      const valueArr = editValue.match(/.{1,4}/g) || [];
      const card = valueArr.join(" ");

      commit("setCardNumber", card);
    },
    submitPayment({ state, commit }) {
      {
        const fieldList = ["cardNumber"];
        fieldList.map(field => {
          if (
            state[field].isRequired === true &&
            state[field].isValid === null
          ) {
            const fieldFirstUpper = field[0].toUpperCase() + field.slice(1);
            commit(`set${fieldFirstUpper}IsValid`, false);
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
          router.push({ name: "configuration" });
        } else {
          console.log(
            `форма payment не отправлена: state.isValidAllData: ${state.isValidAllData}`
          );
        }
      }
    }
  }
};
