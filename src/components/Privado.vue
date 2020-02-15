<template>
    <div>
        <nav class="navbar navbar-dark bg-primary">
            <a href="/" class="navbar-brand">Ejemplo Vue + firebase</a>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" id="menu1"
                    type="button" data-toggle="dropdown">aaaaaaaaaaaa<span 
                    class="caret"></span></button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="menu">
                    <li role="presentation"><a role="menuitem">Cerrar sesión</a></li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row mt-5">
            <div class="col-sm-4">
                <div class="card">
                <div class="card-header">
                    Agregar una nueva tarea
                </div>
                <div class="card-body">
                    <form @submit.prevent="agregarTarea()">
                        <div class="form-group">
                            <p>Nombre de la tarea:</p>
                            <input type="text" class="form-control" 
                                v-model="tarea.nombre">
                        </div>
                        <div class="form-group">
                            <p>Archivo:</p>
                            <div class="custom-file">
                                <input type="file" id="archivo" 
                                    class="custom-file-input" v-on:change = "obtenerArchivo">
                                <label class="custom-file-label" for="archivo">
                                    {{archivo.name}}</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary" 
                                v-on:click = "agregarTarea">Agregar</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div class="col-sm-8 text-center">
                <div class="card">
                <div class="card-header">
                    Lista tareas
                </div>
                <div class="card-body">
                    <table class="table">
                    <tr v-for="(tarea, id) of listaTareas" v-bind:key= "id" 
                        v-bind:url = "tarea.urlArchivo">
                        <td>{{ tarea.nombre }}</td>
                        <td><a v-bind:href="tarea.urlArchivo">{{ tarea.nombre }}</a></td>
                        <td>
                            <button class="btn btn-danger">Borrar</button>
                        </td>
                    </tr>
                    </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/storage'
import {db} from '../db.js'

export default {
    data: function() {
        return {
            tarea: {nombre: '', archivo: ''},
            archivo: '',
        }
    },
    methods: {
        obtenerArchivo: function(event) {
            this.archivo = event.target.files[0];
        },
        agregarTarea: function () {
            let urlArchivo = ''
            const storageRef = firebase.storage().ref(
                `${this.archivo.name}`).put(this.archivo);
            storageRef.snapshot.ref.getDownloadURL().then(function (url) {
                 urlArchivo = url;
            });
            this.tarea.archivo = urlArchivo;
        }
    },
    firestore: function() {
        return {
            listaTareas: db.collection('lista-notas')
        }
    }
}
</script>