<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col sm="6">
          <Navigation />

          <ShoppingInfo />
        </b-col>
        <b-col sm="5">22</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import ShoppingInfo from "@/components/ShoppingInfo";
export default {
  name: "App",
  components: { ShoppingInfo, Navigation }
};
</script>

<style lang="scss">
#app {
}
</style>
