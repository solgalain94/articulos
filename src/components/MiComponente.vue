<template>
  <section id="content">
    <h2 class="subheader">{{ titulo }}</h2>
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre"/>
    {{nombre}}

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad"/>
    {{edad}}
    <p v-if="edad && edad>=18" style="color:red">Eres mayor de edad</p>
    <p v-if="!edad || edad<18" style="color:red">Eres menor de edad</p>

    <h2>Directivas iterativas</h2>

    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula"> {{pelicula}} </li>
    </ol>
    
  
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Este es el subtítulo del componente",
      nombre: '',
      edad: '',
      peliculas: ['Batman', 'La mujer maravilla', 'Los vengadores']
    };
  },
};
</script>