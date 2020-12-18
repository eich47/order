<template>
  <div class="wrapper">
    <div class="image-wrapper">
      <b-form-input type="text" :placeholder="placeholder" v-model="text">
      </b-form-input>
      <img class="location-icon" :src="src" alt="location icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInputLocation",
  data() {
    return {
      text: "",
      src: require("@/assets/ico/detect_geolocation.png")
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
    }
  }
};
</script>

<style scoped>
input {
  padding-right: 50px;
}
.image-wrapper {
  position: relative;
}
.location-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
}
</style>
