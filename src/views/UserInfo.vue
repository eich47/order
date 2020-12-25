<template>
  <b-container>
    <Navigation />

    <router-view></router-view>
  </b-container>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "UserInfo",
  components: { Navigation }
};
</script>

<style scoped></style>
