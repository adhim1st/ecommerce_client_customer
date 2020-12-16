<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
body {
  font-family: "Raleway", sans-serif;
}
</style>
