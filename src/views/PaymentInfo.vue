<template>
  <div>
    <TitleSection text="Payment" />
    <b-form @submit.prevent="onSubmit">
      <FormSectionTitle text="Card Number" class="mt-3" />
      <FormInputText
        placeholder="XXXX XXXX XXXX XXXX XXXXX"
        :isRequiredField="this.$store.state.payment.cardNumber.isRequired"
        v-model.trim="cardNumber"
        :isValid="this.$store.state.payment.cardNumber.isValid"
      />
      <div class="col-6 pl-0 mt-3">
        <b-button block type="submit" variant="primary" :disabled="false">
          Pay Securely
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import TitleSection from "@/components/TitleSection";
import FormInputText from "@/components/FormInputText";
import FormSectionTitle from "@/components/FormSectionTitle";
export default {
  name: "PaymentInfo",
  components: { TitleSection, FormInputText, FormSectionTitle },
  computed: {
    cardNumber: {
      get() {
        return this.$store.state.payment.cardNumber.value;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("changeCardNumber", val);
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("submitPayment");
    }
  }
};
</script>

<style scoped></style>
