<template>
        <div class="container">
        <div class="col-12 text-center">
            <div class="alert alert-success" role="alert">
                <h1 class="mb-0" style="color: green;">Editar Mantenimiento</h1>
            </div>
        </div>
        <p></p>
        <p></p>
        <form @submit.prevent="updateMantenimiento">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4" style="margin-right: 435px;">
                    <div class="mb-3">
                        <label for="id" class="form-label">Id</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" aria-describedby="codigoHelp" name="id"
                                disabled="disabled" v-model='mantenimiento.id'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="fecha" class="form-label">Fecha</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="date" class="form-control" id="fecha" aria-describedby="codigoHelp"
                                name="fecha" v-model='mantenimiento.fecha'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripcion</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="descripcion" aria-describedby="codigoHelp"
                                name="descripcion" v-model='mantenimiento.descripcion'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="costo" class="form-label">Costo</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="number" class="form-control" id="costo" aria-describedby="codigoHelp"
                                name="costo" v-model='mantenimiento.costo'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="vehiculo_id" class="form-label">Vehiculos </label>
                        <div class="input-group">
                            <select class="form-select" v-model="mantenimiento.vehiculo_id">
                                <option v-for="vehiculo in vehiculos" v-bind:value="vehiculo.id">{{ vehiculo.matricula
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
    name: 'EditarMantenimiento',
    data() {
        return {
            mantenimiento: {
                id: 0,
                vehiculo_id: 0,
                fecha: '',
                descripcion: '',
                costo: 0,
            }, vehiculos: []
        }
    },
    methods:{
        cancelar(){
            this.$router.push({name:'Mantenimientos'})
        },
        async updateMantenimiento(){
            const res = await axios.put(`http://127.0.0.1:8000/api/mantenimientos/${this.mantenimiento.id}`, this.mantenimiento)
            if(res.status == 200){
                this.$router.push({name: 'Mantenimientos'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Mantenimiento has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.mantenimiento.id = this.$route.params.id;
        console.log(`http://127.0.0.1:8000/api/mantenimientos/${this.mantenimiento.id}`)
        axios
            .get(`http://127.0.0.1:8000/api/mantenimientos/${this.mantenimiento.id}`)
            .then(response => {this.mantenimiento = response.data.mantenimiento;this.vehiculos = response.data.vehiculos})
    },
}
</script>