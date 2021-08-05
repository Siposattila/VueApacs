<template>
  <div>
    <Nav/>
    <main>
      <img alt="Vue logo" src="./assets/logo.png">
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
* {
  text-align: center;
}
</style>
