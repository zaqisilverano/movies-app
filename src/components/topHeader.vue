<template>    
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
        </div>

        <div class="nav">
            <router-link to="/">Movies</router-link>
            <router-link to="/favourites" class="favourites-link">Favourites</router-link>
        </div>
    </div>
</template>

<style lang="scss">
.header {
  background: white;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  .logo {
    img {
      width: 100px;
    }
  }

  .nav {
    a {
      text-decoration: none;
      color: #2c3e50;
      margin-left: 20px;

      &.router-link-exact-active {
        color: #FE7A21;
      }
    }
  }
}
</style>