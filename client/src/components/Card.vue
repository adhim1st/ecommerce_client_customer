<template>
  <div class="card col-md-3 m-3" style="width: 18rem">
    <img :src="card.image_url" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">
        <i class="fas fa-search-plus"></i> {{ card.name }}
      </h5>
      <p class="card-text">
        <i class="fas fa-money-bill"></i> Rp.{{ card.price }}
      </p>
      <p class="card-text">
        <i class="fas fa-box-open"></i> Stock {{ card.stock }}
      </p>
      <div class="d-flex justify-content-end">
        <button href="" @click="createItem" class="btn btn-primary">
          <i class="fas fa-cart-plus"></i> Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  methods: {
    createItem() {
      let alreadyInCart = false;
      console.log(this.card.id, this.cartItem.ProductId);
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.card.id == this.cartItem[i].ProductId) {
          alreadyInCart = true;
        }
      }
      if (alreadyInCart == false) {
        this.$store.dispatch("createItem", this.card.id);
      } else if (alreadyInCart == true) {
        this.$store.dispatch("increaseItem", this.card.id);
      }
    },
    fetchCartItem() {
      this.$store.dispatch("fetchCartItem");
    },
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