<template>
  <div class="wrapper">
    <b-form-input type="text" :placeholder="placeholder" v-model="text">
    </b-form-input>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "FormInputText",
  data: function() {
    return {
      text: ""
    };
  },
  props: {
    placeholder: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
