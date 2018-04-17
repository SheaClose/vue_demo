<template>
  <div id="app">
    <nav>
      <router-link tag="li" to="/">
        Home
      </router-link>
      <router-link tag="li" to="/products">
        Products
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js, Apphole"
    };
  }
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 0;
  list-style: none;
}
nav li:hover {
  cursor: pointer;
}
</style>
