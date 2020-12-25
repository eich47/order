import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingInfo from "@/components/ShoppingInfo";
import BillingInfo from "@/views/BillingInfo";
import PaymentInfo from "@/views/PaymentInfo";
import Report from "@/views/Report";

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
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentInfo
  },
  {
    path: "/configuration",
    name: "configuration",
    component: Report
  }
];

const router = new VueRouter({
  routes
});

export default router;
