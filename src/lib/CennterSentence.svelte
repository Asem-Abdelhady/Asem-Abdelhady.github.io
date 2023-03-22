<script lang="ts">
  export let sentence: string;
</script>

<div class="center-sentence">
  <p>
    {sentence}
  </p>
</div>

<style>
  .center-sentence {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
