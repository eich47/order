<template>
  <div>
    <b-form>
      <FormSectionTitle text="Recipient" />
      <FormInputText placeholder="Full Name" />
      <b-button class="mt-5" type="submit" variant="primary">
        Continue
      </b-button>
    </b-form>
  </div>
</template>

<script>
import FormSectionTitle from "@/components/FormSectionTitle";
import FormInputText from "@/components/FormInputText";
export default {
  name: "FormUserInfo",
  components: { FormInputText, FormSectionTitle }
};
</script>

<style scoped>
.wrapper + .wrapper {
  margin-top: 10px;
}
</style>
