<script lang="ts">
  import Comic from "./lib/Comic.svelte";
  import ProfileContainer from "./lib/ProfileContainer.svelte";
</script>

<main>
  <ProfileContainer />
  <Comic />
</main>

<style>
  * {
    box-sizing: border-box;
  }
  main {
    min-height: 95%;
  }
</style>
