import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vehiculos from '../views/vehiculos.vue';
import EditarVehiculo from '../components/vehiculos/EditarVehiculo.vue';
import NewVehiculo from '../components/vehiculos/NewVehiculo.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/vehiculos',
        name: 'Vehiculos',
        component: Vehiculos
    },
    {
        path: '/editar-vehiculo/:id',
        name: 'EditarVehiculo',
        component: EditarVehiculo
    },
    {
        path: '/add-vehiculos/',
        name: 'NewVehiculo',
        component: NewVehiculo
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router