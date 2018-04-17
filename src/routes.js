import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Products from "./components/Products";
import Details from "./components/Details";

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details
    }
  ]
});

export default routes;
