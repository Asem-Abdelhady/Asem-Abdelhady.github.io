<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import {
    faLinkedin,
    faTelegram,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<div id="profile_card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src="/photo.jpg" alt="Profile picture" id="profile_picture" />
  <h1>Asem Abdelhady</h1>
  <p>21 years</p>
  <p>Student</p>
  <div class="anchors_icons">
    <a href="https://github.com/Asem-Abdelhady" id="gh-link"
      ><Fa icon={faGithub} /></a
    >
    <a
      href="https://www.linkedin.com/in/asem-abdelhady-21151b17a/"
      id="linkedIn-link"><Fa icon={faLinkedin} /></a
    >
    <a href="https://t.me/AsemSH2" id="tg-link"><Fa icon={faTelegram} /></a>
    <a href="mailto:asemshawkey@gmail.com" id="email"
      ><Fa icon={faEnvelope} />
    </a>
  </div>
</div>

<style>
  #profile_card {
    font-size: 20px;
    flex: 25%;
    padding: 50px 50px;
    color: white;
    background-color: #0d1425;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    margin-right: 20px;
  }
  #profile_picture {
    border-radius: 50%;
    height: 200px;
    margin-top: 30px;
  }
  a {
    color: white;
    margin: 5px;
  }
</style>
