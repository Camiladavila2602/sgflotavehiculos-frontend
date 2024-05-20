<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Registros de viajes</h1>
                </div>
                <button @click="newRegistros_viaje()" class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus" />
                </button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Vehiculo</th>
                            <th scope="col">Conductor</th>
                            <th scope="col">Ruta</th>
                            <th scope="col">Fecha de inicio</th>
                            <th scope="col">Fecha de final</th>
                            <th scope="col">Kilometraje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(registros_viaje, index) in registros_viajes" :key="index">
                            <td>{{ registros_viaje.id }}</td>
                            <td>{{ registros_viaje.matricula }}</td>
                            <td>{{ registros_viaje.nombre }}</td>
                            <td>{{ registros_viaje.descripcion }}</td>
                            <td>{{ registros_viaje.fecha_inicio }}</td>
                            <td>{{ registros_viaje.fecha_fin }}</td>
                            <td>{{ registros_viaje.kilometraje }}</td>
                            <td>
                                <button @click="deleteRegistros_viaje(registros_viaje.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="trash" />
                                </button>
                                <button @click="editRegistros_viaje(registros_viaje.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="pencil" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: 'Registros_viaje',
    data() {
        return {
            registros_viajes: []
        }
    },
    methods: {
        deleteRegistros_viaje(codigo) {
            Swal.fire({
                title: `Do you want to delete the Registros_viajes with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/registros_viajes/${codigo}`)
                        .then(response => {
                            if (response.data.success) {
                                window.location.reload()
                                Swal.fire('Deleted!!', '', 'success')
                                
                            }
                        })
                }
            })
        },
        editRegistros_viaje(id) {
            this.$router.push({ name: 'EditarRegistros_viaje', params: { id: `${id}` } });
        },
        newRegistros_viaje() {
            this.$router.push({ name: 'NewRegistros_viaje' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/registros_viajes")
            .then(response => (this.registros_viajes = response.data.registros_viajes))
    },
}
</script>