import Home from "../views/Home.vue";
import Hamburguesas from "../views/Hamburguesas.vue";
import Perros from "../views/Perros.vue";
import Pizzas from "../views/Pizzas.vue";
import Bebidas from "../views/Bebidas.vue";
import Postres from "../views/Postres.vue";
import Promociones from "../views/Promociones.vue";
import Nosotros from "../views/Nosotros.vue";

import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/hamburguesas", component: Hamburguesas },

    { path: "/perros", component: Perros },
    { path: "/pizzas", component: Pizzas },
    { path: "/bebidas", component: Bebidas },
    { path: "/postres", component: Postres },
    { path: "/promociones", component: Promociones },
    { path: "/nosotros", component: Nosotros }
];

export const router = createRouter({
    routes,
    history: createWebHashHistory()
});