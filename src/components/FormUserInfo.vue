<template>
  <div>
    <b-form>
      <FormSectionTitle text="Recipient" />
      <b-button class="mt-5" type="submit" variant="primary">
        Continue
      </b-button>
    </b-form>
  </div>
</template>

<script>
import FormSectionTitle from "@/components/FormSectionTitle";
export default {
  name: "FormUserInfo",
  components: { FormSectionTitle }
};
</script>

<style scoped></style>
