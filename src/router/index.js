import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/Home.vue";
import NewBlog from '../views/NewBlog.vue'
import Login from "@/views/Login/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path:'/blog',
    name:'blog',
    component: NewBlog
  },
  {
    path:'/login',
    name:'login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
