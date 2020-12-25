<template>
  <div class="congratulations">
    <p v-if="loading">Calculate...</p>

    <p v-if="error">Sorry. Error has occurred.</p>

    <template v-if="!loading && !error">
      <FormSectionTitle text="Thank you for you order!" class="mt-4" />
      <p class="numberOrder">Order Number is: {{ orderNumber }}</p>
      <p>Your will recieve an email confirmation shortly on your email</p>
      <p>
        Estimated delivery Day is <span class="date">{{ deliveryDay }}</span>
      </p>
    </template>
  </div>
</template>

<script>
import FormSectionTitle from "@/components/FormSectionTitle";
export default {
  name: "Report",
  components: { FormSectionTitle },
  computed: {
    orderNumber() {
      return this.$store.state.report.orderNumber;
    },
    deliveryDay() {
      const date = new Date(this.$store.state.report.deliveryDay);
      console.log(this.$store.state.report.deliveryDay);
      let formatter = new Intl.DateTimeFormat("ru", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      return formatter.format(date);
    },
    loading() {
      return this.$store.state.report.loading;
    },
    error() {
      return this.$store.state.report.error;
    }
  },
  created() {
    this.$store.dispatch("getReport");
  }
};
</script>

<style scoped>
.congratulations {
  color: #000000;
}
.numberOrder,
.date {
  font-weight: bold;
}
.date {
  display: block;
}
</style>
