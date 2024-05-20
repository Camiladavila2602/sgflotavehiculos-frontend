<template>
    <div class="container">
        <div class="col-12 text-center">
            <div class="alert alert-success" role="alert">
                <h1 class="mb-0" style="color: green;">Nueva Conductor</h1>
            </div>
        </div>
        <p></p>
        <p></p>
        <form @submit.prevent="saveConductor">

            <div class="row justify-content-center align-items-center">
                <div class="col-md-4" style="margin-right: 435px;">
                    <div class="mb-3">
                        <label for="id" class="form-label">Id</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" aria-describedby="codigoHelp" name="id"
                                disabled="disabled" v-model='conductor.id'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="nombre" aria-describedby="codigoHelp"
                                name="nombre" v-model='conductor.nombre'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="apellido" aria-describedby="codigoHelp"
                                name="apellido" v-model='conductor.apellido'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="licencia" class="form-label">Licencia</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="number" class="form-control" id="licencia" aria-describedby="codigoHelp"
                                name="licencia" v-model='conductor.licencia'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="fecha_contratacion" class="form-label">Fecha de contratacion</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                            <input type="date" class="form-control" id="fecha_contratacion" aria-describedby="codigoHelp"
                                name="fecha_contratacion" v-model='conductor.fecha_contratacion'>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Save</button>
            <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: 'NewConductor',
    data() {
        return {
            conductor: {
                id: 0,
                nombre: '',
                apellido: '',
                licencia: '',
                fecha_contratacion: '',
            },
        }
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'Conductores' })
        },
        async saveConductor() {
            const res = await axios.post(`http://127.0.0.1:8000/api/conductores/`, this.conductor)
            if (res.status == 200) {
                this.$router.push({ name: 'Conductores' })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Conductor has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
    },
}
</script>