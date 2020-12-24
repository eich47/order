import Vue from "vue";
import Vuex from "vuex";
import shipping from "@/store/shipping";
import billing from "@/store/billing";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    shipping: shipping,
    billing
  }
});
