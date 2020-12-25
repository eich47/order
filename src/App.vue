<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col sm="6">
          <router-view />
        </b-col>
        <b-col sm="5">
          <router-view name="goodsList" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    this.$router.push({ name: "shippingInfo" });
  }
};
</script>

<style lang="scss">
#app {
}
</style>
