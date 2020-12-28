<template>
  <div class="wrapper">
    <div class="image-wrapper">
      <b-form-input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event)"
      >
      </b-form-input>
      <img
        class="location-icon"
        :src="src"
        alt="location icon"
        @click="$emit('click')"
      />
    </div>
    <FormErrorMessage v-if="isValid === false" message="Заполните поле" />
    <span v-if="errorOnDefineGeo === false"
      >Не удалось определить местоположение</span
    >
    <span v-if="inProcessDefineGeo === true" class="progress-location"
      >Пробуем определить местоположение...</span
    >
  </div>
</template>

<script>
import FormErrorMessage from "@/components/FormErrorMessage";
export default {
  name: "FormInputLocation",
  components: { FormErrorMessage },
  model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {
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
    },
    value: {
      type: String
    },
    isValid: {
      required: true,
      validator: prop => typeof prop === "boolean" || prop === null
    },
    errorOnDefineGeo: {
      type: Boolean,
      validator: prop => typeof prop === "boolean" || prop === null
    },
    inProcessDefineGeo: {
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
  cursor: pointer;
}
.progress-location {
  color: green;
}
</style>
