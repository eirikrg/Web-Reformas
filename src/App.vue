<template>
  <div id="app">
     <nav class="navbar navbar-expand-lg navbar-light align-content-center p-0">
       <img src="./assets/avlogo.png">
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse text-center color-fuerte justify-content-center" id="navbarNavAltMarkup">
         <div class="navbar-nav">
           <router-link to="/">Inicio</router-link>
           <router-link to="/proyectos">Proyectos</router-link>
           <router-link to="/lamparas">Lámparas</router-link>
           <router-link to="/disenyos-propios">Modelos de diseño propios</router-link>
           <router-link to="/asesoramiento">Asesoramiento</router-link>
           <router-link to="/sobre-nosotros">Sobre nosotros</router-link>
         </div>
       </div>
     </nav>
     <router-view/>
   </div>
</template>

<style>
/* Declaración de fuentes personalizadas */
@font-face {
  font-family: "Poiret";
  src: url(./assets/fonts/PoiretOne.ttf) format("truetype");
}
@font-face {
  font-family: "Simplifica";
  src: url(./assets/fonts/Simplifica.ttf) format("truetype");
}
@font-face {
  font-family: "AMGDT";
  src: url(./assets/fonts/AMGDTRegular.ttf) format("truetype");
}

/*COLORES*/
/*light = #bac8b9*/
/*dark = #97ad96*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

nav {
  background-color: #bac8b9;
  text-transform: uppercase;
  font-family: "Poiret", Verdana, Tahoma;
  padding: 30px;
}

nav a {
  color: #000;
  padding: 10px 10px;
}

nav img {
  max-height: 100px;
  max-width: 100px;
}

nav a:hover {
  color: #fff;
  transition: 0.1s
}

nav div.color-fuerte{
  background-color: #97ad96;
  padding: 30px;
  margin: 0;
}

/*VISTAS*/
div.container-fluid {
  padding: 0;
  font-family: "Poiret", Verdana, Tahoma;
}

div.container-1{
  padding: 30px;
  margin-left: 100px;
  background-color: #bac8b9;
  margin-top: 20px;
}

div.container-2{
  padding: 30px;
  margin-right: 100px;
  background-color: #bac8b9;
  margin-top: 20px;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>