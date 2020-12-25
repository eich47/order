import Vue from "vue";
import Vuex from "vuex";
import shipping from "@/store/shipping";
import billing from "@/store/billing";
import payment from "@/store/payment";
import report from "@/store/report";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    shipping: shipping,
    billing,
    payment,
    report
  }
});
