import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios/axios-instance";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productData: [],
    role: {},
    cartItem: [],
    decStat: false,
    wishList: [],
    login: false,
  },
  mutations: {
    setProductData(state, payload) {
      state.productData = payload;
    },
    setRole(state, payload) {
      state.role = payload;
    },
    setCartItem(state, payload) {
      state.cartItem = payload;
    },
    setWishlist(state, payload) {
      state.wishList = payload;
    },
    setLogin(state) {
      state.login = true;
    },
    setLogout(state) {
      state.login = false;
    },
  },
  actions: {
    login(context, payload) {
      axios({
        url: "/users/login",
        method: "POST",
        data: payload,
      })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
          router.push("/");
          router.go();
        })
        .catch((err) => console.log(err));
    },
    logout(context) {
      localStorage.removeItem("access_token");
      context.commit("setLogout");
      router.push("/login");
    },
    register(context, payload) {
      axios({
        url: "/users/register",
        method: "POST",
        data: payload,
      })
        .then(() => {
          router.push("/login");
        })
        .catch((err) => console.log(err));
    },
    fetchUser(context) {
      axios({
        method: "GET",
        url: "/users",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          context.commit("setRole", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchProduct(context) {
      axios({
        method: "GET",
        url: "/products",
      })
        .then((response) => {
          console.log(response.data);
          context.commit("setProductData", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCartItem(context) {
      axios({
        method: "GET",
        url: "/carts",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.commit("setCartItem", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    increaseItem(context, payload) {
      axios({
        method: "PUT",
        url: "/carts/increase",
        data: { ProductId: payload },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchCartItem");
          this.$toasted.show("Item Increased", {
            theme: "outline",
            icon: {
              name: "plus-circle",
            },
            position: "top-right",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    decreaseItem(context, payload) {
      axios({
        method: "PUT",
        url: "/carts/decrease",
        data: { ProductId: payload },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchCartItem");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createItem(context, payload) {
      axios({
        method: "POST",
        url: "/carts",
        data: { ProductId: payload },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchCartItem");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(context, id) {
      axios({
        method: "DELETE",
        url: `/carts/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchCartItem");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserWishlist(context) {
      axios({
        method: "GET",
        url: "/wishlist",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.commit("setWishlist", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createWish(context, id) {
      axios({
        method: "POST",
        url: "/wishlist",
        data: { ProductId: id },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchUserWishlist");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteWish(context, id) {
      axios({
        method: "DELETE",
        url: `/wishlist/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchUserWishlist");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
  getters: {
    checkLogin: (state) => {
      if (localStorage.getItem("access_token")) {
        return (state.login = true);
      } else {
        return (state.login = false);
      }
    },
  },
});
