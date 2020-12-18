<template>
  <div>
    <h2 class="title text-primary mb-3">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "FormSectionTitle",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 1rem;
}
</style>
