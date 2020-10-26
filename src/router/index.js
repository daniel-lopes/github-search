import { createWebHistory, createRouter } from 'vue-router';
import UserData from '../views/UserData';
import Main from '../views/Main';
import NotFound from '../views/NotFound' 

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/user-data/:?userData",
    name: "user-data",
    component: UserData
  },
  {
    path: "/:catchAll(.*)",
    name: 'notFound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;