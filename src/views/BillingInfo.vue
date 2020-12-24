<template>
  <div>
    <TitleSection text="Billing Info" />
    <p>some info here</p>

    <b-form @submit.prevent="onSubmit">
      <div class="col-6 pl-0 mt-3">
        <b-button block type="submit" variant="primary" :disabled="false">
          Continue
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import TitleSection from "@/components/TitleSection";
export default {
  name: "BillingInfo",
  components: { TitleSection },
  methods: {
    onSubmit() {
      console.log("onSumbit billing info");
    }
  }
};
</script>

<style scoped></style>
