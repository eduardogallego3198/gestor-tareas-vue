<template>
    <div class="container-fluid row">
        <h2 class="h2 col-12 text-center py-5">Autenticación:</h2>
        <div class="card col-3 mx-auto">
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <p>Correo electrónico:</p>
                        <input type ="text" id="email" class="col-12 form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <p>Contraseña:</p>
                        <input type="password" id="contrasena" class="col-12 form-control" v-model="contrasena">
                    </div>
                    <button class="btn btn-primary" v-on:click="autenticacion()">Acceso</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data: function() {
        return {
            email: '',
            contrasena: '',
            rutaAcceso: this.$router.push({ path: "/privado" })
        }
    },
    methods: {
        autenticacion: function() {
            const fireAuth = Firebase.auth().signInWithEmailAndPassword(this.email, 
                this.contrasena);
            fireAuth.then(function() { this.rutaAcceso }).catch(function(error) { console.log(
                error) });
        }
    }
}
</script>