<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Raleway", sans-serif;
}
</style>
