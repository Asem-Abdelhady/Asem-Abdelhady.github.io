<script lang="ts">
  import photo from "$lib/assets/photo.jpg";
</script>

<div id="profile_card">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src={photo} alt="Profile picture" id="profile_picture" />
  <h1>Asem Abdelhady</h1>
  <p>21 years</p>
  <p>Student</p>
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
</style>
