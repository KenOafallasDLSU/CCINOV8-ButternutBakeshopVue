<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: Montserrat;
  src: url("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf") format("truetype");
}
@font-face {
  font-family: Montserrat;
  src: url("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf") format("truetype");
  font-weight: bold;
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
