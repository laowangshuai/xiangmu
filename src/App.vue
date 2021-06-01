<template>
  <div id="app">
	  <jiajian></jiajian>
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
 comments:{
	
 },
 mounted() {
	console.log(this.$router)
}
 
}

</script>