<template>
  <div class="container">
    <div class="card">
      <center>
        <div class="mt-1 mb-3">
          <h2>Your Cart</h2>
        </div>
      </center>
      <table class="table table-hover shopping-cart-wrap">
        <thead class="text-muted">
          <tr>
            <th scope="col">Product</th>
            <th scope="col" width="200">Name</th>
            <th scope="col" width="200">Quantity</th>
            <th scope="col" width="200">Price</th>
            <th scope="col" width="150" class="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <CartItem
            v-for="(item, index) in cartItem"
            :key="index"
            :item="item"
            :cartid="index"
          />
        </tbody>
      </table>
      <div class="d-flex justify-content-end">
        <button
          @click="checkoutItem"
          type="button"
          class="btn btn-outline-primary float-right"
        >
          <i class="fas fa-shopping-bag"></i> Checkout
        </button>
      </div>
    </div>
    <!-- card.// -->
  </div>
</template>

<script>
import CartItem from "../components/CartItem";
export default {
  components: {
    CartItem,
  },
  methods: {
    fetchCartItem() {
      this.$store.dispatch("fetchCartItem");
    },
    checkoutItem() {},
  },
  created() {
    this.fetchCartItem();
  },
  computed: {
    cartItem() {
      return this.$store.state.cartItem;
    },
  },
};
</script>

<style>
</style>