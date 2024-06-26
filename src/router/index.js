import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vehiculos from '../views/vehiculos.vue';
import EditarVehiculo from '../components/vehiculos/EditarVehiculo.vue';
import NewVehiculo from '../components/vehiculos/NewVehiculo.vue';
import Rutas from '../views/rutas.vue';
import EditarRuta from '../components/rutas/EditarRuta.vue';
import NewRuta from '../components/rutas/NewRuta.vue';
import Conductores from '../views/conductores.vue';
import EditarConductor from '../components/conductores/EditarConductor.vue';
import NewConductor from '../components/conductores/NewConductor.vue';
import Mantenimientos from '../views/mantenimientos.vue';
import EditarMantenimiento from '../components/mantenimientos/EditarMantenimiento.vue';
import NewMantenimiento from '../components/mantenimientos/NewMantenimiento.vue';
import Registros_viajes from '../views/registros_viajes.vue';
import EditarRegistros_viaje from '../components/registros_viajes/EditarRegistros_viaje.vue';
import NewRegistros_viaje from '../components/registros_viajes/NewRegistros_viaje.vue';

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
        path: '/rutas',
        name: 'Rutas',
        component: Rutas
    },
    {
        path: '/editar-ruta/:id',
        name: 'EditarRuta',
        component: EditarRuta
    },
    {
        path: '/add-rutas/',
        name: 'NewRuta',
        component: NewRuta
    },
    {
        path: '/conductores',
        name: 'Conductores',
        component: Conductores
    },
    {
        path: '/editar-conductor/:id',
        name: 'EditarConductor',
        component: EditarConductor
    },
    {
        path: '/add-conductores/',
        name: 'NewConductor',
        component: NewConductor
    },
    {
        path: '/mantenimientos',
        name: 'Mantenimientos',
        component: Mantenimientos
    },
    {
        path: '/editar-mantenimiento/:id',
        name: 'EditarMantenimiento',
        component: EditarMantenimiento
    },
    {
        path: '/add-mantenimientos/',
        name: 'NewMantenimiento',
        component: NewMantenimiento
    },
    {
        path: '/registros_viajes',
        name: 'Registros_viajes',
        component: Registros_viajes
    },
    {
        path: '/editar-registros_viaje/:id',
        name: 'EditarRegistros_viaje',
        component: EditarRegistros_viaje
    },
    {
        path: '/add-registros_viajes/',
        name: 'NewRegistros_viaje',
        component: NewRegistros_viaje
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