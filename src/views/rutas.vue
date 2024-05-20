<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Rutas</h1>
                </div>
                <button @click="newRuta()" class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus" />
                </button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">descripcion</th>
                            <th scope="col">origen</th>
                            <th scope="col">destino</th>
                            <th scope="col">distancia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(ruta, index) in rutas" :key="index">
                            <td>{{ ruta.id }}</td>
                            <td>{{ ruta.descripcion }}</td>
                            <td>{{ ruta.origen }}</td>
                            <td>{{ ruta.destino }}</td>
                            <td>{{ ruta.distancia }}</td>
                            <td>
                                <button @click="deleteRuta(ruta.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="trash" />
                                </button>
                                <button @click="editRuta(ruta.id)" class="btn btn-succes mx-2">
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
    name: 'Ruta',
    data() {
        return {
            rutas: []
        }
    },
    methods: {
        deleteRuta(codigo) {
            Swal.fire({
                title: `Do you want to delete the Ruta with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/rutas/${codigo}`)
                        .then(response => {
                            if (response.data.success) {
                                window.location.reload()
                                Swal.fire('Deleted!!', '', 'success')
                                this.products = response.data.products
                                
                            }
                        })
                }
            })
        },
        editRuta(id) {
            this.$router.push({ name: 'EditarRuta', params: { id: `${id}` } });
        },
        newRuta() {
            this.$router.push({ name: 'NewRuta' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/rutas")
            .then(response => (this.rutas = response.data.rutas))
    },
}
</script>