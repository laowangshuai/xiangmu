import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [

 {
	 path:'/',
	 component:()=>import("../components/jiajian")
 },
 {
    path: "*",
    component:()=>
		import("../components/xxoo")
	
  }
];

const router = new VueRouter({
  routes,
});

export default router;
