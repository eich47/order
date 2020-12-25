<template>
  <b-container>
    <Navigation />

    <router-view class="shipping"></router-view>
  </b-container>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "UserInfo",
  components: { Navigation }
};
</script>

<style scoped>
.shipping {
  padding-left: 16px;
}
</style>
