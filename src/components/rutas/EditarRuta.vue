<template>
    <div class="container">
        <div class="col-12 text-center">
            <div class="alert alert-success" role="alert">
                <h1 class="mb-0" style="color: green;">Editar Ruta</h1>
            </div>
        </div>
        <p></p>
        <p></p>
        <form @submit.prevent="updateRuta">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4" style="margin-right: 435px;">
                    <div class="mb-3">
                        <label for="id" class="form-label">Id</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" aria-describedby="codigoHelp" name="id"
                                disabled="disabled" v-model='ruta.id'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripcion</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="descripcion" aria-describedby="codigoHelp"
                                name="descripcion" v-model='ruta.descripcion'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="origen" class="form-label">Origen</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="origen" aria-describedby="codigoHelp"
                                name="origen" v-model='ruta.origen'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="destino" class="form-label">Destino</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="destino" aria-describedby="codigoHelp"
                                name="destino" v-model='ruta.destino'>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="distancia" class="form-label">Distancia</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                            <input type="number" class="form-control" id="distancia" aria-describedby="codigoHelp"
                                name="distancia" v-model='ruta.distancia'>
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
    name: 'EditarRuta',
    data() {
        return {
            ruta: {
                id: 0,
                descripcion: '',
                origen: '',
                destino: '',
                distancia: '',
            },
        }
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'Rutas' })
        },
        async updateRuta() {
            const res = await axios.put(`http://127.0.0.1:8000/api/rutas/${this.ruta.id}`, this.ruta)
            if (res.status == 200) {
                this.$router.push({ name: 'Rutas' })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Ruta has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.ruta.id = this.$route.params.id;
        console.log(`http://127.0.0.1:8000/api/rutas/${this.ruta.id}`)
        axios
            .get(`http://127.0.0.1:8000/api/rutas/${this.ruta.id}`)
            .then(response => { this.ruta = response.data.ruta })
    },
}
</script>