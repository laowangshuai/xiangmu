import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
	num:10
  },
  mutations: {
		  
	  bb (state){
		  state.num++
	  },
	  aa(state){
		  state.num--
	  }
  },
  actions: {},
  modules: {
	  
  },
});
