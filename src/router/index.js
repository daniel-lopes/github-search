import { createWebHistory, createRouter } from "vue-router";
import UserData from "../views/UserData"
import Main from "../views/Main"

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/user-data/:?user-data",
    name: "user-data",
    component: UserData
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;