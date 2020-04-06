<script>
  export let segment;
  let isOpen = false;
  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<style>
  @media (min-width: 769px) {
    nav {
      border-bottom: solid gray 1px;
    }
  }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="logo.jpg" alt="virus" />
    </a>
    <span
      class:is-active={isOpen}
      role="button"
      class="navbar-burger"
      aria-label="menu"
      on:click={toggleNav}
      aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>
  <div class="navbar-menu" class:is-active={isOpen}>
    <div class="navbar-start">
      <a href="/" class:is-active={segment === undefined} class="navbar-item">
        Home
      </a>

      <a href="about" class:is-active={segment === 'about'} class="navbar-item">
        About
      </a>
    </div>
  </div>

</nav>
