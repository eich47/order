<template>
  <div class="wrapper">
    <b-form-select v-model="selected" :options="options"> </b-form-select>
  </div>
</template>

<script>
export default {
  name: "FormSelect",
  data() {
    return {
      selected: null
    };
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    isRequiredField: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped></style>
