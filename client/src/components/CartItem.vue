<template>
  <tr>
    <td>
      <figure class="media">
        <div class="img-wrap">
          <img
            id="itemImg"
            :src="item.Product.image_url"
            class="img-thumbnail img-sm img-fluid"
          />
        </div>
      </figure>
    </td>
    <td>
      <figcaption class="media-body">
        <h6 class="title text-truncate">{{ item.Product.name }}</h6>
      </figcaption>
    </td>
    <td>
      <div class="row">
        <div class="col-sm-12">
          <div class="input-group" style="width: 80%">
            <span class="input-group-btn">
              <button
                @click="decreaseItem"
                type="button"
                class="quantity-left-minus btn btn-danger btn-number"
                data-type="minus"
                data-field=""
              >
                <span><i class="fas fa-minus"></i></span>
              </button>
            </span>
            <input
              type="text"
              id="quantity"
              name="quantity"
              class="form-control input-number"
              :value="item.quantity"
              min="1"
              :max="item.Product.stock"
            />
            <span class="input-group-btn">
              <button
                @click="increaseItem"
                type="button"
                class="quantity-right-plus btn btn-success btn-number"
                data-type="plus"
                data-field=""
              >
                <span><i class="fas fa-plus"></i></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </td>
    <td>
      <div class="price-wrap">
        <var class="price">Rp {{ item.Product.price }}</var>
        <!-- <small class="text-muted">(USD5 each)</small> -->
      </div>
      <!-- price-wrap .// -->
    </td>
    <td>
      <button @click="deleteItem" type="button" class="btn btn-outline-danger">
        <i class="fas fa-trash"></i> Remove
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item", "cartid"],
  data() {
    return {};
  },
  methods: {
    increaseItem() {
      if (this.item.quantity >= this.item.Product.stock) {
        this.$toasted.show("No More Stock Available", {
          theme: "outline",
          icon: {
            name: "box",
          },
          position: "top-right",
          duration: 3000,
        });
      } else {
        this.$store.dispatch("increaseItem", this.item.ProductId);
        this.$toasted.show("Item Increased", {
          theme: "outline",
          icon: {
            name: "plus-circle",
          },
          position: "top-right",
          duration: 3000,
        });
      }
    },
    decreaseItem() {
      console.log(this.item.quantity);
      if (this.item.quantity <= 1) {
        this.$toasted.show("Minimum 1 Quantity", {
          theme: "outline",
          icon: {
            name: "boxes",
          },
          position: "top-right",
          duration: 3000,
        });
      } else {
        this.$store.dispatch("decreaseItem", this.item.ProductId);
        this.$toasted.show("Item Decreased", {
          theme: "outline",
          icon: {
            name: "minus-circle",
          },
          position: "top-right",
          duration: 3000,
        });
      }
    },
    deleteItem() {
      this.$store.dispatch("deleteItem", this.item.ProductId);
      this.$toasted.show("Item Deleted", {
        theme: "outline",
        icon: {
          name: "trash-alt",
        },
        position: "top-right",
        duration: 3000,
      });
    },
  },
  computed: {},
};
</script>

<style>
#itemImg {
  height: 15rem;
}
</style>