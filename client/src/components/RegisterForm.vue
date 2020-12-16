<template>
  <div class="card card-container">
    <div class="mt-0 mb-3">
      <center><h3>Sign Up</h3></center>
    </div>
    <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
    <img
      id="profile-img"
      class="profile-img-card"
      src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    />
    <p id="profile-name" class="profile-name-card"></p>
    <form @submit.prevent="register" class="form-signin">
      <span id="reauth-email" class="reauth-email"></span>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">
        Sign Up
      </button>
    </form>
    <!-- /form -->
    <center>
      <a @click="showLogin" href="" class="forgot-password"> Login </a>
    </center>
  </div>

  <!-- /card-container -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    showLogin() {
      this.$router.push("/login");
    },
    register() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("register", payload);
    },
  },
};
</script>

<style>
</style>