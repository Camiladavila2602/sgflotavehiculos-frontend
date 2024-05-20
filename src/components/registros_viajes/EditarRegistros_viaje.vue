<template>
        <div class="container">
        <div class="col-12 text-center">
            <div class="alert alert-success" role="alert">
                <h1 class="mb-0" style="color: green;">Editar Registro de viaje</h1>
            </div>
        </div>
        <p></p>
        <p></p>
        <form @submit.prevent="updateRegistros_viaje">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4" style="margin-right: 435px;">
                    <div class="mb-3">
                        <label for="id" class="form-label">Id</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" aria-describedby="codigoHelp" name="id"
                                disabled="disabled" v-model='registros_viaje.id'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">

                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="fecha_inicio" class="form-label">Fecha de inicio</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="date" class="form-control" id="fecha_inicio" aria-describedby="codigoHelp"
                                name="fecha_inicio" v-model='registros_viaje.fecha_inicio'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="fecha_fin" class="form-label">Fecha de fin</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="date" class="form-control" id="fecha_fin" aria-describedby="codigoHelp"
                                name="fecha_fin" v-model='registros_viaje.fecha_fin'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="kilometraje" class="form-label">kilometraje</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="number" class="form-control" id="kilometraje" aria-describedby="codigoHelp"
                                name="kilometraje" v-model='registros_viaje.kilometraje'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="vehiculo_id" class="form-label">Vehiculos </label>
                        <div class="input-group">
                            <select class="form-select" v-model="registros_viaje.vehiculo_id">
                                <option v-for="vehiculo in vehiculos" v-bind:value="vehiculo.id">{{ vehiculo.matricula
                                    }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="conductor_id" class="form-label">Conductores </label>
                        <div class="input-group">
                            <select class="form-select" v-model="registros_viaje.conductor_id">
                                <option v-for="conductor in conductores" v-bind:value="conductor.id">{{ conductor.nombre
                                    }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="ruta_id" class="form-label">Rutas </label>
                        <div class="input-group">
                            <select class="form-select" v-model="registros_viaje.ruta_id">
                                <option v-for="ruta in rutas" v-bind:value="ruta.id">{{ ruta.descripcion
                                    }}</option>
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
    name: 'EditarRegistros_viaje',
    data() {
        return {
            registros_viaje: {
                id: 0,
                vehiculo_id: 0,
                conductor_id: 0,
                ruta_id: 0,
                fecha_inicio: '',
                fecha_fin: '',
                kilometraje: '',
            }, vehiculos: [], conductores: [], rutas: []
        }
    },
    methods:{
        cancelar(){
            this.$router.push({name:'Registros_viajes'})
        },
        async updateRegistros_viaje(){
            const res = await axios.put(`http://127.0.0.1:8000/api/registros_viajes/${this.registros_viaje.id}`, this.registros_viaje)
            if(res.status == 200){
                this.$router.push({name: 'Registros_viajes'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registros_viaje has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.registros_viaje.id = this.$route.params.id;
        axios
            .get(`http://127.0.0.1:8000/api/registros_viajes/${this.registros_viaje.id}`)
            .then(response => {this.registros_viaje = response.data.registros_viaje;this.vehiculos = response.data.vehiculos;this.conductores = response.data.conductores;this.rutas = response.data.rutas})
    },
}
</script>