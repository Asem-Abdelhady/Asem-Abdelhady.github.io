<script lang="ts">
  import type { IParagrpah } from "../interfaces/Paragrpah";
  import List from "./List.svelte";
  import Paragrpah from "./Paragrpah.svelte";

  let bioParagrpah: IParagrpah = {
    header: "Bio",
    body: " Third year Innoplis student. Interseted in new technologies, software architectures and making new projects.",
  };
  let workParagrpah: IParagrpah = {
    header: "Work",
    body: "Web3 | Web2 developer",
  };
  let contentParagpah: IParagrpah = {
    header: "Contact",
    body: "asemshawkey@gmail.com",
  };
</script>

<div id="about_card">
  <h1>About</h1>
  <div>
    <Paragrpah paragrpah={bioParagrpah} />
  </div>
  <div>
    <Paragrpah paragrpah={workParagrpah} />
  </div>
  <div>
    <List isSkills={false} />
  </div>
  <div>
    <List isSkills={true} />
  </div>
  <div>
    <Paragrpah paragrpah={contentParagpah} />
  </div>
</div>

<style>
  #about_card {
    display: flex;
    flex: 75%;
    flex-flow: column;
    padding: 50px 50px;
    background-color: white;
    border-radius: 20px;
  }
</style>
