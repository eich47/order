<template>
  <div>
    <TitleSection text="Shipping Info" />
    <FormUserInfo />
  </div>
</template>

<script>
import TitleSection from "@/components/TitleSection";
import FormUserInfo from "@/components/FormUserInfo";
export default {
  name: "ShoppingInfo",
  components: { TitleSection, FormUserInfo }
};
</script>

<style scoped></style>
