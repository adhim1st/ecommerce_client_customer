import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NoPage from "../components/NoPage.vue";
import Cart from "../views/Cart.vue";
import History from "../views/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "*",
    name: "NoPage",
    component: NoPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else if (to.name == "Login" && isAuthenticated) next({ name: "Home" });
  else if (to.name == "Register" && isAuthenticated) next({ name: "Home" });
  else next();
});

export default router;
