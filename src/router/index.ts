import { createRouter, createWebHistory } from "vue-router";
import mainRoutes from "./mainRoutes";
import cryptoRoutes from "./cryptoRoutes";

const routes = [...mainRoutes, ...cryptoRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
