export default class Validation {
  isEmptyString(value, isRequired) {
    if (isRequired === false) {
      return true;
    }

    return value.trim() === "";
  }
}
