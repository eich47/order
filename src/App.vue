<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col sm="6">
          <Navigation />

          <router-view></router-view>
        </b-col>
        <b-col sm="5">22</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: { Navigation }
};
</script>

<style lang="scss">
#app {
}
</style>
