<template>
  <div class="wrapper phone">
    <div class="d-flex">
      <div class="col-6 part1">
        <b-form-input
          type="tel"
          v-model="tel"
          :placeholder="placeholder"
        ></b-form-input>
      </div>
      <div class="col-6 part2">
        <p class="text">
          {{ userTextPart1 }} <span>{{ userTextPart2 }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInputPhone",
  data() {
    return {
      tel: ""
    };
  },
  props: {
    placeholder: {
      type: String,
      required: true
    },
    userTextPart1: {
      type: String,
      required: true
    },
    userTextPart2: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.part1 {
  padding-left: 0;
}
.part2 {
  padding-right: 0;
  display: flex;
  align-items: center;
}
.part2 .text {
  font-size: 0.8rem;
  margin-bottom: 0;
}
.part2 .text span {
  display: block;
}
</style>
