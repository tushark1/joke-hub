<template>
  <div class="flex flex-col min-h-screen" id="app">
    <main class="flex flex-col sm:px-10 px-4 w-full flex-grow">
      <Nav></Nav>
      <div class="w-full pb-10">
        <jokes></jokes>
      </div>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import Jokes from "./modules/jokes/views/Jokes.vue";
export default {
  name: "App",
  components: { Nav, Jokes, FooterComponent },
  mounted() {},
};
</script>

<style></style>
