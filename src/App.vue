<template>
  <div id="app">
	  <h2>--------------APP代码-----------</h2>
	  <h2>{{$store.state.num}}</h2>
	  <button @click="bb">+</button>
	  <button @click="aa">-</button>
	  <h2>---------jiajian代码----------</h2>
	  <jiajian></jiajian>
	  <h2>----------enci代码-------------</h2>
    <div id="nav">
      <router-link to="/">项目合作</router-link>
    </div>

    <router-view></router-view>
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
 methods:{
	 bb(){
		 this.$store.commit("bb")
	 },
	 aa(){
		 this.$store.commit("aa")
	 }
 }





	
 }
</script>
