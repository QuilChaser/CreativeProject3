<template>
<div id="app">
  <div id="nav">
    <h1>Interactive MadLibs</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/store">Store</router-link> |
    <router-link to="/space">Space</router-link> |
    <router-link to="/mystery">Mystery</router-link>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  box-sizing: border-box;
}

.content {
  margin-bottom: 50px;
}

h2 {
  margin-bottom: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #eee;
  margin-bottom: 1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.newLib {
  display: black;
  background: #42b983;
  color: white;
  border: none;
  padding: .5rem 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
}

.newLib:hover {
  background: #32a973;
  color: white;
  text-decoration: none;
}

form {
  background: #ffa;
  border-radius: 2rem;
  padding: 1rem;
}

form p {
  text-decoration: underline;
}

button {
  background: #42b983;
  color: white;
  border: none;
  padding: .5rem 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
}

.story {
  width: 75%;
  margin: auto;
}

footer {
  padding: 2rem 0rem;
  background: #ddd;
  color: black;
}

footer p {
  margin: 0;
}
</style>
