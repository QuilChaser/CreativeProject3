import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/store.vue";
import Space from "../views/Space.vue";
import Mystery from "../views/Mystery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
  {
    path: "/space",
    name: "Space",
    component: Space,
  },
  {
    path: "/mystery",
    name: "Mystery",
    component: Mystery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
