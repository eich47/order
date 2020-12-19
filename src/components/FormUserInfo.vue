<template>
  <div>
    <b-form>
      <FormSectionTitle text="Recipient" />
      <FormInputText
        placeholder="Full Name"
        :isRequiredField="this.$store.state.shipping.fullName.isRequired"
        v-model.trim="fullName"
        :isValid="this.$store.state.shipping.fullName.isValid"
      />
      <FormInputPhone
        placeholder="DayTime Phone"
        user-text-part1="For delivery"
        user-text-part2="questions only"
        :isRequiredField="this.$store.state.shipping.phone.isRequired"
        :isValid="this.$store.state.shipping.phone.isValid"
        v-model.trim="phone"
      />
      <FormSectionTitle text="Address" class="mt-3" />
      <FormInputText
        placeholder="Street Address"
        :isRequiredField="this.$store.state.shipping.address.isRequired"
        v-model.trim="address"
        :isValid="this.$store.state.shipping.address.isValid"
      />
      <FormInputText
        placeholder="Apt, Suite, Gate Code (optional)"
        :isRequiredField="this.$store.state.shipping.additions.isRequired"
        v-model.trim="additions"
        :isValid="this.$store.state.shipping.additions.isValid"
      />
      <FormInputLocation
        placeholder="City"
        :isRequiredField="this.$store.state.shipping.city.isRequired"
        v-model.trim="city"
        :isValid="this.$store.state.shipping.city.isValid"
      />
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
              :isRequiredField="this.$store.state.shipping.zip.isRequired"
              v-model.trim="zip"
              :isValid="this.$store.state.shipping.zip.isValid"
            ></FormInputText>
          </b-col>
        </b-row>
      </b-container>
      <div class="col-6 pl-0 mt-3">
        <b-button block type="submit" variant="primary">
          Continue
        </b-button>
      </div>
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
  },
  computed: {
    fullName: {
      get() {
        return this.$store.state.shipping.fullName.value;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("changeFullName", val);
      }
    },
    phone: {
      get() {
        return this.$store.state.shipping.phone.value;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("changePhone", val);
      }
    },
    address: {
      get() {
        return this.$store.state.shipping.address.value;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("changeAddress", val);
      }
    },
    additions: {
      get() {
        return this.$store.state.shipping.additions.value;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("changeAdditions", val);
      }
    },
    zip: {
      get() {
        return this.$store.state.shipping.zip.value;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("changeZip", val);
      }
    },
    city: {
      get() {
        return this.$store.state.shipping.city.value;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("changeCity", val);
      }
    }
  }
};
</script>

<style scoped>
.wrapper + .wrapper {
  margin-top: 10px;
}
</style>
