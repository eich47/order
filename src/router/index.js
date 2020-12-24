import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingInfo from "@/components/ShoppingInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "shoppingInfo",
    component: ShoppingInfo
  }
];

const router = new VueRouter({
  routes
});

export default router;
