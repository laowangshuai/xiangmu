<template>
  <div id="app">
	  <jiajian></jiajian>
    <div id="nav">
      <router-link to="/">项目合作</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">


</style>
<script>
import jiajian from './components/jiajian.vue'

export default {
  name: 'App',
 components:{
	jiajian,
 },
	
 }
</script>
