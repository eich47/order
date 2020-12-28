<template>
  <span class="error">
    {{ message }}
  </span>
</template>

<script>
export default {
  name: "FormErrorMessage",
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
