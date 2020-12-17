<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col sm="6">
          <Navigation />
          <TitleSection text="Shipping Info" />
        </b-col>
        <b-col sm="5">22</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import TitleSection from "@/components/TitleSection";
export default {
  name: "App",
  components: { TitleSection, Navigation }
};
</script>

<style lang="scss">
#app {
}
</style>
