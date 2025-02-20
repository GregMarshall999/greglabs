import { createRouter, createWebHistory } from "vue-router";
import mainRoutes from "./mainRoutes";
import taskingRoutes from "./taskingRoutes";

const routes = [...mainRoutes, ...taskingRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
