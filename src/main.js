import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'
import Privado from './components/Privado.vue'
import Firebase from 'firebase/app'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueJquery from 'vue-jquery'


Vue.config.productionTip = false
Vue.use(Firebase)
Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(vueJquery)


const routes = [ 
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/privado', component: Privado }
]

const router = new VueRouter({ routes })

new Vue({ render: h => h(App), router }).$mount('#app')
