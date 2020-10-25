import { createWebHistory, createRouter } from "vue-router";
import UserData from "../views/UserData"
import Search from "../components/Search"

const routes = [
  {
    path: "/",
    component: Search,
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