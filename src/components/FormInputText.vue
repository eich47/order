<template>
  <div class="wrapper">
    <b-form-input
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event)"
    >
    </b-form-input>
    <FormErrorMessage v-if="isValid === false" message="Заполните поле" />
  </div>
</template>

<script>
import FormErrorMessage from "@/components/FormErrorMessage";
export default {
  name: "FormInputText",
  components: { FormErrorMessage },
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
