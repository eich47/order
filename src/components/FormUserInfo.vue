<template>
  <div>
    <b-form>
      <FormSectionTitle text="Recipient" />
      <FormInputText placeholder="Full Name" />
      <FormInputPhone
        placeholder="DayTime Phone"
        user-text-part1="For delivery"
        user-text-part2="questions only"
      />
      <b-button class="mt-5" type="submit" variant="primary">
        Continue
      </b-button>
    </b-form>
  </div>
</template>

<script>
import FormSectionTitle from "@/components/FormSectionTitle";
import FormInputText from "@/components/FormInputText";
import FormInputPhone from "@/components/FormInputPhone";
export default {
  name: "FormUserInfo",
  components: { FormInputPhone, FormInputText, FormSectionTitle }
};
</script>

<style scoped>
.wrapper + .wrapper {
  margin-top: 10px;
}
</style>
