<script lang="ts">
  import type { IParagrpah } from "../interfaces/Paragrpah";
  export let paragrpah: IParagrpah;
</script>

<h2>
  {paragrpah.header}
</h2>
<p>
  {paragrpah.body}
</p>

<style>
  p {
    font-size: large;
  }
</style>
