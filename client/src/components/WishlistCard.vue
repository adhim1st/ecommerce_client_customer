<template>
  <div class="card col-md-4 m-3" style="width: 18rem">
    <img :src="wishItem.Product.image_url" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">
        <i class="fas fa-search-plus"></i> {{ wishItem.Product.name }}
      </h5>
      <p class="card-text">
        <i class="fas fa-money-bill"></i> {{ wishItem.Product.price }}
      </p>
      <p class="card-text">
        <i class="fas fa-box-open"></i> {{ wishItem.Product.stock }}
      </p>
      <div class="d-flex justify-content-end">
        <button href="" @click="deleteWish" class="btn btn-danger">
          <i class="fas fa-heart-broken"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wishItem"],
  methods: {
    deleteWish() {
      this.$store.dispatch("deleteWish", this.wishItem.ProductId);
      this.$toasted.show("Product remove from wishlist", {
        theme: "outline",
        icon: {
          name: "heart-broken",
        },
        position: "top-right",
        duration: 3000,
      });
    },
  },
};
</script>

<style>
</style>