<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/" tag="a">home</router-link>
    <router-link to="about" tag="a">about</router-link>
    <router-link to="pokemon" tag="a">pokemon</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
