<script lang="ts">
</script>

<nav class="navbar">
  <div class="logo">El3os</div>

  <ul class="nav-links">
    <!-- NAVIGATION MENUS -->
    <div class="menu">
      <li><a href="/">Home</a></li>

      <li><a href="/profile">Profile</a></li>

      <li>
        <a href="/comic">Comic</a>
      </li>
    </div>
  </ul>
</nav>

<style>
  * {
    margin: 0;

    padding: 0;

    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  .navbar {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 20px;

    margin: 20px;

    background-color: #0d1425;

    color: #fff;
  }

  .nav-links a {
    color: #fff;
  }

  .logo {
    font-size: 32px;
  }

  .menu {
    display: flex;

    gap: 1em;

    font-size: 18px;
  }

  .menu li:hover {
    background-color: rgb(36, 18, 82);

    border-radius: 5px;

    transition: 0.3s ease;
  }

  .menu li {
    padding: 5px 14px;
  }
</style>
