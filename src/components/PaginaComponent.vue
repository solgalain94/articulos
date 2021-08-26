<template>
  <div class="general">
    <SliderComponent texto="Pagina de pruebas"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Página de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirAlBlog()">Redirigir al blog</button>
        <h4>{{ nombre }}</h4>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
export default {
  name: "PaginaComponent",
  components: {
    SidebarComponent,
    SliderComponent,
  },
  created() {
    console.log("Componente creado");
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado");
  },
  updated() {
    console.log("Componente actualizado");
  },
  destroyed() {
    console.log("Componente eliminado");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Sol Galain",
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "SOL GALAIN WEB";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    },
  },
};
</script>