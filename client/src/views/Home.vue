<template>
  <div class="container">
    <div class="mt-3">
      <center><h3>All Product</h3></center>
    </div>
    <div class="row">
      <Card
        v-for="card in this.$store.state.productData"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Home",
  components: {
    Card,
  },
  methods: {
    fetchProduct() {
      this.$store.dispatch("fetchProduct");
    },
    fetchUser() {
      this.$store.dispatch("fetchUser");
    },
  },
  created() {
    this.fetchProduct();
    this.fetchUser();
  },
};
</script>
