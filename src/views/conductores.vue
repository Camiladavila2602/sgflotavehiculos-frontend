<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">Conductores</h1>
                </div>
                <button @click="newConductor()" class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus" />
                </button>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">nombre</th>
                            <th scope="col">apellido</th>
                            <th scope="col">licencia</th>
                            <th scope="col">fecha de contratacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(conductor, index) in conductores" :key="index">
                            <td>{{ conductor.id }}</td>
                            <td>{{ conductor.nombre }}</td>
                            <td>{{ conductor.apellido }}</td>
                            <td>{{ conductor.licencia }}</td>
                            <td>{{ conductor.fecha_contratacion }}</td>
                            <td>
                                <button @click="deleteConductor(conductor.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="trash" />
                                </button>
                                <button @click="editConductor(conductor.id)" class="btn btn-succes mx-2">
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
    name: 'Conductor',
    data() {
        return {
            conductores: []
        }
    },
    methods: {
        deleteConductor(codigo) {
            Swal.fire({
                title: `Do you want to delete the Conductor with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/conductores/${codigo}`)
                        .then(response => {
                            if (response.data.success) {
                                window.location.reload()
                                Swal.fire('Deleted!!', '', 'success')
                            }
                        })
                }
            })
        },
        editConductor(id) {
            this.$router.push({ name: 'EditarConductor', params: { id: `${id}` } });
        },
        newConductor() {
            this.$router.push({ name: 'NewConductor' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/conductores")
            .then(response => (this.conductores = response.data.conductors))
    },
}
</script>