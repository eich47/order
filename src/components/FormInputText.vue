<template>
  <div class="wrapper">
    <b-form-input
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event)"
    >
    </b-form-input>
    <span v-if="isValid === false">Заполните поле</span>
  </div>
</template>

<script>
export default {
  name: "FormInputText",
  model: {
    prop: "value",
    event: "input"
  },
  data: function() {
    return {
      text: ""
    };
  },
  props: {
    placeholder: {
      type: String,
      required: true
    },
    isRequiredField: {
      type: Boolean,
      required: true
    },
    value: {
      type: String
    },
    isValid: {
      required: true,
      validator: prop => typeof prop === "boolean" || prop === null
    }
  }
};
</script>

<style scoped></style>
