<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  main {
    margin: 0;
    padding: 10px;
    background-color: white;
    font-family: "Neucha", cursive;
    font-family: "Work Sans", sans-serif;
  }
</style>
