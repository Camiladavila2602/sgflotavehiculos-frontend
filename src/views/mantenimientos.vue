<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Mantenimientos</h1>
                </div>
                <button @click="newMantenimiento()" class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus" />
                </button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Vehiculo</th>
                            <th scope="col">fecha</th>
                            <th scope="col">descripcion</th>
                            <th scope="col">costo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(mantenimiento, index) in mantenimientos" :key="index">
                            <td>{{ mantenimiento.id }}</td>
                            <td>{{ mantenimiento.matricula }}</td>
                            <td>{{ mantenimiento.fecha }}</td>
                            <td>{{ mantenimiento.descripcion }}</td>
                            <td>{{ mantenimiento.costo }}</td>
                            <td>
                                <button @click="deleteMantenimiento(mantenimiento.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="trash" />
                                </button>
                                <button @click="editMantenimiento(mantenimiento.id)" class="btn btn-succes mx-2">
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
    name: 'Mantenimiento',
    data() {
        return {
            mantenimientos: []
        }
    },
    methods: {
        deleteMantenimiento(codigo) {
            Swal.fire({
                title: `Do you want to delete the Mantenimientos with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/mantenimientos/${codigo}`)
                        .then(response => {
                            if (response.data.success) {
                                window.location.reload()
                                Swal.fire('Deleted!!', '', 'success')
                                
                            }
                        })
                }
            })
        },
        editMantenimiento(id) {
            this.$router.push({ name: 'EditarMantenimiento', params: { id: `${id}` } });
        },
        newMantenimiento() {
            this.$router.push({ name: 'NewMantenimiento' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/mantenimientos")
            .then(response => (this.mantenimientos = response.data.mantenimientos))
    },
}
</script>