<template>
  <div id="app">
	  <h2>---------jiajian代码----------</h2>
	  <jiajian></jiajian>
	  <h2>----------enci代码-------------</h2>
    <div id="nav">
      <router-link to="/">项目合作</router-link>
    </div>
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
