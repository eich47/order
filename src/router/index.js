import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingInfo from "@/components/ShoppingInfo";
import BillingInfo from "@/views/BillingInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "shippingInfo",
    component: ShoppingInfo
  },
  {
    path: "/billing",
    name: "billingInfo",
    component: BillingInfo
  }
];

const router = new VueRouter({
  routes
});

export default router;
