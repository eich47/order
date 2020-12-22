export default class Validation {
  isEmptyString(value, isRequired) {
    if (isRequired === false) {
      return false;
    }

    return value.trim() === "";
  }

  isOnlyNumber(value, isRequired) {
    if (isRequired === false) {
      return true;
    }

    const re = /^\d+$/g;
    return new RegExp(re).test(value);
  }

  isSelected(value, isRequired) {
    if (isRequired === false) {
      return true;
    }
    return value !== null;
  }
}
