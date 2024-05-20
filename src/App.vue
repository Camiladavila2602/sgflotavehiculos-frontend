<template>
  <nav style="font-family: Arial, sans-serif; background-color: #333; padding: 10px;">
    <router-link to="/"
      style="color: white; text-decoration: none; margin: 0 10px; padding: 8px 16px; display: inline-block;">Home</router-link>
    |
    <router-link to="/about"
      style="color: white; text-decoration: none; margin: 0 10px; padding: 8px 16px; display: inline-block;">About</router-link>
    |
    <router-link to="/vehiculos"
      style="color: white; text-decoration: none; margin: 0 10px; padding: 8px 16px; display: inline-block;">Vehiculos</router-link>
    |
    <router-link to="/rutas"
      style="color: white; text-decoration: none; margin: 0 10px; padding: 8px 16px; display: inline-block;">Rutas</router-link>
    |
    <router-link to="/conductores"
      style="color: white; text-decoration: none; margin: 0 10px; padding: 8px 16px; display: inline-block;">Conductores</router-link>
    |
    <router-link to="/mantenimientos"
      style="color: white; text-decoration: none; margin: 0 10px; padding: 8px 16px; display: inline-block;">Mantenimientos</router-link>
    |
    <router-link to="/registros_viajes"
      style="color: white; text-decoration: none; margin: 0 10px; padding: 8px 16px; display: inline-block;">Registros
      de viajes</router-link>
  </nav>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
