import Vue from "vue";
import VueRouter from "vue-router";
import Ninjas from "../views/Ninjas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Ninjas",
    component: Ninjas,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
