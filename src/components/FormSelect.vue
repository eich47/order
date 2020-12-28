<template>
  <div class="wrapper">
    <b-form-select
      :options="options"
      :value="value"
      @change="$emit('change', $event)"
    >
    </b-form-select>
    <FormErrorMessage v-if="isValid === false" message="Заполните поле" />
  </div>
</template>

<script>
import FormErrorMessage from "@/components/FormErrorMessage";
export default {
  name: "FormSelect",
  components: {
    FormErrorMessage
  },
  model: {
    prop: "value",
    event: "change"
  },
  // data() {
  //   return {
  //     selected: null,
  //     sdf: 1
  //   };
  // },
  props: {
    options: {
      type: Array,
      required: true
    },
    isRequiredField: {
      type: Boolean,
      required: true
    },
    value: {
      validator: prop => typeof prop === "number" || prop === null
    },
    isValid: {
      required: true,
      validator: prop => typeof prop === "boolean" || prop === null
    }
  }
};
</script>

<style scoped></style>
