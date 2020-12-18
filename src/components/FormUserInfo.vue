<template>
  <div>
    <b-form>
      <FormSectionTitle text="Recipient" />
      <FormInputText placeholder="Full Name" :isRequiredField="true" />
      <FormInputPhone
        placeholder="DayTime Phone"
        user-text-part1="For delivery"
        user-text-part2="questions only"
        :isRequiredField="true"
      />
      <FormSectionTitle text="Address" class="mt-3" />
      <FormInputText placeholder="Street Address" :isRequiredField="true" />
      <FormInputText
        placeholder="Apt, Suite, Gate Code (optional)"
        :isRequiredField="false"
      />
      <FormInputLocation placeholder="City" :is-required-field="true" />
      <b-container class="wrapper">
        <b-row>
          <b-col sm="6" class="pl-0">
            <FormSelect
              :options="[
                { value: null, text: 'Country' },
                { value: 1, text: 'Minsk' },
                { value: 2, text: 'London' }
              ]"
              :isRequiredField="true"
            />
          </b-col>
          <b-col sm="6" class="pr-0">
            <FormInputText
              placeholder="ZIP"
              :is-required-field="true"
            ></FormInputText>
          </b-col>
        </b-row>
      </b-container>

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
import FormInputLocation from "@/components/FormInputLocation";
import FormSelect from "@/components/FormSelect";
export default {
  name: "FormUserInfo",
  components: {
    FormSelect,
    FormInputLocation,
    FormInputPhone,
    FormInputText,
    FormSectionTitle
  }
};
</script>

<style scoped>
.wrapper + .wrapper {
  margin-top: 10px;
}
</style>
