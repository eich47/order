<template>
  <nav>
    <b-nav>
      <b-nav-item
        v-for="navItem in navigationItem"
        :key="navItem.id"
        class="way-item"
        :style="styleArrow"
        :to="navItem.routerTo"
        >{{ navItem.ui }}</b-nav-item
      >
    </b-nav>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      styleArrow: {
        backgroundImage: `url(${require("@/assets/ico/nav-arrow.png")})`
      },
      navigationItem: [
        {
          id: 1,
          ui: "Shipping",
          routerTo: { name: "shippingInfo" }
        },
        {
          id: 2,
          ui: "Billing",
          routerTo: { name: "billingInfo" }
        },
        { id: 3, ui: "Payment" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~@/css/var.scss";

.way-item {
  background-repeat: no-repeat;
  background-position: center right;
  padding-right: 11px;

  &:last-child {
    background-image: none !important;
  }
}
.router-link-exact-active {
  color: $primary;
}
</style>
