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
      <div class="d-flex justify-content-between">
        <button
          v-show="checkLogged"
          href=""
          @click="createItem"
          class="btn btn-primary"
        >
          <i class="fas fa-cart-plus"></i> Add to cart
        </button>
        <button
          v-show="checkLogged"
          href=""
          @click="createWish"
          class="btn btn-danger"
        >
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {
      login: false,
    };
  },
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
        this.$toasted.show("New Product added to cart", {
          theme: "outline",
          icon: {
            name: "shopping-cart",
          },
          position: "top-right",
          duration: 3000,
        });
      } else if (alreadyInCart == true) {
        this.$store.dispatch("increaseItem", this.card.id);
        this.$toasted.show("1 Product Added to Cart", {
          theme: "outline",
          icon: {
            name: "cart-plus",
          },
          position: "top-right",
          duration: 3000,
        });
      }
    },
    fetchCartItem() {
      this.$store.dispatch("fetchCartItem");
    },
    createWish() {
      let alreadyWish = false;
      for (let i = 0; i < this.wishItem.length; i++) {
        if (this.card.id == this.wishItem[i].ProductId) {
          alreadyWish = true;
        }
      }
      if (alreadyWish == true) {
        this.$toasted.show("Already on your wishlist", {
          theme: "outline",
          icon: {
            name: "heart",
          },
          position: "top-right",
          duration: 3000,
        });
      } else {
        this.$store.dispatch("createWish", this.card.id);
        this.$toasted.show("Product added to your wishlist", {
          theme: "outline",
          icon: {
            name: "heart",
          },
          position: "top-right",
          duration: 3000,
        });
      }
    },
    fetchUserWishlist() {
      this.$store.dispatch("fetchUserWishlist");
    },
  },
  created() {
    this.fetchCartItem();
    this.fetchUserWishlist();
  },
  computed: {
    cartItem() {
      return this.$store.state.cartItem;
    },
    wishItem() {
      return this.$store.state.wishList;
    },
    checkLogged() {
      return this.$store.getters.checkLogin;
    },
  },
};
</script>

<style>
</style>