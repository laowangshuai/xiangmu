<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">项目合作</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
  a {
	  font-size: 20px;
    font-weight: bold;
    color: black;
  }
}
</style>
