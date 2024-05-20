<template>
    <div class="container">
        <div class="col-12 text-center">
            <div class="alert alert-success" role="alert">
                <h1 class="mb-0" style="color: green;">Editar Vehiculo</h1>
            </div>
        </div>
        <p></p>
        <p></p>
        <form @submit.prevent="updateVehiculo">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4" style="margin-right: 435px;">
                    <div class="mb-3">
                        <label for="id" class="form-label">Id</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" aria-describedby="codigoHelp" name="id"
                                disabled="disabled" v-model='vehiculo.id'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="matricula" class="form-label">Matricula</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="matricula" aria-describedby="codigoHelp"
                                name="matricula" v-model='vehiculo.matricula'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="marca" class="form-label">Marca</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="marca" aria-describedby="codigoHelp"
                                name="marca" v-model='vehiculo.marca'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="modelo" class="form-label">modelo</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="modelo" aria-describedby="codigoHelp"
                                name="modelo" v-model='vehiculo.modelo'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="ano" class="form-label">Año</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                            <input type="number" class="form-control" id="ano" aria-describedby="codigoHelp"
                                name="ano" v-model='vehiculo.ano'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="codigo" class="form-label">Estado</label>
                        <div class="input-group">
                            <select class="form-select" v-model="vehiculo.estado">
                                <option  value="" selected></option>
                                <option  value="activo">activo</option>
                                <option  value="en mantenimiento">en mantenimiento</option>
                                <option  value="retirado">retirado</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn btn-primary" type="submit">Actualizar</button>
            <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: 'EditarVehiculo',
    data() {
        return {
            vehiculo: {
                id: 0,
                matricula: '',
                marca: '',
                modelo: '',
                ano: '',
                estado: '',
            },
        }
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'Vehiculos' })
        },
        async updateVehiculo() {
            const res = await axios.put(`http://127.0.0.1:8000/api/vehiculos/${this.vehiculo.id}`, this.vehiculo)
            if (res.status == 200) {
                this.$router.push({ name: 'Vehiculos' })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Vehiculo has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.vehiculo.id = this.$route.params.id;
        console.log(`http://127.0.0.1:8000/api/vehiculos/${this.vehiculo.id}`)
        axios
            .get(`http://127.0.0.1:8000/api/vehiculos/${this.vehiculo.id}`)
            .then(response => { this.vehiculo = response.data.vehiculo })
    },
}
</script>