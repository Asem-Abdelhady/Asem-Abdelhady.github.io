<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import {
    faLinkedin,
    faTelegram,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<footer class="anchors_icons">
  <div class="container">
    <a href="https://github.com/Asem-Abdelhady" id="gh-link"
      ><Fa icon={faGithub} style={"height:25px"} /></a
    >
  </div>

  <div class="container">
    <a
      href="https://www.linkedin.com/in/asem-abdelhady-21151b17a/"
      id="linkedIn-link"><Fa icon={faLinkedin} style={"height:25px"} /></a
    >
  </div>
  <div class="container">
    <a href="https://t.me/AsemSH2" id="tg-link"
      ><Fa icon={faTelegram} style={"height:25px"} /></a
    >
  </div>
  <div class="container">
    <a href="mailto:asemshawkey@gmail.com" id="email"
      ><Fa icon={faEnvelope} style={"height:25px"} />
    </a>
  </div>
</footer>

<style>
  .anchors_icons {
    background-color: #0d1425;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0d1425;
    height: 100px;
  }
  a {
    color: white;
    margin: 25px;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 25px;
    width: fit-content;
    block-size: fit-content;
  }
  .a:hover {
    box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
  }
</style>
