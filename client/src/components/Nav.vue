<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" @click="showHome" href=""
        ><i class="fas fa-home"></i> BarBeKu</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" @click="showLogin" href=""
              ><i class="fas fa-sign-in-alt"></i> Login</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="showRegister" href=""
              ><i class="fas fa-user-plus"></i> Sign Up</a
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li
            v-show="$route.name !== 'Login' && $route.name !== 'Register'"
            class="nav-item dropdown"
          >
            <a
              v-show="checkLogged"
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled="true"
            >
              <i class="fas fa-user-circle"></i> My Account
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a @click="showCart" class="dropdown-item" href=""
                  ><i class="fas fa-shopping-cart"></i> Cart</a
                >
              </li>
              <li>
                <a @click="showWishlist" class="dropdown-item" href=""
                  ><i class="fas fa-heart"></i> Wishlist</a
                >
              </li>
              <li>
                <a @click="showHistory" class="dropdown-item" href=""
                  ><i class="fas fa-history"></i> History</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" @click="logout" href=""
                  ><i class="fas fa-sign-out-alt"></i> Logout</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    showHome() {
      this.$router.push("/");
    },
    showLogin() {
      this.$router.push("/login");
    },
    showRegister() {
      this.$router.push("/register");
    },
    showCart() {
      this.$router.push("/cart");
    },
    showHistory() {
      this.$router.push("/history");
    },
    showWishlist() {
      this.$router.push("/wishlist");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    checkLogged() {
      return this.$store.getters.checkLogin;
    },
  },
  created() {},
};
</script>

<style>
</style>