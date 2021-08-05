import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Profile from "@/views/Profile";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { loginRequired: false }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { loginRequired: false }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { loginRequired: false }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { loginRequired: true }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(async (to, from, next) => {

// })

export default router
