import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import {
  LayoutPlugin,
  FormPlugin,
  ButtonPlugin,
  NavPlugin,
  FormInputPlugin,
  FormSelectPlugin
} from "bootstrap-vue";
Vue.use(LayoutPlugin);
Vue.use(FormPlugin);
Vue.use(ButtonPlugin);
Vue.use(NavPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormSelectPlugin);

import "@/css/custom.scss";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
