import Vue from 'vue'
import VueRouter from 'vue-router'

//Importamos las vistas
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre-nosotros',
    name: 'Sobre Nosotros',
    component: About
  },
  {
    path: '/contacta',
    name: 'Contacta',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
