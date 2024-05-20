<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Vehiculos</h1>
                </div>
                <button @click="newVehiculo()" class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus" />
                </button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">matricula</th>
                            <th scope="col">marca</th>
                            <th scope="col">modelo</th>
                            <th scope="col">año</th>
                            <th scope="col">estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(vehiculo, index) in vehiculos" :key="index">
                            <td>{{ vehiculo.id }}</td>
                            <td>{{ vehiculo.matricula }}</td>
                            <td>{{ vehiculo.marca }}</td>
                            <td>{{ vehiculo.modelo }}</td>
                            <td>{{ vehiculo.ano }}</td>
                            <td>{{ vehiculo.estado }}</td>
                            <td>
                                <button @click="deleteVehiculo(vehiculo.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="trash" />
                                </button>
                                <button @click="editVehiculo(vehiculo.id)" class="btn btn-succes mx-2">
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
    name: 'Clase',
    data() {
        return {
            vehiculos: []
        }
    },
    methods: {
        deleteVehiculo(codigo) {
            Swal.fire({
                title: `Do you want to delete the Vehiculo with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below*/
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/vehiculos/${codigo}`)
                        .then(response => {
                            if (response.data.success) {
                                // Recargar la página
                                window.location.reload()
                                Swal.fire('Deleted!!', '', 'success')
                                this.products = response.data.products
                            }
                        })
                }
            })
        },
        editVehiculo(id) {
            this.$router.push({ name: 'EditarVehiculo', params: { id: `${id}` } });
        },
        newVehiculo() {
            this.$router.push({ name: 'NewVehiculo' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/vehiculos")
            .then(response => (this.vehiculos = response.data.vehiculos))
    },
}
</script>