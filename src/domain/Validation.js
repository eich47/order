export default class Validation {
  isEmptyString(value, isRequired) {
    if (isRequired === false) {
      return false;
    }

    return value.trim() === "";
  }
}
