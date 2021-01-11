import Vue from "vue";
import VueRouter from "../myRouter";
// import VueRouter from "vue-router";
import Home from "../views/Home.vue"

Vue.use(VueRouter)

//路由的基本配置
const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    // beforeEnter(from, to, next) {
    //   console.log(from, to);
    //   setTimeout(() => {
    //     next()
    //   }, 2000)
    // },
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      keepAlive: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;