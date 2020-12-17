<template>
  <div class="container">
    <div class="card">
      <div>
        <center><h3>Your Wish List</h3></center>
      </div>
      <div class="row">
        <WishlistCard
          v-for="(wishItem, index) in wishlistItem"
          :key="index"
          :wishItem="wishItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WishlistCard from "../components/WishlistCard";
export default {
  components: {
    WishlistCard,
  },
  methods: {
    fetchUserWishlist() {
      this.$store.dispatch("fetchUserWishlist");
    },
  },
  created() {
    this.fetchUserWishlist();
  },
  computed: {
    wishlistItem() {
      return this.$store.state.wishList;
    },
  },
};
</script>

<style>
</style>