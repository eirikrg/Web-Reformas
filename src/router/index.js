import Vue from 'vue'
import VueRouter from 'vue-router'

//Importamos las vistas
import Inicio from '../views/Inicio.vue'
import About from '../views/About.vue'
import Proyectos from '../views/Proyectos.vue'
import Lamparas from '../views/Lamparas.vue'
import Disenyos from '../views/Disenyos.vue'
import Asesoramiento from '../views/Asesoramiento.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Inicio
  },
  {
    path: '/sobre-nosotros',
    name: 'Sobre Nosotros',
    component: About
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos
  },
  {
    path: '/lamparas',
    name: 'Lámparas',
    component: Lamparas
  },
  {
    path: '/disenyos-propios',
    name: 'Modelos de diseño propios',
    component: Disenyos
  },
  {
    path: '/asesoramiento',
    name: 'Asesoramiento',
    component: Asesoramiento
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
