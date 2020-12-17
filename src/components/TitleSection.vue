<template>
  <div>
    <h1 class="title text-primary">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitleSection",
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
  font-size: 1.5rem;
}
</style>
